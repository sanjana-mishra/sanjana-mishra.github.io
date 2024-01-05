// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          Sanjana Mishra
        </div>
        <div className="navbar-links">
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#skills" className="navbar-link">
            Skills
          </a>
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#experience" className="navbar-link">
            Experience
          </a>
          {/* <a href="#contact" className="navbar-link">
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
