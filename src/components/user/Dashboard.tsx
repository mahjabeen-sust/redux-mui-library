import { useSelector } from 'react-redux'

import type { RootState } from '../../store'
import Books from '../book/Books'

export default function Dashboard() {
  // Select username from store
  const user = useSelector((state: RootState) => state.auth.loggedInUser)

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {user?.email}</h2>
      {/* <Link to="/login">Log out</Link> */}
      <Books />
    </div>
  )
}
