import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import AdminNav from '../admin/AdminNav'

export default function AuthorForm() {
  // Select username from store
  const user = useSelector((state: RootState) => state.auth.loggedInUser)

  return (
    <div>
      <AdminNav />
      <h1>Author Form to be loaded .....</h1>
    </div>
  )
}
