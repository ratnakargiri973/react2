import React, { useEffect, useState } from 'react';
import './App.css';

function Cell({ filled, onClick, isDisabled, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      aria-label={label}
      className={filled ? 'cell cell-activated' : 'cell'}
    ></button>
  );
}

function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const [config, setConfig] = useState([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]);
  const [delay, setDelay] = useState(300);
  const [size, setsize] = useState(3);

  function deactivateCells() {
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, delay);
  }

  function activateCells(index) {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat().filter(Boolean).length) {
      deactivateCells();
    }
  }


  useEffect(()=>{
    updateConfig(size)
  }, [size]);
 
  function updateConfig(size) {
    const newSize = parseInt(size, 10);
    const newConfig = [];

    for (let i = 0; i < newSize; i++) {
     const row = [];
     for (let j = 0; j < newSize; j++) {
    row.push(1);
    }
    newConfig.push(row);
  }
    setConfig(newConfig);
    setOrder([]);
  }


  function handleDelayChange(value) {
    const numericValue = parseInt(value, 10);
    setDelay(numericValue);
  }

  return (
    <div className="wrapper">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}>
        {config.flat().map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              label={`cell ${index}`}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index)}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
      <div className="controls">
        <label>
          Grid Size:
          <input
            type="range"
            min="2"
            max="4"
            step="1"
            value={size}
            onChange={(e) => setsize(e.target.value)}
          />
        </label>
        <label>
          Delay:
          <input
            type="range"
            min="100"
            max="700"
            step="100"
            value={delay}
            onChange={(e) => handleDelayChange(e.target.value)}
          />
        </label>
        <span>Delay: {delay}ms</span>
      </div>
    </div>
  );
}

export default App;
