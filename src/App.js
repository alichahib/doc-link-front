import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // Import the Login component
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import ProtectedRoute from './component/ProtectedRoute';
import PublicRoute from './component/PublicRoute';
//import Header from './component/Header';

const App = () => {
  return (
    
      <Routes>

<Route path="/" element={<ProtectedRoute>
                            <HomePage/>
                          </ProtectedRoute>
                        } />
<Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
<Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
          
          
      </Routes>
  );
};

export default App;
