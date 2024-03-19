// App.js
import React from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import Services from './component/Services';
import Testimonials from './component/Testimonials';
import DoctorsList from './component/DoctorsList';
import ContactSection from './component/ContactSection'
import Footer from './component/Footer';
import MainSelection from './component/MainSelection';
// App.js or index.js
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <MainSelection />
    </div>
  );
}

export default App;
