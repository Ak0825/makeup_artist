import React from 'react';
import logo from '../assets/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 z-3">
      <Link className="navbar-brand" to="/">
        {/* <img src={logo} alt="" width={80}  /> */}
        Lata Prabhakar
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
