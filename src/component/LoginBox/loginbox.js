// src/LoginBox.js

import React, { useEffect, useState } from 'react';
import './loginbox.css'; // Import the CSS file for styling

function LoginBox() {
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
    <div className="login-container">
      <div className="login-box">
        <h1>RDS</h1>
        <h2>NSU Portal : Login</h2>
        <form>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Please enter your username" required />
          </div>
          <button type="submit">Next</button>
        </form>
        <a href="#" className="forgot-password">Forgot your password?</a>
        <div className="server-time">
          Current Server Time: <span id="time">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
