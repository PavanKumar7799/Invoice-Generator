import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Invoice Generator
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-links">
              Create Invoice
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/invoices" className="nav-links">
              View Invoices
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
