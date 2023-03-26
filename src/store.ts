import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import booksReducer from './features/books/booksSlice'
import userReducer from './features/login/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
    auth: userReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type AppDispatch = typeof store.dispatch
