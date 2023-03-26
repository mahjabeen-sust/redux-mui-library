import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './features/login/Login'
import Dashboard from './features/login/Dashboard'
import ProtectedRoute from './routing/ProtectedRoute'
import LoginControl from './features/login/LoginControl'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { logout } from './features/login/userSlice'

/**
 * https://stackoverflow.com/questions/71885505/react-router-v6-no-routes-matched-location
 */

const Home = () => <h1>Home</h1>
const Logout = () => (
  <ul>
    <li>You have successfully logged out!</li>
    {/* <li>
      <Link to="/login">Login</Link>
    </li> */}
  </ul>
)

const Header = ({ children }: any) => children
const Wrapper = ({ children }: any) => children

// const NavBar = () => (
//   <ul>
//     <li>
//       <Link to="/login">Login</Link>
//     </li>
//   </ul>
// )

function App() {
  const loggedInUser = useSelector((state: RootState) => state.auth.loggedInUser)
  //console.log('rerender app loggedInUser:', loggedInUser)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          {/* <NavBar /> */}
          <LoginControl />
        </Header>
        <div>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="create" element={<Creation user={account} />} /> */}

              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </Wrapper>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
