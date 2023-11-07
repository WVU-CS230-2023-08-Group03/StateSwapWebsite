import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: 'white', textAlign: 'center', width: '100%' }}>
          <h1>Mountain State Swap</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ display: 'flex', alignItems: 'center' }}>
            <li className="nav-item">
              <Link to="/pages/profile" className="nav-link" style={{ color: 'white', marginLeft: '100px', marginRight: '200px', border: 'none', textDecoration: 'none' }}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/profile" className="nav-link" style={{ color: 'white', marginLeft: '200px', marginRight: '200px', border: 'none', textDecoration: 'none' }}>
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
