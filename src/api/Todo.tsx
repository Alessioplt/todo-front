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

export const ADD = `
    mutation todoCreate {
  todoCreate (input: {
    title: "Task 1", 
    description: "Learn Spanish", 
    status: "0",
    categoryId: "cb9ee2d5-2475-4eb0-9c97-b79c8be216b9"
  }) {
    id,
    title,
    description,
    status,
    userId,
    categoryId
  }
}
    `

export const DELETE = `
    mutation removeOne {
  removeOne (id: "5f0e8add-fc36-4036-b2de-d03f57b2d9c1") {
    title,
    description,
    status
  }
}
    `

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