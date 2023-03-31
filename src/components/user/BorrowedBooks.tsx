import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//mui
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import styled from '@mui/system/styled'

import type { RootState, AppDispatch } from '../../store'
import { bookReturn } from '../../features/books/booksSlice'
import UserNav from './UserNav'
import { Book } from '../../type'

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center'
}))

export default function BorrowedBooks() {
  const { books } = useSelector((state: RootState) => state)
  const loggedInUser = useSelector((state: RootState) => state.auth.loggedInUser)
  const dispatch = useDispatch<AppDispatch>()
  // const borrowedBook = books.items.map((item) => {
  //   //payload matches a book
  //   if (item.borrowerId === loggedInUser?.email) {
  //     return item
  //   }
  // })

  //const notAdmin = users.filter((item) => !item.isAdmin)
  const borrowedBook = books.items.filter((item) => item.borrowerId === loggedInUser?.email)

  //console.log('borrowed items length:', Object.keys(borrowedBook).length)

  const [returnedBook, setReturnedBook] = useState<Book>({
    isbn: '',
    title: '',
    description: '',
    publisher: '',
    authors: '',
    status: false,
    borrowerId: '',
    publishDate: '',
    borrowDate: new Date().toLocaleDateString(),
    returnDate: null
  })

  const returnBook = (book: Book) => {
    //a new object for borrow-ing book

    setReturnedBook((prev) => ({
      ...prev,
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      publisher: book.publisher,
      authors: book.authors,
      borrowerId: null,
      publishDate: book.publishDate,
      borrowDate: null,
      returnDate: new Date().toLocaleDateString()
    }))

    //dispatch the borrowBook
    //console.log('borrower_id:', borrowedBook.borrowerId)
    dispatch(bookReturn(returnedBook))
  }

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 0, md: 0 }}
        className="main-container">
        <Grid item xs={3} className="admin-nav-container">
          <UserNav />
        </Grid>
        <Grid item xs={9} className="pl-24">
          {borrowedBook && (
            <>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {/* {Array.from(Array(50)).map((_, index) => ( */}
                  {borrowedBook.map((book) => (
                    <Grid xs={2} sm={4} key={book?.isbn}>
                      <Card sx={{ maxWidth: 345, p: 0, minHeight: 200 }}>
                        <CardMedia
                          sx={{ height: 100 }}
                          image="/assets/images/book-image.jpg"
                          title={book?.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {book?.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            By - {book?.authors}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Publisher :{book?.publisher}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Borrowed By - {book?.borrowerId}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Borrow Date :<span>{book?.borrowDate?.toString()}</span>
                          </Typography>
                          <Typography gutterBottom variant="h6" component="span">
                            {book?.status ? 'Available' : 'Borrowed'}
                          </Typography>
                        </CardContent>
                        {/* if user is not admin */}
                        <CardActions>
                          {!book?.status ? (
                            <Button size="small" type="button" onClick={() => returnBook(book)}>
                              Return
                            </Button>
                          ) : (
                            ''
                          )}
                        </CardActions>
                      </Card>
                      {/* {edit && <EditBookForm {...book} />} */}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </>
  )
}
