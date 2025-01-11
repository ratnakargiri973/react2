import React, { useState } from "react";
import "./App.css";

function App() {
  const size = 3;
  const [num, setNum] = useState([]);
  const [input, setInput] = useState("");

  const handleAddNumber = () => {
    if (input && !num.includes(Number(input)) && Number(input) > 0 && Number(input) <= size * size) {
      setNum((prev) => [...prev, Number(input)]);
    }
    setInput("");
  };

  const handleClear = () => {
    setNum([]);
  };

  const renderTable = () => {
    const table = [];
    let cellNumber = 1;

    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
      const cells = [];
      for (let colIndex = 0; colIndex < size; colIndex++) {
        cells.push(
          <td
            key={colIndex}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: num.includes(cellNumber) ? "brown" : "",
            }}
          >
            {cellNumber}
          </td>
        );
        cellNumber++;
      }
      table.push(<tr key={rowIndex}>{cells}</tr>);
    }

    return table;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Dynamic {size}x{size} Table
      </h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Enter a number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={handleAddNumber}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Color Me
        </button>
        <button
          onClick={handleClear}
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Clear Me
        </button>
      </div>
      <table
        style={{
          borderCollapse: "collapse",
          margin: "0 auto",
          width: "80%",
        }}
      >
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
