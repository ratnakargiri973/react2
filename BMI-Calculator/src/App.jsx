import React, { useState } from 'react';

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiWeight, setBMIWeight] = useState("");
  const [message, setMessage] = useState("");

  function handleCalculation() {
    if (!height || !weight) {
      alert("Please enter both height and weight!");
      return;
    }

    const heightInMeters = parseFloat(height) / 100; // Convert height from cm to meters
    const weightInKg = parseFloat(weight);

    if (heightInMeters <= 0 || weightInKg <= 0) {
      alert("Height and weight must be positive values!");
      return;
    }

    const result = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBMIWeight(result);

    if (result < 18.5) {
      setMessage("Underweight");
    } else if (result >= 18.5 && result <= 24.9) {
      setMessage("Healthy Weight");
    } else if (result >= 25 && result <= 29.9) {
      setMessage("Overweight");
    } else {
      setMessage("Obese");
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ marginBottom: '20px' }}>
        <div>
          <p>Height (in cm):</p>
          <input
            type="number"
            placeholder="Enter height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <p>Weight (in kg):</p>
          <input
            type="number"
            placeholder="Enter weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleCalculation}
        >
          Calculate
        </button>
      </div>
      <div>
        <h2>BMI: {bmiWeight}</h2>
        <strong>{message}</strong>
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h3>BMI Weight Ranges</h3>
          <p>Less than 18.5: Underweight</p>
          <p>18.5 - 24.9: Healthy Weight</p>
          <p>25 - 29.9: Overweight</p>
          <p>30 and above: Obese</p>
        </div>
      </div>
    </div>
  );
}

export default App;
