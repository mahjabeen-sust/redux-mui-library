import { useSelector } from 'react-redux'

import type { RootState } from '../../store'
import AdminNav from './AdminNav'

export default function AdminDashboard() {
  // Select username from store
  const user = useSelector((state: RootState) => state.auth.loggedInUser)

  return (
    <>
      <h1>Admin Dashboard</h1>
      <h2>
        Welcome {user?.firstName} {user?.lastName}
      </h2>
      {/* <Link to="/login">Log out</Link> */}
      <AdminNav />

      {/* <Books /> */}
    </>
  )
}
