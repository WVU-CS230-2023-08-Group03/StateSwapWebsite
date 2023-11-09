// Navbar Component
import styles from './NavBar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black', padding: '0', borderBottom: '1px solid black' }}>
      <div className="container-fluid">
        <h1 style={{ color: 'white', textAlign: 'center', width: '100%', margin: '0' }}>Mountain State Swap</h1>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto" style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
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
