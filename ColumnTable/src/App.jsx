import React, { useState } from 'react';
import './App.css'

function App() {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);

  function handleTable(rows, columns) {
    const table = [];
    const totalCells = rows * columns;
    const values = Array.from({ length: totalCells }, (_, i) => i + 1);

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        const columnValues = values.slice(j * rows, (j + 1) * rows);
        if (j % 2 === 1) {
          columnValues.reverse();
        }
        row.push(<td key={`${i}-${j}`}>{columnValues[i]}</td>);
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  }

  return (
    <div className="wrapper">
      <div className="inputs">
        <label>
          Rows:
          <input
            type="range"
            min="1"
            max="10"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
          />
          {rows}
        </label>
        <label>
          Columns:
          <input
            type="range"
            min="1"
            max="10"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
          />
          {columns}
        </label>
      </div>
      <div className="table-container">
        <table border="1">
          <tbody>{handleTable(rows, columns)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
