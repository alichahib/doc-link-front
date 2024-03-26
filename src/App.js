import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // Import the Login component
import HomePage from './pages/HomePage';
import Doctors from './pages/Doctors';
import ApplyDoctor from './pages/ApplyDoctor';
import ResearchDoctor from './pages/ResearchDoctor';
import Register from './pages/Register';
import ProtectedRoute from './component/ProtectedRoute';
import PublicRoute from './component/PublicRoute';
//import Header from './component/Header';

const App = () => {
  return (
    
      <Routes>

<Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
<Route path="/apply-doctor" element={<ProtectedRoute><ApplyDoctor/></ProtectedRoute>} />
<Route path="/doctor-research" element={<ProtectedRoute><ResearchDoctor/></ProtectedRoute>} />
<Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
<Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
<Route path="/doctors" element={<ProtectedRoute><Doctors/></ProtectedRoute>} />
          
          
      </Routes>
  );
};

export default App;
