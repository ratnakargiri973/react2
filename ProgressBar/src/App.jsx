import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isFilled, setIsFilled] = useState(false);

  // Handle progress bar increment
  useEffect(() => {
    let timer;
    if (isFilled && count < 100) {
      timer = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [count, isFilled]);

  useEffect(() => {
    setIsFilled(true); // Trigger filling when the component is mounted
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${count}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
