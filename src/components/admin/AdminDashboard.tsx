import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import type { RootState, AppDispatch } from '../../store'
import AdminNav from './AdminNav'
import { fetchBooksThunk } from '../../features/books/booksSlice'

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
      <h2>Welcome {user?.email}</h2>
      {/* <Link to="/login">Log out</Link> */}
      <AdminNav />

      {/* <Books /> */}
    </>
  )
}
