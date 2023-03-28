import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//mui
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormControl, FormLabel } from '@mui/material'

import AdminNav from '../admin/AdminNav'
import type { RootState, AppDispatch } from '../../store'
import { addNewBook } from '../../features/books/booksSlice'
import Books from './Books'

//for validation, using zod
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const validationSchema = z.object({
  isbn: z.string().min(1, { message: 'ISBN is required' }),
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  publisher: z.string().min(1, { message: 'Publisher is required' })
})

type ValidationSchema = z.infer<typeof validationSchema>

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

  //my handle submit
  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   dispatch(addNewBook(book))
  //   //clearing the fileds
  // }

  //zod's code
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema)
  })

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    //e.preventDefault()
    console.log('after zod submission', data.description)
    setBook({
      ...book,
      isbn: data.isbn,
      title: data.title,
      description: data.description,
      publisher: data.publisher
    })
    console.log('after zod submission>book', book)
    dispatch(addNewBook(book))

    //clearing the fileds
  }

  return (
    <div>
      <AdminNav />
      <Books />

      <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add New Book Form</h2>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="isbn">
              ISBN
            </label>
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.isbn && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="isbn"
              // onChange={(e) => {
              //   setBook({ ...book, isbn: e.target.value })
              // }}
              type="text"
              placeholder="ISBN"
              // value={book.isbn}
              {...register('isbn')}
              // error={isbnError}
            />
            {errors.isbn && (
              <p className="text-xs italic text-red-500 mt-2">{errors.isbn?.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">
              Title
            </label>
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.title && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="title"
              // onChange={(e) => {
              //   setBook({ ...book, title: e.target.value })
              // }}
              type="text"
              placeholder="Title"
              //value={book.title}
              {...register('title')}
              // error={emailError}
            />
            {errors.title && (
              <p className="text-xs italic text-red-500 mt-2">{errors.title?.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
              Description
            </label>
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.description && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="description"
              // onChange={(e) => {
              //   setBook({ ...book, description: e.target.value })
              // }}

              type="text"
              placeholder="Description"
              // value={book.description}
              // error={passwordError}

              {...register('description')}
            />
            {errors.description && (
              <p className="text-xs italic text-red-500 mt-2">{errors.description?.message}</p>
            )}
          </div>

          <div className="mb-4 md:mr-2 md:mb-0">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="publisher">
              Publisher
            </label>
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.publisher && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="publisher"
              // onChange={(e) => {
              //   setBook({ ...book, publisher: e.target.value })
              // }}
              required
              type="text"
              placeholder="Publisher"
              // value={book.publisher}
              {...register('publisher')}
              // error={publisherError}
            />
            {errors.publisher && (
              <p className="text-xs italic text-red-500 mt-2">{errors.publisher?.message}</p>
            )}
          </div>
          <div className="mb-6 text-center">
            <Button variant="outlined" color="secondary" type="submit">
              Add New Book
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BookForm
