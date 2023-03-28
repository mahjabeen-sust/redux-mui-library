import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Books from './Books'

import AdminNav from '../admin/AdminNav'
import type { RootState, AppDispatch } from '../../store'
import { addNewBook } from '../../features/books/booksSlice'

//mui
import { TextField, FormControl, Button, InputLabel, Select, MenuItem } from '@mui/material'

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
    publishDate: new Date(),
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
          label="ISBN"
          onChange={(e) => {
            setBook({ ...book, isbn: e.target.value })
          }}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={book.isbn}
          //error={titleError}
        />
        <TextField
          label="Title"
          onChange={(e) => {
            setBook({ ...book, title: e.target.value })
          }}
          required
          variant="outlined"
          color="secondary"
          type="text"
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
          type="text"
          value={book.description}
          error={descriptionError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Publisher"
          onChange={(e) => {
            setBook({ ...book, publisher: e.target.value })
          }}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={book.publisher}
          //error={titleError}
        />
        <InputLabel id="author-label">Authors</InputLabel>
        <Select
          label="Authors"
          required
          labelId="author-label"
          id="author-select"
          value={book.authors}
          onChange={(e) => {
            setBook({ ...book, authors: e.target.value })
          }}>
          <MenuItem value="author1" selected>
            Author1
          </MenuItem>
          <MenuItem value="author2">Author2</MenuItem>
          <MenuItem value="author3">Author3</MenuItem>
        </Select>

        <InputLabel id="status-label">Status</InputLabel>
        <Select
          label="Status"
          required
          labelId="status-label"
          id="status-select"
          value={book.status}
          onChange={(e) => {
            setBook({ ...book, status: e.target.value as any })
          }}>
          <MenuItem value={true as any} selected>
            Available
          </MenuItem>
          <MenuItem value={false as any}>Borrowed</MenuItem>
        </Select>

        <TextField
          label="Borrower Id"
          onChange={(e) => {
            setBook({ ...book, borrowerId: e.target.value })
          }}
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={book.borrowerId}
          //error={titleError}
        />
        <TextField
          type="date"
          id="publish-date"
          variant="outlined"
          color="secondary"
          label="Publish Date"
          onChange={(e) => {
            setBook({ ...book, publishDate: e.target.value as any })
          }}
          value={book.publishDate}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="date"
          id="borrow-date"
          variant="outlined"
          color="secondary"
          label="Borrow Date"
          onChange={(e) => {
            setBook({ ...book, borrowDate: e.target.value as any })
          }}
          value={book.borrowDate}
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="date"
          id="return-date"
          variant="outlined"
          color="secondary"
          label="Return Date"
          onChange={(e) => {
            setBook({ ...book, returnDate: e.target.value as any })
          }}
          value={book.returnDate}
          fullWidth
          sx={{ mb: 4 }}
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
