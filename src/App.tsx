import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './components/Booking';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default App;
