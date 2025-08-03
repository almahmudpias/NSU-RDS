// src/Navbar.js

import React from 'react';
import './navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-right">
          <div className="navbar-title dm-serif-display-regular animate-text">
            NORTH SOUTH UNIVERSITY
          </div>
          <div className="navbar-subtitle">
            <div className="subtitle-line">Center of Excellence in Higher Education</div>
            <div className="subtitle-line-small typing-text">
              The First Private University in Bangladesh
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
