import React, { useState } from "react";

function App() {
  const [circles, setCircles] = useState(1);

  const renderCircles = () => {
    const maxSize = 32;
    const step = maxSize / circles;
    const circleArray = [];

    for (let i = 0; i < circles; i++) {
      const size = maxSize - i * step;
      circleArray.push(
        <div
          key={i}
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
            border: "2px solid blue",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${1 - i * (1 / circles)})`,
          }}
        ></div>
      );
    }
    return circleArray;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Nested Circles</h1>
      <input
        type="number"
        onChange={(e) =>
          setCircles(Math.max(1, Math.min(parseInt(e.target.value) || 1)))
        }
        value={circles}
        min={1}
        max={200}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <div
        style={{
          width: "40rem",
          height: "40rem",
          position: "relative",
          border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderCircles()}
      </div>
    </div>
  );
}

export default App;
