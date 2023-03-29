import React, { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AdminNav from '../admin/AdminNav'
import type { RootState, AppDispatch } from '../../store'
import { editAuthor, deleteAuthor } from '../../features/authors/authorsSlice'

//mui
import { TextField, Button } from '@mui/material'

export default function EditAuthorForm() {
  const dispatch = useDispatch<AppDispatch>()
  const { authors } = useSelector((state: RootState) => state)
  //console.log('author object length', Object.keys(authors.items).length)

  const [updateAuthorId, setupdateAuthorId] = useState(-1)
  const authorToBeUpdated = authors.items.find((author) => {
    if (author.id === updateAuthorId) return author
  })
  console.log('author to be updated', authorToBeUpdated)
  const [newAuthor, setNewAuthor] = useState({
    id: updateAuthorId,
    authorName: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    let name = e.target.name
    setNewAuthor((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  //handle edit
  const handleEdit = (id: number) => {
    //alert(isbn)
    setupdateAuthorId(id)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    //from mui example
    setNameError(false)
    if (newAuthor.authorName == '') {
      setNameError(true)
    }
    if (newAuthor.authorName) {
      dispatch(editAuthor(newAuthor))
      //;<Link to="/adminDashboard">Go back to dashboard</Link>
    }
  }
  const [nameError, setNameError] = useState(false)

  return (
    <div>
      <AdminNav />

      <ul>
        {authors.items.map((author) => (
          <li key={author.id}>
            {author.authorName}
            <Button size="small" onClick={() => handleEdit(author.id)}>
              Edit
            </Button>
            <Button
              size="small"
              onClick={() => {
                dispatch(deleteAuthor(author.id))
              }}>
              Delete
            </Button>
          </li>
        ))}
      </ul>

      {/* author add form */}
      {authorToBeUpdated && (
        <React.Fragment>
          <form action="" className="authorEditForm" onSubmit={handleSubmit}>
            <h2>Edit Author</h2>

            <TextField
              label="Name"
              name="authorName"
              onChange={handleChange}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={authorToBeUpdated.authorName}
              placeholder="placeholder"
              //error={nameError}
            />
            <Button variant="outlined" color="secondary" type="submit">
              Submit
            </Button>
          </form>
        </React.Fragment>
      )}
    </div>
  )
}
