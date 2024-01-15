import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let id: number = 10;

interface Todo {
    id: number;
    text: string;
    checked: boolean;
    category: number;
}

interface State {
    todos: Todo[];
    activeCategory: number;
    todosToShow: Todo[];
    search: string;
}

const initialState: State = {
    todos: [
        {
            id: 1,
            text: "Mock Todo 1",
            checked: false,
            category: 1
        },
        {
            id: 2,
            text: "Mock Todo 2",
            checked: true,
            category: 2
        },
        {
            id: 3,
            text: "Mock Todo 3",
            checked: true,
            category: 1
        }
    ],
    activeCategory: -1,
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
            if (state.activeCategory !== -1) {
                state.todos = [
                    ...state.todos,
                    {
                        id: id,
                        text: action.payload.text,
                        checked: action.payload.checked,
                        category: state.activeCategory
                    }
                ];
                id += 1;
                ListTODO.caseReducers.updateTodoShow(state);
            }
        },
        deleteCheckedTodo: (state) => {
            state.todos = state.todos.filter(item => (item.checked === false || item.category !== state.activeCategory));
            ListTODO.caseReducers.updateTodoShow(state);
        },
        deleteCategoryTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(item => item.category !== action.payload);
            state.activeCategory = -1;
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
    }
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