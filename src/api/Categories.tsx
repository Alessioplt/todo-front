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
export const getAll = async () => {
    return axiosInstance.post('/graphql', {
        query: GET_ALL,
    });
}

export const ADD = gql`
    mutation categoryCreate($input: CategoryCreateInput!) {
  categoryCreate(input: $input) {
    id,
    title,
    userId
  }
}
    `

export const DELETE = `
    mutation removeOne($id: String!) {
  removeOne (id: $id) {
    title
  }
}
    `

export const EDIT = `
    mutation editCategory($id: String!, $title: String!) {
    editCategory(id: $id, title: $title) {
        id,
        title
  }
}
    `