import React, { useState, useEffect } from 'react'
import type { RootState, AppDispatch } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksThunk, Book } from './booksSlice'

//mui
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Box from '@mui/system/Box'
import Grid from '@mui/system/Unstable_Grid'
import styled from '@mui/system/styled'

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center'
}))

const Books = () => {
  const { books } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchBooksThunk())
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      {books.isLoading ? <span>Loading .... </span> : ''}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* {Array.from(Array(50)).map((_, index) => ( */}
        {books.items.map((book) => (
          <Grid xs={2} sm={4} key={book.isbn}>
            <Item>
              <Card sx={{ maxWidth: 345, p: 2, minHeight: 430 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/assets/images/book-image.jpg"
                  title={book.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description.substring(0, 200)}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="span">
                    {book.status ? 'Available' : 'Borrowed'}
                  </Typography>
                </CardContent>
                <CardActions>{book.status ? <Button size="small">Borrow</Button> : ''}</CardActions>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Books
