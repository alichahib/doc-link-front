// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Doclink</div>
      <nav className="navigation">
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
