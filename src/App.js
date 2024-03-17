// App.js
import React from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import Services from './component/Services';
import Testimonials from './component/Testimonials';
import DoctorsList from './component/DoctorsList';
import ContactSection from './component/ContactSection'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <Testimonials />
      <DoctorsList />
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;
