import {createAsyncThunk} from "@reduxjs/toolkit";
import gql from 'graphql-tag';
import axiosInstance from "./Service";

export const fetchCategories = createAsyncThunk(
    'categories/getAll',
    async (thunkAPI) => {
        try {
            const result = await axiosInstance.post('/graphql', {
                query: `
                    query{
                        getAllCategories{
                            id,
                            title,
                            userId
                    }
                }
           `,
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
    async (title, thunkAPI) => {
        const result = await axiosInstance.post('/graphql', {
            query: `
               mutation categoryCreate($input: CategoryCreateInput!) {
                  categoryCreate(input: $input) {
                      id,
                      title,
                      userId
                  }
               }
           `,
            variables: {
                input: {
                    title: title
                }
            }
        });
        return result.data.data.categoryCreate;
    }
);


export const deleteCategoryApi = createAsyncThunk(
    'categories/remove',
    async (id, thunkAPI) => {
        const result = await axiosInstance.post('/graphql', {
            query: `
                mutation removeOne($id: String!) {
                    removeOne (id: $id) {
                        title
                    }
                }
            `,
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
    async (params, thunkAPI) => {
        const result = await axiosInstance.post('/graphql', {
            query: `
                mutation editCategory($id: String!, $title: String!) {
                    editCategory(id: $id, title: $title) {
                        id,
                        title
                    }
                }
            `,
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
