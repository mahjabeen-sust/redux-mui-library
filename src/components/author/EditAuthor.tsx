import React, { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AdminNav from '../admin/AdminNav'
import type { RootState, AppDispatch } from '../../store'
import { fetchAuthorsThunk, editAuthor, deleteAuthor } from '../../features/authors/authorsSlice'
import EditAuthorForm from './EditAuthorForm'

//mui
import { TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid'

export default function EditAuthor() {
  const dispatch = useDispatch<AppDispatch>()
  const { authors } = useSelector((state: RootState) => state)
  //console.log('author object length', Object.keys(authors.items).length)

  const [updateAuthorId, setupdateAuthorId] = useState<null | number>()
  const authorToBeUpdated = authors.items.find((author) => {
    if (author.id === updateAuthorId) return author
  })
  console.log('author to be updated', authorToBeUpdated)

  //handle edit
  const handleEdit = (id: number) => {
    //alert(isbn)
    setupdateAuthorId(id)
  }

  useEffect(() => {
    dispatch(fetchAuthorsThunk())
  }, [])

  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 0, md: 0 }}
        className="main-container">
        <Grid item xs={3} className="admin-nav-container">
          <AdminNav />
        </Grid>
        <Grid item xs={9} className="pl-24">
          <ul className="author-list">
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
          {authorToBeUpdated && <EditAuthorForm {...authorToBeUpdated} />}
          {/* author add form */}
          {/* {authorToBeUpdated && (
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
          )} */}
        </Grid>
      </Grid>
    </div>
  )
}
