import {createAsyncThunk} from "@reduxjs/toolkit";
import {addCategory, deleteCategory, editCategory, getAllCategory} from "../api/Categories";

interface Category {
    id: string;
    title: string;
    userId: string;
}
export const fetchCategories = createAsyncThunk(
    'categories/getAll',
    async (thunkAPI) => {
        const {data} = await getAllCategory();
        const filteredData = data.data.getAllCategories.filter((category: { userId: string | null; }) => category.userId === sessionStorage.getItem('userId'));
        return filteredData;
    }
)


export const addCategoryApi = createAsyncThunk(
    'categories/add',
    async (title: string, thunkAPI) => {
        const {data} = await addCategory(title);
        return data.data.categoryCreate;
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
