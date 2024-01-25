import { createSlice } from '@reduxjs/toolkit';
import {addCategoryApi, deleteCategoryApi, editCategoryApi, fetchCategories} from "./CategoryApi";

interface Category {
    id: number;
    title: string;
}

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: [],
};
export const categoryTODO = createSlice({
    name: 'todo category',
    initialState,
    reducers: {
        refresh: (state) => {
            console.log("refreshed")
            state.categories = [];
            fetchCategories();
        },
        addCategory: (state, action) => {
            const newCategory: Category = {
                id: action.payload.id,
                title: action.payload.title,
            };
            state.categories = [...state.categories, newCategory];
            categoryTODO.caseReducers.refresh(state);
        },
        editCategory: (state, action) => {
            const categoryIndex = state.categories.findIndex((category) => category.id === action.payload.id);
            if (categoryIndex !== -1) {
                state.categories[categoryIndex].title = action.payload.title;
            }
            categoryTODO.caseReducers.refresh(state);
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload.id);
            categoryTODO.caseReducers.refresh(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            if (action.payload && action.payload.data.getAllCategories) {
                state.categories = action.payload.data.getAllCategories;
            }
        });
        builder.addCase(addCategoryApi.fulfilled, (state, action) => {
            categoryTODO.caseReducers.addCategory(state, action);
        });
        builder.addCase(deleteCategoryApi.fulfilled, (state, action) => {
            categoryTODO.caseReducers.deleteCategory(state, action);
        });
        builder.addCase(editCategoryApi.fulfilled, (state, action) => {
            categoryTODO.caseReducers.editCategory(state, action);
        });
    },
});

export const {  refresh,
                addCategory,
                editCategory,
                deleteCategory,} = categoryTODO.actions;

export default categoryTODO.reducer;