// ProtectedRoute.js
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const loggedInUser = useSelector((state: RootState) => state.auth.loggedInUser)

  // show unauthorized screen if no user is found in redux store
  if (loggedInUser === null) {
    return (
      <div className="unauthorized">
        <h1>Unauthorized</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  // returns child route elements
  return <Outlet />
}
export default ProtectedRoute
