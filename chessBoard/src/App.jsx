import React, { useState } from 'react';
import './App.css'

const App = () => {
  const size = 8;
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [clickedCell, setClickedCell] = useState(null);


  const getDiagonals = (row, col) => {
    const diagonals = [];

   
    for (let i = -size; i < size; i++) {
      if (
        row + i >= 0 &&
        row + i < size &&
        col + i >= 0 &&
        col + i < size
      ) {
        diagonals.push([row + i, col + i]);
      }
    }

    
    for (let i = -size; i < size; i++) {
      if (
        row + i >= 0 &&
        row + i < size &&
        col - i >= 0 &&
        col - i < size
      ) {
        diagonals.push([row + i, col - i]);
      }
    }

    return diagonals;
  };

  const handleClick = (row, col) => {
    const diagonals = getDiagonals(row, col);
    setHighlightedCells(diagonals);
    setClickedCell([row, col]);
  };

  return (
    <div className="chess-board">
  {Array(size).fill(null).map((_, row) => (
    <div key={row} className="row">
      {Array(size).fill(null).map((_, col) => {
       const isDiagonal = highlightedCells.find(([r, c]) => r === row && c === col) !== undefined;
       const isSelected = JSON.stringify(clickedCell) === JSON.stringify([row, col]);
       

        const cellColor = (row + col) % 2 === 1 ? 'black' : 'white';

        return (
          <div
            key={col}
            className={`cell ${cellColor} ${isDiagonal ? 'highlighted' : ''} ${isSelected ? 'clicked' : ''}`}
            onClick={() => handleClick(row, col)}
          ></div>
        );
      })}
    </div>
  ))}
</div>

  );
};

export default App;