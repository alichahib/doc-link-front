// MainSelection.js

import React from 'react';
import '../styles/mainSelection.css'; // Importez le fichier CSS pour styliser le composant
import 'material-icons/iconfont/material-icons.css'
//import searchIcon from './search-icon.png'; 

const MainSelection = () => {
  return (
    <div className="main-selection-container">
      
      <div className="background-image">
      </div>
      <div className="input-container">
        <input type="text" placeholder="Service" className="service-input" />
        <input type="text" placeholder="Location" className="location-input" />
        <button className="location_searching" onClick={() => {console.log("ddd")}}>
        </button>
      </div>

    </div>
  );
}

export default MainSelection;
