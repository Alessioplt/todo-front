import axiosInstance from "./Service";

export const GET_ALL = `
    query  getAllTodos($limit: number, $offset: number, $searchTerm: String!, $categoryId: String!){
  getAllTodos(limit: $limit, offset: $offset, searchTerm: $searchTerm, categoryId: $categoryId){
      items{
          id,
          title,
          description,
          status,
      }
      totalCount,
      totalPages,
      currentPage,
      hasNextPage,
      hasPreviousPage
  }
}
`

export const getAllTodo = async (limit: number, offset: number, searchTerm: string, categoryId: string) => {
    return axiosInstance.post('/graphql', {
        query: GET_ALL,
        variables: {
            input: {
                limit: limit,
                offset: offset,
                searchTerm: searchTerm,
                categoryId: categoryId
            }
        }
    });
}

export const GET_ALL_FROM_ID = `
    query getTodoFromCategory($categoryId: String!) {
    getTodoFromCategory(categoryId: $categoryId) {
      id
      title
      description
      status
    }
  }
`
export const getAllTodoId = async (categoryId: string) => {
    return axiosInstance.post('/graphql', {
        query: GET_ALL_FROM_ID,
        variables: {
            input: {
                categoryId: categoryId
            }
        }
    });
}
export const ADD = `
    mutation TodoCreate($title: String!, $description: String!, $status: String!, $categoryId: String!) {
    todoCreate(input: {
        title: $title,
        description: $description,
        status: $status,
        categoryId: $categoryId
    }) {
        id
        title
        description
        status
        userId
        categoryId
    }
}
    `
export const addTodo = async (title: string, description: string, status: string, categoryId: string) => {
    return axiosInstance.post('/graphql', {
        query: ADD,
        variables: {
            input: {
                title: title,
                description: description,
                status: status,
                categoryId: categoryId
            }
        }
    });
}
export const DELETE = `
    mutation RemoveOne($id: String!) {
    removeOne(id: $id) {
        title
        description
        status
    }
}
    `
export const deleteTODO = async (id: string) => {
    return axiosInstance.post('/graphql', {
        query: DELETE,
        variables: {
            input: {
                id: id
            }
        }
    });
}
export const EDIT = `
    mutation updateTodo {
  updateTodo (input: {
    title: "Task 2", 
    description: "Learn NestJs (plsss update)", 
    status: "0",
  }, id: "5242a250-d279-4b05-93a2-2cc29313153b") {
    id,
    title,
    description,
    status
  }
}
    `
export const editTODO = async (title: string, description: string, status: string, categoryId: string) => {
    return axiosInstance.post('/graphql', {
        query: EDIT,
        variables: {
            input: {
                title: title,
                description: description,
                status: status,
                categoryId: categoryId
            }
        }
    });
}