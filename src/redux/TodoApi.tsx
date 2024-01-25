import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllTodoId, addTodo, deleteTODO, editTODO} from "../api/Todo";

export const fetchTODOByCategoryID = createAsyncThunk(
    'todo/getAllId',
    async (categoryId: string, thunkAPI) => {
        const {data} = await getAllTodoId(categoryId);
        return data;
    }
)

export const addTodoApi = createAsyncThunk(
    'todo/add',
    async (params: any, thunkAPI) => {
        const {data} = await addTodo(params.title, params.description, params.status, params.categoryId);
        return data.data.data.categoryCreate;
    }
);


export const deleteTODOApi = createAsyncThunk(
    'categories/remove',
    async (id: string, thunkAPI) => {
        const {data} = await deleteTODO(id);
        return data;
    }
)

interface EditCategoryParams {
    id: number;
    title: string;
}

export const editTODOApi = createAsyncThunk<number, EditCategoryParams>(
    'categories/edit',
    async (params: any, thunkAPI) => {
        const {data} = await editTODO(params.title, params.description, params.status, params.categoryId);
        return data.data.data.editCategory;
    }
);
