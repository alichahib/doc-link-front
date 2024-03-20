import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login'; // Import the Login component
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
          <Route path="/login" component={Login} />
          <Route path="/" component={HomePage} />
    </Router>
  );
};

export default App;
