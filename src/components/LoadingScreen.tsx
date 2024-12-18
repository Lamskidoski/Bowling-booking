import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
        <div className="logo">
        {/* Här kan du lägga in SVG eller bild för loggan */}
        <img src="./src/svg/bowling-logo.svg" alt="Strajk Bowling Logo" />
      </div>
      <div className='loading-header'>
      <h1 className='loading-h1'>Strajk</h1>
        <p className='loading-p'>Bowling</p>
      </div>
        
    </div>
  );
};

export default LoadingScreen;
