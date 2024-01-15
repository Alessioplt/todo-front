import {createAsyncThunk} from "@reduxjs/toolkit";
import gql from 'graphql-tag';
import axios from "axios";
import axiosInstance from "./Service";
import client from "../oldApi/Service";


export const GET_ALL = gql`
    query{
    getAllCategories{
        id,
        title,
        userId
    }
}
`

export const ADD = gql`
    mutation categoryCreate($input: CategoryCreateInput!) {
  categoryCreate(input: $input) {
    id,
    title,
    userId
  }
}
    `

export const DELETE = gql`
    mutation removeOne($id: String!) {
  removeOne (id: $id) {
    title
  }
}
    `

export const EDIT = gql`
    mutation editCategory($id: String!, $title: String!) {
    editCategory(id: $id, title: $title) {
        id,
        title
  }
}
    `

export const fetchCategories = createAsyncThunk(
    'categories/getAll',
    async (thunkAPI) => {
        console.log("fetching categories")
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
        await client.mutate({mutation: DELETE, variables: {"id": id}})
        return id
    }
)

interface EditCategoryParams {
    id: number;
    title: string;
}

export const editCategoryApi = createAsyncThunk<number, EditCategoryParams>(
    'categories/edit',
    async (params: EditCategoryParams, thunkAPI) => {
        const result = await client.mutate({ mutation: EDIT, variables: { id: params.id, title: params.title } });
        return result.data.editCategory;
    }
);
