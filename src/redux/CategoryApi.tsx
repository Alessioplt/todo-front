import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../api/Service";
import {ADD, DELETE, EDIT, GET_ALL} from "../api/Categories";

export const fetchCategories = createAsyncThunk(
    'categories/getAll',
    async (thunkAPI) => {
        try {
            const result = await axiosInstance.post('/graphql', {
                query: GET_ALL,
            });
            console.log("Resultat:", result.data);
            return result.data;
        }
        catch (e) {
            console.log("failed", e)
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('userId')
            return null
        }

    }
)

export const addCategoryApi = createAsyncThunk(
    'categories/add',
    async (title: string, thunkAPI) => {
        console.log("testing", title)
        const result = await axiosInstance.post('/graphql', {
            query: ADD,
            variables: {
                input: {
                    title: title
                }
            }
        });
        console.log("result", result)
        return result.data.data.categoryCreate;
    }
);


export const deleteCategoryApi = createAsyncThunk(
    'categories/remove',
    async (id, thunkAPI) => {
        const result = await axiosInstance.post('/graphql', {
            mutation: DELETE,
            variables: {
                input: {
                    id: id
                }
            }
        });
    }
)

interface EditCategoryParams {
    id: number;
    title: string;
}

export const editCategoryApi = createAsyncThunk<number, EditCategoryParams>(
    'categories/edit',
    async (params: any, thunkAPI) => {
        const result = await axiosInstance.post('/graphql', {
            mutation: EDIT,
            variables: {
                input: {
                    id: params.id,
                    title: params.title
                }
            }
        });
        return result.data.data.editCategory;
    }
);
