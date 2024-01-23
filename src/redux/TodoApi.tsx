import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../api/Service";
import {ADD, DELETE, EDIT, GET_ALL_FROM_ID} from "../api/Todo";

export const fetchTODOByCategoryID = createAsyncThunk(
    'todo/getAll',
    async (categoryId: string, thunkAPI) => {
        try {
            const result = await axiosInstance.post('/graphql', {
                query: GET_ALL_FROM_ID,
                variables: {
                    categoryId: categoryId
                }
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

/*export const fetchTODO = createAsyncThunk(
    'todo/getAll',
    async (categoryId: string, thunkAPI) => {
        try {
            const result = await axiosInstance.post('/graphql', {
                query: GET_ALL,
                variables: {
                    limit: limit,
                    offset: offset,
                    searchTerm: searchTerm,
                    categoryId: categoryId
                }
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
)*/

export const addTodoApi = createAsyncThunk(
    'todo/add',
    async (params: any, thunkAPI) => {
        const result = await axiosInstance.post('/graphql', {
            mutation: ADD,
            variables: {
                input: {
                    title: params.title,
                    description: params.description,
                    status: params.checked,
                    categoryId: params.categoryId
                }
            }
        });
        return result.data.data.categoryCreate;
    }
);


export const deleteTODOApi = createAsyncThunk(
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

export const editTODOApi = createAsyncThunk<number, EditCategoryParams>(
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
