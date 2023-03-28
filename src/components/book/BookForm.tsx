import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Books from './Books'

import AdminNav from '../admin/AdminNav'
import type { RootState, AppDispatch } from '../../store'
import { addNewBook } from '../../features/books/booksSlice'

//mui
import { TextField, FormControl, Button } from '@mui/material'

const BookForm = () => {
  const { books } = useSelector((state: RootState) => state)
  const [book, setBook] = useState({
    isbn: '',
    title: '',
    description: '',
    publisher: '',
    authors: '',
    status: true,
    borrowerId: '',
    publishDate: null,
    borrowDate: null,
    returnDate: null
  })

  const dispatch = useDispatch<AppDispatch>()

  console.log('before handle submit', books.items)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    //from mui example
    setTitleError(false)
    setDescriptionError(false)

    if (book.title == '') {
      setTitleError(true)
    }
    if (book.description == '') {
      setDescriptionError(true)
    }

    if (book.title && book.description) {
      dispatch(addNewBook(book))
    }

    console.log('after handle submit', books.items)
  }

  //from mui example
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  return (
    <React.Fragment>
      <Books />
      <AdminNav />
      <form action="" className="bookForm" onSubmit={handleSubmit}>
        <h2>Add New Book Form</h2>
        {/* <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            defaultValue={book.title}
            onChange={(e) => {
              setBook({ ...book, title: e.target.value })
            }}
          />
        </div> */}
        <TextField
          label="Title"
          onChange={(e) => {
            setBook({ ...book, title: e.target.value })
          }}
          required
          variant="outlined"
          color="secondary"
          type="title"
          sx={{ mb: 3 }}
          fullWidth
          value={book.title}
          error={titleError}
        />
        {/* <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            defaultValue={book.description}
            onChange={(e) => {
              setBook({ ...book, description: e.target.value })
            }}
          />
        </div> */}
        <TextField
          label="Description"
          onChange={(e) => {
            setBook({ ...book, description: e.target.value })
          }}
          required
          variant="outlined"
          color="secondary"
          type="description"
          value={book.description}
          error={descriptionError}
          fullWidth
          sx={{ mb: 3 }}
        />
        {/* more inputs to be loaded.... */}
        <Button variant="outlined" color="secondary" type="submit">
          Add New Book
        </Button>
      </form>
    </React.Fragment>
  )
}

export default BookForm
