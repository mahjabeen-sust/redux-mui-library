import React, { useState, useEffect } from 'react'
import type { RootState, AppDispatch } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksThunk, Book } from './booksSlice'

const Books = () => {
  const booksState = useSelector((state: RootState) => state.books)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchBooksThunk())
  }, [])

  return (
    <div>
      {/* <button onClick={fetchBooks}>Fetch Books</button> */}
      {booksState.isLoading ? <span>Loading .... </span> : ''}
      {booksState.items.map((book) => {
        return (
          <div>
            <div>
              <h3>{book.title}</h3>
            </div>
            <ul>
              <li>
                <strong>Author:</strong> {book.authors}
              </li>
              <li>
                <strong>Publisher:</strong> {book.publisher}
              </li>
              <li>
                <strong>Status</strong> {book.status ? 'Available' : 'Borrowed'}
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Books
