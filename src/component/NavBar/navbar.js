import React, { useState, useEffect } from 'react';
import './navbar.css';
import nsuLogo from '../logo.png'; // Add your NSU logo file

function Navbar() {
  const taglines = [
    "# The First Private University in Bangladesh",
    "# Center of Excellence in Higher Education",
    "# Shaping Future Leaders Since 1992",
    "# Where Innovation Meets Tradition"
  ];
  
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fullText = taglines[currentTagline];
    let timer;

    if (isTyping) {
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentTagline((currentTagline + 1) % taglines.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, currentTagline, isTyping]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src={nsuLogo} alt="NSU Logo" className="navbar-logo" />
          <div className="navbar-titles">
            <div className="navbar-title">
              NORTH SOUTH UNIVERSITY
            </div>
            <div className="navbar-subtitle">
              # Center of Excellence in Higher Education
            </div>
          </div>
        </div>

        <div className="navbar-tagline">
          <div className="tagline-text">
            {displayText}
            <span className="cursor">|</span>
          </div>
        </div>
      </div>
      <div className="navbar-wave"></div>
      <div className="navbar-accent"></div>
    </nav>
  );
}

export default Navbar;