import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    addCategoryApi,
    fetchCategories,
    deleteCategoryApi,
    editCategoryApi,
} from '../api/Categories';
import {addTODO} from "./ListTODO";

interface Category {
    id: number;
    title: string;
    itemNumber : number;
}

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: [
        { id: 1, title: 'Default Category 1', itemNumber: 2 },
        { id: 2, title: 'Default Category 2', itemNumber: 1 },
        // Add more default categories here
    ],
};
export const categoryTODO = createSlice({
    name: 'todo category',
    initialState,
    reducers: {
        refresh: (state) => {
            state.categories = [];
            fetchCategories();
        },
        addCategory: (state, action) => {
            const newCategory: Category = {
                id: action.payload.id,
                title: action.payload.title,
                itemNumber: 0
            };
            state.categories = [...state.categories, newCategory];
        },
        editCategory: (state, action) => {
            const categoryIndex = state.categories.findIndex((category) => category.id === action.payload.id);
            if (categoryIndex !== -1) {
                state.categories[categoryIndex].title = action.payload.title;
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload.id);
        },
        changeTodoNumber: (state, action) => {
            const categoryIndex = state.categories.findIndex((category) => category.id === action.payload.id);
            if (categoryIndex !== -1) {
                state.categories[categoryIndex].itemNumber = action.payload.itemNumber;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            if (action.payload && action.payload.getAllCategories) {
                state.categories = action.payload.getAllCategories;
            }
        });
        builder.addCase(addCategoryApi.fulfilled, (state, action) => {
            categoryTODO.caseReducers.addCategory(state, action);
        });
        builder.addCase(deleteCategoryApi.fulfilled, (state, action) => {
            categoryTODO.caseReducers.deleteCategory(state, action);
        });
        builder.addCase(editCategoryApi.fulfilled, (state, action) => {
            console.log('edit', action.payload);
            categoryTODO.caseReducers.editCategory(state, action);
        });
    },
});

export const {  refresh,
                addCategory,
                editCategory,
                deleteCategory,
                changeTodoNumber} = categoryTODO.actions;

export default categoryTODO.reducer;