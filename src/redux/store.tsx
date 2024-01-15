import {configureStore } from '@reduxjs/toolkit'
import ListTODO from './ListTODO'
import categoryTODO from "./CategoryTODO";


export const store = configureStore({
    reducer: {
        todo: ListTODO,
        category: categoryTODO,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch