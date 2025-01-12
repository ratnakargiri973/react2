import React, { useState } from 'react';
import './App.css';

function App() {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState(''); 

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setChips([...chips, inputValue.trim()]); 
      setInputValue('');
    }
  };

  const removeChip = (chipToRemove) => {
    setChips(chips.filter((chip) => chip !== chipToRemove)); 
  };

  return (
    <div className="wrapper">
      <h1>Chips Input</h1>
      <input
        type="text"
        placeholder="Type and hit Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="chips-container">
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <span className="chip-close" onClick={() => removeChip(chip)}>
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
