import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // Import the Login component
import HomePage from './pages/HomePage';
import Register from './pages/Register';
//import Header from './component/Header';

const App = () => {
  return (
    
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<Register/>} />
      </Routes>
  );
};

export default App;
