import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {addCategoryApi, deleteCategoryApi, editCategoryApi, fetchCategories} from "./CategoryApi";

let id: number = 10;

interface Todo {
    id: number;
    text: string;
    checked: boolean;
    category: string;
}

interface State {
    todos: Todo[];
    activeCategory: string;
    todosToShow: Todo[];
    search: string;
}

const initialState: State = {
    todos: [
    ],
    activeCategory: "",
    todosToShow: [],
    search: '',
};

export const ListTODO = createSlice({
    name: 'todo list',
    initialState,
    reducers: {
        checkTODO: (state, action: PayloadAction<number>) => {
            let todoFind = state.todos.find(item => item.id === action.payload);
            if (todoFind) {
                todoFind.checked = !todoFind.checked;
                ListTODO.caseReducers.updateTodoShow(state);
            }
        },
        addTODO: (state, action: PayloadAction<{ text: string, checked: boolean }>) => {
            if (state.activeCategory !== "") {
                state.todos = [
                    ...state.todos,
                    {
                        id: id,
                        text: action.payload.text,
                        checked: action.payload.checked,
                        category: state.activeCategory
                    }
                ];
                ListTODO.caseReducers.updateTodoShow(state);
            }
        },
        deleteCheckedTodo: (state) => {
            state.todos = state.todos.filter(item => (item.checked === false || item.category !== state.activeCategory));
            ListTODO.caseReducers.updateTodoShow(state);
        },
        deleteCategoryTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(item => item.category !== action.payload);
            state.activeCategory = "";
            ListTODO.caseReducers.updateTodoShow(state);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const toDelete = state.todos.find(item => item.id === action.payload);
            if (toDelete) {
                state.todos = state.todos.filter(item => item !== toDelete);
                ListTODO.caseReducers.updateTodoShow(state);
            }
        },
        updateCategory: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload;
            ListTODO.caseReducers.updateTodoShow(state);
        },
        updateTodoShow: (state) => {
            state.todosToShow = state.todos.filter(item => item.category === state.activeCategory && item.text.includes(state.search));
        },
        updateSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
            ListTODO.caseReducers.updateTodoShow(state);
        },

        /*editCategoryTodo: (state, action: PayloadAction<[number, string]>) => {
            let rename = state.todos.find(item => item.category === action.payload[0]);
            while (rename !== undefined) {
                rename.category = action.payload[1];
                rename = state.todos.find(item => item.category === action.payload[0]);
            }
            ListTODO.caseReducers.updateTodoShow(state);
        },*/
    },
    extraReducers: (builder) => {
        builder.addCase(addTODOApi.fulfilled, (state, action) => {
            if (action.payload && action.payload.data.getAllCategories) {
                state.categories = action.payload.data.getAllCategories;
            }
        });
    },
});

export const {
    checkTODO,
    addTODO,
    deleteCheckedTodo,
    deleteTodo,
    updateCategory,
    updateTodoShow,
    deleteCategoryTodo,
    updateSearch,
    //editCategoryTodo
} = ListTODO.actions;

export default ListTODO.reducer;