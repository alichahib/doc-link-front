// Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service">
        <div className="service-icon">
          <i className="fas fa-user-md"></i>
        </div>
        <div className="service-info">
          <h3>Online Consultations</h3>
          <p>Consult with qualified healthcare professionals remotely through our online platform.</p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="service-info">
          <h3>Appointment Scheduling</h3>
          <p>Easily schedule appointments with doctors and specialists at your convenience.</p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon">
          <i className="fas fa-prescription-bottle-alt"></i>
        </div>
        <div className="service-info">
          <h3>Prescription Refills</h3>
          <p>Request prescription refills from your healthcare provider with just a few clicks.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
