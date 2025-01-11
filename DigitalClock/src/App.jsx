import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

function handleTime(time){
  let hours = time.getHours();
  

  const period = hours >= 12 ? 'PM' : 'AM';

 
  hours = hours % 12;
  hours = hours ? hours : 12;
  const paddedHour = (hours < 10 ? '0' : '') + hours;
  const minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
  const seconds = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();

  return `${paddedHour}:${minutes}:${seconds} ${period}`
}

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ fontSize: '200px', fontFamily: 'monospace', textAlign: 'center', backgroundColor: "black", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", borderRadius: "10px" }}>
        <p style={{ color: "red" }}>
          { handleTime(time)}
        </p>
      </div>
    </div>
  );
}

export default App;
