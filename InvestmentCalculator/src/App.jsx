import React, { useState } from 'react';
import './App.css'

function App() {
  const [current, setCurrent] = useState(10000);
  const [Yearly, setYearly] = useState(1200);
  const [expectedInterest, setExpectedInterest] = useState(7);
  const [investmentDuration, setInvestmentDuration] = useState(10);
  const [result, setResult] = useState([]);

  function handleReset() {
    setCurrent(10000);
    setYearly(1200);
    setExpectedInterest(7);
    setInvestmentDuration(10);
    setResult([]); 
  }

  function handleCalculation() {
    const results = [];
    let totalSavings = current;
    let totalInterest = 0;

    for (let year = 1; year <= investmentDuration; year++) {
      const interestThisYear = totalSavings * (expectedInterest / 100);
      totalSavings += interestThisYear + Yearly;
      totalInterest += interestThisYear;

      results.push({
        year,
        totalSavings: totalSavings.toFixed(2),
        interestThisYear: interestThisYear.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        investedCapital: (current + Yearly * year).toFixed(2),
      });
    }

    setResult(results);
  }

  return (
    <div>
      <div className="inputs">
        <div>
          <label htmlFor="">Current Savings </label>
          <input
            type="number"
            value={current}
            onChange={(e) => setCurrent(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="">Yearly Savings </label>
          <input
            type="number"
            value={Yearly}
            onChange={(e) => setYearly(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="">Expected Interest (%, per year) </label>
          <input
            type="number"
            value={expectedInterest}
            onChange={(e) => setExpectedInterest(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="">Investment Duration (years) </label>
          <input
            type="number"
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(Number(e.target.value))}
          />
        </div>

        <div className="Btns">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleCalculation}>Calculate</button>
        </div>
      </div>

      <div className="data-table">
        <table border="1">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 ? (
              result.map((item) => (
                <tr key={item.year}>
                  <td>{item.year}</td>
                  <td>{item.totalSavings}</td>
                  <td>{item.interestThisYear}</td>
                  <td>{item.totalInterest}</td>
                  <td>{item.investedCapital}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data to display. Please calculate.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
