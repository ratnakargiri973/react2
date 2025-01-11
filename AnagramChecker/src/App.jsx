import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [message, setMessage] = useState("");

  function handleAnagramChecker() {
    const normalizedFirst = firstWord.replace(/\s+/g, '').toLowerCase();
    const normalizedSecond = secondWord.replace(/\s+/g, '').toLowerCase();

    if (
      normalizedFirst.split('').sort().join('') ===
      normalizedSecond.split('').sort().join('')
    ) {
      setMessage("The given two words are anagrams.");
    } else {
      setMessage("The given two words are not anagrams.");
    }
  }

  return (
    <div  style={{width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px", flexDirection:"column"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter the first word or phrase"
          onChange={(e) => setFirstWord(e.target.value)}
          style={{ padding: "10px 20px", borderRadius: "5px", outline: "none" }}
        />
        <input
          type="text"
          placeholder="Enter the second word or phrase"
          onChange={(e) => setSecondWord(e.target.value)}
          style={{ padding: "10px 20px", borderRadius: "5px", outline: "none" }}
        />
        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "green",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleAnagramChecker}
        >
          Compare
        </button>
      </div>
      <p style={{ textAlign: "center" }}>{message}</p>
    </div>
  );
}

export default App;
