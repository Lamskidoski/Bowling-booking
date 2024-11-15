import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Booking from './components/Booking';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulerar en laddningstid på 3 sekunder
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? <LoadingScreen /> : <Booking />}
    </div>
  );
};

export default App;
