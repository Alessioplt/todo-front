import {createAsyncThunk} from "@reduxjs/toolkit";
import {addCategory, deleteCategory, editCategory, getAllCategory} from "../api/Categories";

export const fetchCategories = createAsyncThunk(
    'categories/getAll',
    async (thunkAPI) => {
        const {data} = await getAllCategory();
        return data;
    }
)


export const addCategoryApi = createAsyncThunk(
    'categories/add',
    async (title: string, thunkAPI) => {
        const {data} = await addCategory(title);
        return data.data.data.categoryCreate;
    }
);


export const deleteCategoryApi = createAsyncThunk(
    'categories/remove',
    async (id: string, thunkAPI) => {
        const {data} = await deleteCategory(id);
        return data;
    }
)

interface EditCategoryParams {
    id: number;
    title: string;
}

export const editCategoryApi = createAsyncThunk<number, EditCategoryParams>(
    'categories/edit',
    async (params: any, thunkAPI) => {
        const {data} = await editCategory(params.id, params.title);
        return data.data.data.editCategory;
    }
);
