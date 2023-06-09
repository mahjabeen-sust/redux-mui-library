import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className="admin-nav-menu">
      <ul>
        <li>
          <Link to="/addBook">Add a New Book</Link>
        </li>
        <li>
          <Link to="/updateBook">Update Book</Link>
        </li>
        <li>
          <Link to="/addAuthor">Add a New Author</Link>
        </li>
        <li>
          <Link to="/updateAuthor">Update Author</Link>
        </li>
        <li>
          <Link to="/manageUser">Users List</Link>
        </li>
      </ul>
    </div>
  )
}
