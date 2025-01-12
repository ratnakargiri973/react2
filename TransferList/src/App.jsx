import React, { useState } from 'react';
import './App.css';

function intersection(a, b) {
  return a.filter((value) => b.includes(value));
}

function not(a, b) {
  return a.filter((value) => !b.includes(value));
}

function App() {
  const [left, setLeft] = useState(["INDIA", "USA", "US", "UAE", "CANADA"]);
  const [right, setRight] = useState([]); 
  const [checked, setChecked] = useState([]);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  function handleToggle(item) {
    const isChecked = checked.includes(item);
    const newChecked = isChecked
      ? checked.filter((value) => value !== item)
      : [...checked, item];
    setChecked(newChecked);
  }

  function handleAllLeft() {
    setLeft([...left, ...right]);
    setRight([]);
  }

  function handleAllRight() {
    setRight([...right, ...left]);
    setLeft([]);
  }

  function handleCheckedRight() {
    setRight([...right, ...leftChecked]);
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  }

  function handleCheckedLeft() {
    setLeft([...left, ...rightChecked]);
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  }

  function customList(items) {
    return (
      <div className="list">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={() => handleToggle(item)}
                checked={checked.includes(item)}
              />
              <label>{item}</label>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="list-container">{customList(left)}</div>

      <div className="Btns">
        <button onClick={handleAllRight} disabled={left.length === 0}>
          &gt;&gt;
        </button>
        <button onClick={handleCheckedRight} disabled={leftChecked.length === 0}>
          &gt;
        </button>
        <button onClick={handleCheckedLeft} disabled={rightChecked.length === 0}>
          &lt;
        </button>
        <button onClick={handleAllLeft} disabled={right.length === 0}>
          &lt;&lt;
        </button>
      </div>

      <div className="list-container">{customList(right)}</div>
    </div>
  );
}

export default App;
