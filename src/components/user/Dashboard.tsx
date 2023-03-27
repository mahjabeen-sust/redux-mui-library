import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import type { RootState } from '../../store'
import Books from '../book/Books'

export default function Dashboard() {
  // Select username from store
  const user = useSelector((state: RootState) => state.auth.loggedInUser)

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Welcome {user}</h2>
      {/* <Link to="/login">Log out</Link> */}
      <Books />
    </>
  )
}
