import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AdminNav from '../admin/AdminNav'
import type { RootState, AppDispatch } from '../../store'
import { addNewBook } from '../../features/books/booksSlice'

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
    // console.log('added book', book)
    // //setBookList((prev) => prev.concat(book))
    // setBookList({ ...bookList, ...book })

    // console.log('book list', bookList)
    dispatch(addNewBook(book))

    console.log('after handle submit', books.items)
  }

  return (
    <div>
      <AdminNav />
      <form action="" className="bookForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            defaultValue={book.title}
            onChange={(e) => {
              setBook({ ...book, title: e.target.value })
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            defaultValue={book.description}
            onChange={(e) => {
              setBook({ ...book, description: e.target.value })
            }}
          />
        </div>
        {/* more inputs to be loaded.... */}
        <button type="submit" className="button">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default BookForm
