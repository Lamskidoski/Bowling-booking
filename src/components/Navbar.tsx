import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate(); // React Router navigeringsfunktion

  return (
    <div className="navbar-page">
        <div className="logo">
        <img src="./src/svg/bowling-logo.svg" alt="Strajk Bowling Logo" />
      </div>
      <h1 onClick={() => navigate('/')} className="navbar-link">
        Booking
      </h1>
      <h1 onClick={() => navigate('/confirmation')} className="navbar-link">
        Confirmation
      </h1>
    </div>
  );
};

export default Navbar;
