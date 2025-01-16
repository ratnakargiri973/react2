import React, { useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const [delay, setDelay] = useState(1); // Delay in seconds
  const [minLimit, setMinLimit] = useState(-1000);
  const [maxLimit, setMaxLimit] = useState(1000);
  const [count, setCount] = useState(0);

  // Increment function
  function handleIncrement() {
    if (count < maxLimit) {
      setCount(prevCount => prevCount + number);
    }
  }

  // Decrement function
  function handleDecrement() {
    if (count > minLimit) {
      setCount(prevCount => prevCount - number);
    }
  }

  // Async increment function
  function handleAsyncIncrement() {
    if (count < maxLimit) {
      setCount(prevCount => prevCount + number);
    }
  }

  // Async decrement function
  function handleAsyncDecrement() {
    if (count > minLimit) {
      setCount(prevCount => prevCount - number);
    }
  }

  // Use effect for async increment with setTimeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAsyncIncrement();
    }, delay * 1000); // Delay in seconds converted to milliseconds

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, [delay, number, count, maxLimit]); // Dependencies for increment timeout

  // Use effect for async decrement with setTimeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAsyncDecrement();
    }, delay * 1000); // Delay in seconds converted to milliseconds

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, [delay, number, count, minLimit]); // Dependencies for decrement timeout

  function handleReset(){
    setCount(0);
    setDelay(1);
    setNumber(1);
    setMaxLimit(1000);
    setMinLimit(-1000);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={()=>handleIncrement()}>+</button>
        <button onClick={()=>handleDecrement()}>-</button>
      </div>
      <div>
        <button onClick={handleAsyncDecrement}>async -</button>
        <button onClick={handleAsyncIncrement}>async +</button>
      </div>

      <div>
        <label htmlFor="delay">Delay (in seconds)</label>
        <input
          id="delay"
          type="range"
          min={1}
          max={5}
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
        <span>{delay} seconds</span>
      </div>

      <div>
        <label htmlFor="number">Increment / Decrement By</label>
        <input
          id="number"
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>

      <div>
        <span>
          <label htmlFor="minLimit">Lower Limit</label>
          <input
            id="minLimit"
            type="number"
            value={minLimit}
            onChange={(e) => setMinLimit(Number(e.target.value))}
          />
        </span>
        <span>
          <label htmlFor="maxLimit">Higher Limit</label>
          <input
            id="maxLimit"
            type="number"
            value={maxLimit}
            onChange={(e) => setMaxLimit(Number(e.target.value))}
          />
        </span>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
