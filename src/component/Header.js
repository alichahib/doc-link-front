import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import '../styles/styles.css'; // Import the CSS file

const Header = (props) => {
  // Define state variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login status change with useEffect
  useEffect(() => {
    // Example: set isLoggedIn based on props
    setIsLoggedIn(props.isLoggedIn);
  }, [props.isLoggedIn]);

  return (
    <div>
    <header className="header">
        {/* Navigate to the home page when clicking on the logo */}
        <Link to="/" className="logo">Mon Application Santé</Link>
        <nav>
          <ul>
            {/* Navigate to the search page */}
            <li><Link to="/search"><FaSearch /></Link></li>
            {/* Render different link based on login status */}
            {isLoggedIn ? (
              // If logged in, navigate to dashboard or profile
              <li><Link to="/dashboard"><FaUserCircle /></Link></li>
            ) : (
              // If not logged in, navigate to login page
              <li><Link to="/login"><FaUserCircle /></Link></li>
            )}
          </ul>
        </nav>
    </header>
    </div>
  );
};

export default Header;
