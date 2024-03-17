// pages/HomePage.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';
import DoctorList from '../components/DoctorList';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      
      <div className="content">
        <h1>Bienvenue sur notre plateforme de santé</h1>
        <AppointmentForm />
        <DoctorList />
      </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;
