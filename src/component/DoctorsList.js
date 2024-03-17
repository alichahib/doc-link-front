// DoctorList.js
import React from 'react';

const DoctorList = () => {
  return (
    <ul className="collection">
      <li className="collection-item avatar">
        <img src="doctor1.jpg" alt="Doctor 1" className="circle" />
        <span className="title">Dr. John Doe</span>
        <p>Cardiologist</p>
      </li>
      <li className="collection-item avatar">
        <img src="doctor2.jpg" alt="Doctor 2" className="circle" />
        <span className="title">Dr. Jane Smith</span>
        <p>Dermatologist</p>
      </li>
      {/* Add more doctors as needed */}
    </ul>
  );
}

export default DoctorList;
