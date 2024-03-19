// LoginPage.js

import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login logic goes here');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Login</span>
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input id="username" type="text" className="validate" />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input-field">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn">Login</button>
              </form>
            </div>
            <div className="card-action">
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
