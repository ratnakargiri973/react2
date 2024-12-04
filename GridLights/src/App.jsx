import React, { useState, useEffect } from "react";

const App = () => {
  const [gridSize, setGridSize] = useState(3); // Default grid size 3x3
  const [lights, setLights] = useState([]);
  const [activationOrder, setActivationOrder] = useState([]); // Track activation order
  const [allOn, setAllOn] = useState(false); // Flag to toggle reverse mode
  const [delay, setDelay] = useState(300); // Delay between toggling lights (in ms)

  // Initialize the grid
  useEffect(() => {
    const initialGrid = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(false));
    setLights(initialGrid);
    setActivationOrder([]);
    setAllOn(false); // Reset state when grid size changes
  }, [gridSize]);

  // Handle cell click
  const handleCellClick = (rowIndex, colIndex) => {
    setLights((prevLights) => {
      const updatedLights = prevLights.map((row, r) =>
        row.map((cell, c) =>
          r === rowIndex && c === colIndex ? !cell : cell
        )
      );

      // Update activation order
      if (!updatedLights[rowIndex][colIndex]) {
        // Remove from activation order if toggled off
        setActivationOrder((prevOrder) =>
          prevOrder.filter(([r, c]) => !(r === rowIndex && c === colIndex))
        );
      } else {
        // Add to activation order if toggled on
        setActivationOrder((prevOrder) => [...prevOrder, [rowIndex, colIndex]]);
      }

      // Check if all lights are on
      const allLightsOn = updatedLights.every((row) => row.every((cell) => cell));
      if (allLightsOn) {
        setAllOn(true);
      }

      return updatedLights;
    });
  };

  // Reverse toggle logic
  useEffect(() => {
    if (allOn) {
      const orderToProcess = [...activationOrder]; // Preserve the original order
      let toggleDelay = 0;

      // Prevent immediate re-triggering
      setAllOn(false);

      // Toggle lights off in reverse order
      orderToProcess.reverse().forEach(([rowIndex, colIndex], idx) => {
        setTimeout(() => {
          setLights((prevLights) => {
            const updatedLights = prevLights.map((row, r) =>
              row.map((cell, c) =>
                r === rowIndex && c === colIndex ? false : cell // Ensure light is turned off
              )
            );
            return updatedLights;
          });

          // Reset activationOrder only after the last light is toggled off
          if (idx === orderToProcess.length - 1) {
            setActivationOrder([]);
          }
        }, toggleDelay);
        toggleDelay += delay; // Increment delay based on user input
      });
    }
  }, [allOn, delay]);

  return (
    <div className="grid-lights">
      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gap: "10px",
        }}
      >
        {lights.map((row, rowIndex) =>
          row.map((light, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: light ? "yellow" : "gray",
                border: "1px solid black",
                cursor: "pointer",
              }}
            ></div>
          ))
        )}
      </div>

      {/* Controls */}
      <div style={{ marginTop: "20px" }}>
        <label>
          Grid Size:{" "}
          <input
            type="number"
            value={gridSize}
            onChange={(e) => setGridSize(Math.max(1, Number(e.target.value)))}
            min="1"
          />
        </label>
        <br />
        <label style={{ marginTop: "10px" }}>
          Delay (ms):{" "}
          <input
            type="number"
            value={delay}
            onChange={(e) => setDelay(Math.max(0, Number(e.target.value)))}
            min="0"
          />
        </label>
      </div>
    </div>
  );
};

export default App;
