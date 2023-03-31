import { Link } from 'react-router-dom'

export default function UserNav() {
  return (
    <div className="admin-nav-menu">
      <ul>
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/borrowedBooks">Borrowed Books</Link>
        </li>
      </ul>
    </div>
  )
}
