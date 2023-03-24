import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Book = {
  isbn: string
  title: string
  description: string
  publisher: string
  authors: string
  status: boolean
  borrowerId: string
  publishDate: Date
  borrowDate: Date
  returnDate: Date
}

export interface BookState {
  items: Book[]
  isLoading: boolean
  error: string | null
}

const initialState: BookState = {
  items: [],
  isLoading: false,
  error: null
}

const JSON_PLACEHOLDER_API = 'http://localhost:3000/books.json'

//ACTION

export const fetchBooksThunk = createAsyncThunk('books/fetch', async (data, thunkApi) => {
  try {
    const response = await fetch(JSON_PLACEHOLDER_API)
    const data: Book[] = await response.json()
    //console.log('Found books', data)
    return data
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message)
  }
})

//SLICE
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooksThunk.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchBooksThunk.fulfilled, (state, action: PayloadAction<Book[]>) => {
      state.isLoading = false
      state.items = action.payload
    })
    builder.addCase(fetchBooksThunk.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export default booksSlice.reducer
