import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="Header">
    <h1 className="header-title">Bookstore CMS</h1>
    <nav className="navbar">
      <ul>
        <li>
          <Link className="books" to="/">Books</Link>
        </li>
        <li>
          <Link className="categories" to="categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
