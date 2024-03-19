import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import '../styles/styles.css'; // Importer le fichier CSS

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Mon Application Santé</Link>
        <nav>
          <ul>
            <li><Link to="/search"><FaSearch /></Link></li>
            <li><Link to="/login">Proffessionel Santé</Link></li>
            <li><Link to="/login"><FaUserCircle /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
