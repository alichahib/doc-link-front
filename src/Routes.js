// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
