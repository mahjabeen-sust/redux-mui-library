import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
import { useNavigate, Navigate } from 'react-router-dom'
import AdminNav from '../admin/AdminNav'

import { useForm } from 'react-hook-form'

const BookForm = () => {
  const [isbn, setIsbn] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [publisher, setPublisher] = useState('')
  const [authors, setAuthors] = useState('')
  const [status, setStatus] = useState('')
  const [borrowerId, setBorrowerId] = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [borrowDate, setBorrowDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const navigate = useNavigate()
  const { handleSubmit } = useForm()

  const dispatch = useDispatch<AppDispatch>()

  const bookAction = () => {
    alert('add book!')
  }

  return (
    <div>
      <AdminNav />
      <form action="" className="bookForm" onSubmit={handleSubmit(bookAction)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
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
