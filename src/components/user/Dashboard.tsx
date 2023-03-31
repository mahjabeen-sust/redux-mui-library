import { useSelector } from 'react-redux'

import type { RootState } from '../../store'
import BorrowBook from '../book/BorrowBook'
import UserNav from './UserNav'

import Grid from '@mui/material/Grid'

export default function Dashboard() {
  // Select username from store
  const user = useSelector((state: RootState) => state.auth.loggedInUser)

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>
        Welcome {user?.firstName} {user?.lastName}
      </h2>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 0, md: 0 }}
        className="main-container">
        <Grid item xs={3} className="admin-nav-container">
          <UserNav />
        </Grid>
        <Grid item xs={9} className="pl-24">
          <BorrowBook />
        </Grid>
      </Grid>
    </div>
  )
}
