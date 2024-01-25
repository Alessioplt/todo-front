import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {addTodoApi, fetchTODOByCategoryID} from "./TodoApi";
import listTodo from "../components/dashboard/ListTodo";

let id: number = 10;

interface Todo {
    id: string;
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
        checkTODO: (state, action: PayloadAction<string>) => {
            let todoFind = state.todos.find(item => item.id === action.payload);
            if (todoFind) {
                todoFind.checked = !todoFind.checked;
                ListTODO.caseReducers.updateTodoShow(state);
            }
        },
        addTODO: (state, action: PayloadAction<{ text: string, checked: boolean, id: string }>) => {
            if (state.activeCategory !== "") {
                // Check if todo with the same ID already exists
                const todoExists = state.todos.some(todo => todo.id === action.payload.id);
                if (!todoExists) {
                    state.todos = [
                        ...state.todos,
                        {
                            id: action.payload.id,
                            text: action.payload.text,
                            checked: action.payload.checked,
                            category: state.activeCategory
                        }
                    ];
                    ListTODO.caseReducers.updateTodoShow(state);
                } else {
                    console.log(`Todo with ID ${action.payload.id} already exists.`);
                }
            }
        },
        deleteCheckedTodo: (state) => {
            state.todos = state.todos.filter(item => (!item.checked || item.category !== state.activeCategory));
            ListTODO.caseReducers.updateTodoShow(state);
        },
        deleteCategoryTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(item => item.category !== action.payload);
            state.activeCategory = "";
            ListTODO.caseReducers.updateTodoShow(state);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const toDelete = state.todos.find(item => item.id === action.payload);
            if (toDelete) {
                state.todos = state.todos.filter(item => item !== toDelete);
                ListTODO.caseReducers.updateTodoShow(state);
            }
        },
        updateCategory: (state, action: PayloadAction<string>) => {
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
        builder.addCase(fetchTODOByCategoryID.fulfilled, (state, action) => {
            if (action.payload && action.payload.data.getTodoFromCategory) {
                for (let i = 0; i < action.payload.data.getTodoFromCategory.length; i++) {
                    ListTODO.caseReducers.addTODO(state, {
                        payload: {
                            text: String(action.payload.data.getTodoFromCategory[i].description),
                            checked: false,
                            id: String(action.payload.data.getTodoFromCategory[i].id),
                        }, type: ""
                    });
                }
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