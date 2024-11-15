import React, { useState } from 'react';
import '../styles/Booking.css';

const Booking: React.FC = () => {
  const [date, setDate] = useState<string>('3 dec');
  const [time, setTime] = useState<string>('21.00');
  const [numPersons, setNumPersons] = useState<number>(3);
  const [isFullyBooked, setIsFullyBooked] = useState<boolean>(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    checkAvailability(e.target.value, time);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    checkAvailability(date, e.target.value);
  };

  const handleNumPersonsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    setNumPersons(num);
  };

  const checkAvailability = (selectedDate: string, selectedTime: string) => {
    if (selectedDate === '3 dec' && selectedTime === '21.00') {
      setIsFullyBooked(true);
    } else {
      setIsFullyBooked(false);
    }
  };

  return (
    <div className="booking-container">
      <p className="booking-header">booking</p>
      <div className="logo">
        {/* Lägg till logotypen här */}
        <img src="./src/svg/bowling-logo.svg" alt="Strajk Bowling Logo" />
      </div>
      <h2>Booking</h2>

      <div className="booking-section">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={handleDateChange}
          className="booking-input"
        />
        
        <label>Time</label>
        <input
          type="text"
          value={time}
          onChange={handleTimeChange}
          className="booking-input"
        />
      </div>

      {isFullyBooked && (
        <div className="fully-booked-message">
          No lane available at given date or time. Please try another date or time.
        </div>
      )}

      <div className="booking-section">
        <label>Number of Awesome Bowlers</label>
        <input
          type="number"
          value={numPersons}
          onChange={handleNumPersonsChange}
          className="booking-input"
          min={1}
        />
      </div>

      <div className="booking-section">
        <label>Number of Lanes</label>
        <input type="text" value="1 lane" readOnly className="booking-input" />
      </div>

      <h3>Shoes</h3>
      <div className="shoes-section">
        {Array.from({ length: numPersons }, (_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Shoe size / Person ${index + 1}`}
            className="booking-input"
          />
        ))}
      </div>

      <button className="booking-button">STRIIIIIIKE!</button>
    </div>
  );
};

export default Booking;
