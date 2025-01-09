import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("This is a toast message");
  const [duration, setDuration] = useState(3);
  const [horizontal, setHorizontal] = useState('left');
  const [vertical, setVertical] = useState('top');
  const [status, setStatus] = useState('success');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  function handleShowToast() {
    setShow(true);
  }
  function handleRemove(){
    setShow(false);
  }

  const toastStyles = {
    position: 'fixed',
    [vertical]: '20px',
    [horizontal]: '20px',
    padding: '10px 20px',
    backgroundColor:
      status === 'success'
        ? 'green'
        : status === 'error'
        ? 'red'
        : status === 'warning'
        ? 'orange'
        : status === 'info'
        ? 'blue'
        : 'gray',
    color: 'white',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    display: show ? 'block' : 'none',
  };

  return (
    <div className="Container">
      <h1>Toast Popup</h1>
      <div className="container-body">
        <label>
          <select onChange={(e) => setHorizontal(e.target.value)}>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>

        <label>
          <select onChange={(e) => setVertical(e.target.value)}>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </label>

        <label>
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="normal">Normal</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </select>
        </label>

        <input
          type="text"
          className='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Message"
        />

        <label>
          Duration (seconds):
          <input
            type="range"
            min="3"
            max="10"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </label>

        <button onClick={handleShowToast}>Show Toast</button>
      </div>

      {show && (
        <div style={toastStyles}>
          <button onClick={handleRemove}>X</button>
          {message}
        </div>
      )}
    </div>
  );
}

export default App;
