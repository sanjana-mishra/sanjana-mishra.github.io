// Header.js
import React from 'react';
import './Header.css'; // Create this file for styling
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="header-background">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="header-content">
        <div className="header-text">
          <h1>Sanjana Mishra</h1>
        </div>
        <div className="header-links">
          {/* Add your social media and resume links */}
          <a
            href="https://www.linkedin.com/in/sanjanamishra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sanjana-mishra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          {/* <a href="SanjanaMishra_Resume.pdf" download="SanjanaMishra_Resume.pdf">
            Download Resume
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
