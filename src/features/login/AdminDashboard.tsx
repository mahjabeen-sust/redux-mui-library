import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState, AppDispatch } from '../../store'
import Books from '../books/Books'
import AdminNav from '../admin/AdminNav'
import { fetchBooksThunk } from '../books/booksSlice'

export default function AdminDashboard() {
  // Select username from store
  const user = useSelector((state: RootState) => state.auth.loggedInUser)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchBooksThunk())
  }, [])
  return (
    <>
      <h1>Admin Dashboard</h1>
      <h2>Welcome {user}</h2>
      {/* <Link to="/login">Log out</Link> */}
      <AdminNav />

      {/* <Books /> */}
    </>
  )
}
