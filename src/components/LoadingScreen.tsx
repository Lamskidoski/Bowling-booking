import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      {/* <p className="loading-text">loading</p> */}
      <div className="logo">
        {/* Här kan du lägga in SVG eller bild för loggan */}
        <img src="./src/svg/bowling-logo.svg" alt="Strajk Bowling Logo" />
      </div>
    </div>
  );
};

export default LoadingScreen;
