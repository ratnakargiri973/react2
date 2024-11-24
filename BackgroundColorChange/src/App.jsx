import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff"); // Initial background color

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="content">
        <h1>Background Color Changer</h1>
        <p>Click the button to change the background color!</p>
        <button onClick={generateRandomColor}>Change Background</button>
        <p>Current Color: <strong>{bgColor}</strong></p>
      </div>
    </div>
  );
};

export default App;
