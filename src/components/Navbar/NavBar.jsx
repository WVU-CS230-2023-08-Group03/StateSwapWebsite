import React from 'react';
import { Link } from "react-router-dom";
import Store from '../../pages/Store';

const Navbar = ({ onProfileClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black', padding: '0', borderBottom: '1px solid black', marginBottom: '0' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center" style={{ padding: '0 200px', marginBottom: '0' }}>
        <h1 style={{ color: 'white', textAlign: 'center', width: '100%', margin: '100' }}>Mountain State Swap</h1>
        <ul className="navbar-nav">
          <li className="nav-item" style={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
            <Link to="/profile" className="nav-link" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              Profile
            </Link>
            <Link to="/store" className="nav-link" style={{ color: 'white', textDecoration: 'none', textAlign: 'center', marginLeft: '100px' }}>
              Store
            </Link>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ color: 'white', marginLeft: '900px' }} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
