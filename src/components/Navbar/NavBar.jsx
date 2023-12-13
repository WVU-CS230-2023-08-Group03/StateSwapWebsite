import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo1 from '../../MSSlogo.jpg'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
      <img src={logo1} alt="MSS Logo" />
        <Link className="navbar-brand" to="/">Mountain State Swap</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Store" className="nav-link" activeClassName="active" exact>Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/createListing" className="nav-link" activeClassName="active">Create Listing</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" activeClassName="active">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/reportView" className="nav-link" activeClassName="active">Report View</Link>
            </li>
            <li className="nav-item">
              <Link to="/message" className="nav-link" activeClassName="active">Messaging</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link" activeClassName="active">Login/Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;