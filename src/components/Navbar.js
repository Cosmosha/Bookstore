import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>
        <NavLink to="/" className="logo">
          Bookstore CMS
          {' '}
        </NavLink>
        {' '}
      </h1>
      {' '}
      <ul>
        <li>
          <NavLink className="nav-link" to="/">
            BOOKS
            {' '}
          </NavLink>
          {' '}
        </li>
        {' '}
        <li>
          <NavLink className="nav-link" to="/categories">
            CATEGORIES
            {' '}
          </NavLink>
          {' '}
        </li>
        {' '}
      </ul>
      {' '}
    </nav>
  );
}