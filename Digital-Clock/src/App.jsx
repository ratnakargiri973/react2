import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <div className="time">{formatTime(time)}</div>
    </div>
  );
};

export default App;
