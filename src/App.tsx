import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/shared/Login'
import Dashboard from './components/user/Dashboard'
import ProtectedRoute from './routing/ProtectedRoute'
import LoginControl from './components/shared/LoginControl'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import AdminDashboard from './components/admin/AdminDashboard'
import BookForm from './components/book/BookForm'
import AuthorForm from './components/author/AuthorForm'

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
                <Route path="/adminDashboard" element={<AdminDashboard />} />
                <Route path="/addBook" element={<BookForm />} />
                <Route path="/updateBook" element={<BookForm />} />
                <Route path="/addAuthor" element={<AuthorForm />} />
                <Route path="/updateAuthor" element={<AuthorForm />} />
              </Route>
            </Routes>
          </Wrapper>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
