import gql from 'graphql-tag';
import axiosInstance from "./Service";
export const GET_ALL = `
    query{
    getAllCategories{
        id,
        title,
        userId
    }
}
`

export const getAllCategory = async () => {
    return axiosInstance.post('/graphql', {
        query: GET_ALL,
    });
}

export const ADD = `
    mutation categoryCreate($input: CategoryCreateInput!) {
  categoryCreate(input: $input) {
    id,
    title,
    userId
  }
}
    `
export const addCategory = async (title: string) => {
    return axiosInstance.post('/graphql', {
        query: ADD,
        variables: {
            input: {
                title: title
            }
        }
    });
}

export const DELETE = `
    mutation removeOne($id: String!) {
  removeOne (id: $id) {
    title
  }
}
`

export const deleteCategory = async (id: string) => {
    return axiosInstance.post('/graphql', {
        query: DELETE,
        variables: {
            id: id
        }
    });
}

export const EDIT = `
    mutation editCategory($id: String!, $title: String!) {
    editCategory(id: $id, title: $title) {
        id,
        title
  }
}
    `

export const editCategory = async (title: string, id:string) => {
    return axiosInstance.post('/graphql', {
        mutation: EDIT,
        variables: {
            input: {
                id: id,
                title: title
            }
        }
    });
}
