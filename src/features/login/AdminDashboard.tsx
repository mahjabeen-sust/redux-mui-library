import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import Books from '../books/Books'
import AdminNav from '../admin/AdminNav'

export default function AdminDashboard() {
  // Select username from store
  const user = useSelector((state: RootState) => state.auth.loggedInUser)

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
