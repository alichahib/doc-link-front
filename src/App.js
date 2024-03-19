import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import LoginPage from './pages/LoginPage'; // Import the Login component
import MainSelection from './component/MainSelection';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MainSelection />
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
