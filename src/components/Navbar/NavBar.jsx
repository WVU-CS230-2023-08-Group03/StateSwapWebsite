// Navbar Component
import styles from './NavBar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black', padding: '0' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: 'white', textAlign: 'center', width: '100%' }}>
          <h1 style={{ color: 'white' }}>Mountain State Swap</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;