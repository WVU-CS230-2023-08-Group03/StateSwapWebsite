import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ onProfileClick }) => {

  const itemStyle = {
    padding: '0 100px', 
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '0 100px'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black', padding: '0', borderBottom: '1px solid black' }}>
      <div className="container-fluid">
        <h1 style={{ color: 'white', textAlign: 'center', width: '100%', margin: '0' }}>Mountain State Swap</h1>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto" style={{ ...itemStyle, listStyle: 'none' }}>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" style={{ ...linkStyle }} onClick={onProfileClick}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link" style={{ ...linkStyle }} onClick={onProfileClick}>
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/createListing" className="nav-link" style={{ ...linkStyle }} onClick={onProfileClick}>
                Create Listing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
