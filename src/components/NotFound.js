import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1> 404 Page Not Found </h1>
      <h3>How did you get here...</h3>
      {' '}
      <NavLink to="/">back </NavLink>
      {' '}
    </div>
  );
}
