import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);


  const secondAngle = (time.getSeconds() / 60) * 360;
  const minuteAngle = (time.getMinutes() / 60) * 360;
  const hourAngle = ((time.getHours() % 12) / 12) * 360 + (minuteAngle / 12);

 
  const renderNumbers = () => {
    const numbers = [];
    const radius = 8;

    for (let i = 1; i <= 12; i++) {
      const angle = ((i - 3) / 12) * 360;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;

      numbers.push(
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate(${x}rem, ${y}rem)`,
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "black",
          }}
        >
          {i}
        </div>
      );
    }

    return numbers;
  };

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        backgroundColor: "cyan",
        border: "10px solid #000",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Hour Hand */}
      <div
        style={{
          width: "8px",
          height: "80px",
          backgroundColor: "black",
          position: "absolute",
          top: "50px",
          transformOrigin: "bottom",
          transform: `rotate(${hourAngle}deg)`,
          transition: "transform 0.5s ease-in-out",
        }}
      ></div>

      {/* Minute Hand */}
      <div
        style={{
          width: "4px",
          height: "100px",
          backgroundColor: "black",
          position: "absolute",
          top: "30px",
          transformOrigin: "bottom",
          transform: `rotate(${minuteAngle}deg)`,
          transition: "transform 0.5s ease-in-out",
        }}
      ></div>

      {/* Second Hand */}
      <div
        style={{
          width: "2px",
          height: "120px",
          backgroundColor: "red",
          position: "absolute",
          top: "20px",
          transformOrigin: "bottom",
          transform: `rotate(${secondAngle}deg)`,
          transition: "transform 0.1s ease-in-out",
        }}
      ></div>

      {/* Clock Center */}
      <div
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: "#000",
          borderRadius: "50%",
          position: "absolute",
        }}
      ></div>

      {/* Numbers */}
      {renderNumbers()}
    </div>
  );
}

export default App;
