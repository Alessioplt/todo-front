import {gql, useMutation, useQuery} from "@apollo/client";
import {createAsyncThunk} from "@reduxjs/toolkit";
import client from "./Service";

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
            const response = await client.query({query: GET_ALL})
            console.log(response.data)
            return response.data
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
        const result = await client.mutate({mutation: ADD, variables: {"input": {"title": title}}})
        return result['data']['categoryCreate']
    }
)

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
