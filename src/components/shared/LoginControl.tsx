import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from '../../store'
import { logout } from '../../features/login/userSlice'

function LoginControl() {
  const loggedInUser = useSelector((state: RootState) => state.auth.loggedInUser)
  //console.log('inside login control:', loggedInUser)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      {loggedInUser !== null ? (
        <Link to="/logout">
          <button
            onClick={() => {
              dispatch(logout())
            }}>
            Logout
          </button>
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  )
}

export default LoginControl
