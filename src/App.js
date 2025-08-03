import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/NavBar/navbar'; // Import the Navbar component
import LoginBox from './component/LoginBox/loginbox'; // Import the LoginBox component
import Footer from './component/Footer/footer'; // Import the Footer component
function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString();
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="front-body">
      <Navbar /> {/* Reusable component */}
      <LoginBox /> {/* Reusable component */}
      <Footer /> {/* Reusable component */}


      
    </div>
  );
}

export default App;
