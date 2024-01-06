// Navbar.js

import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  const handleScroll = () => {
    const headerSection = document.getElementById('home');
    const { top, height } = headerSection.getBoundingClientRect();
    const headerBottom = top + height;
  
    if (window.scrollY >= headerBottom) {
      setNavbarBackground('rgb(82, 152, 141)');
    } else {
      setNavbarBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
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
