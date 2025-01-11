import React, { useState, useEffect } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [workSession, setWorkSession] = useState(25);
  const [breakSession, setBreakSession] = useState(5);
  const [selectedSession, setSelectedSession] = useState("work");

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            clearInterval(timer);
            setIsRunning(false);
            return selectedSession === "work"
              ? workSession * 60
              : breakSession * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, selectedSession, workSession, breakSession]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setWorkSession(25);
    setBreakSession(5);
    setTimeLeft(selectedSession === "work" ? workSession * 60 : breakSession * 60);
  };

  const handleSessionChange = (session) => {
    if (!isRunning || isRunning) {
      setSelectedSession(session);
      setTimeLeft(session === "work" ? workSession * 60 : breakSession * 60);
    }
  };

  const adjustSession = (sessionType, increment) => {

    if (sessionType === "work") {
      const newWorkSession = workSession + increment;
      setWorkSession(newWorkSession);
      if (selectedSession === "work") setTimeLeft(newWorkSession * 60);
    } else {
      const newBreakSession = breakSession + increment;
      setBreakSession(newBreakSession);
      if (selectedSession === "break") setTimeLeft(newBreakSession * 60);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={styles.container}>
      <h1>25-5 Clock</h1>
      <div style={styles.sessionSelector}>
        <div style={styles.sessionControl}>
          <button onClick={() => adjustSession("work", -1)} style={styles.adjustButton}>
            −
          </button>
          <div
            onClick={() => handleSessionChange("work")}
            style={{
              ...styles.sessionBox,
              backgroundColor: selectedSession === "work" ? "#007bff" : "#f0f8ff",
              color: selectedSession === "work" ? "white" : "black",
            }}
          >
            {workSession}
          </div>
          <button onClick={() => adjustSession("work", 1)} style={styles.adjustButton}>
            +
          </button>
        </div>
        <div style={styles.sessionControl}>
          <button onClick={() => adjustSession("break", -1)} style={styles.adjustButton}>
            −
          </button>
          <div
            onClick={() => handleSessionChange("break")}
            style={{
              ...styles.sessionBox,
              backgroundColor: selectedSession === "break" ? "#007bff" : "#f0f8ff",
              color: selectedSession === "break" ? "white" : "black",
            }}
          >
            {breakSession}
          </div>
          <button onClick={() => adjustSession("break", 1)} style={styles.adjustButton}>
            +
          </button>
        </div>
      </div>
      <div style={styles.timer}>
        <p style={styles.time}>{formatTime(timeLeft)}</p>
      </div>
      <div style={styles.controls}>
        <button onClick={handleStartPause} style={styles.button}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f8ff",
  },
  sessionSelector: {
    display: "flex",
    gap: "40px",
    marginBottom: "20px",
  },
  sessionControl: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  sessionBox: {
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #007bff",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  adjustButton: {
    width: "40px",
    height: "40px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  timer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  time: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  controls: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
