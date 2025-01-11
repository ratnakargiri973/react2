import React, { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState("");
  const [convertedTemperature, setConvertedTemperature] = useState("");
  const [degree, setDegree] = useState("celsius");
  const [finalDegree, setFinalDegree] = useState("celsius");

  // Conversion function
  function handleTemperature() {
    let temp = parseFloat(temperature);
    if (isNaN(temp)) return; // If temperature is not a number, do nothing

    if (degree === "celsius" && finalDegree === "fahrenheit") {
      // Celsius to Fahrenheit
      setConvertedTemperature((temp * 9) / 5 + 32);
    } else if (degree === "fahrenheit" && finalDegree === "celsius") {
      // Fahrenheit to Celsius
      setConvertedTemperature(((temp - 32) * 5) / 9);
    } else if (degree === finalDegree) {
      // No conversion needed
      setConvertedTemperature(temp);
    }
  }

  return (
    <div style={{width: "100vw", height:"100vh", display:"flex", justifyContent:"starat",
      alignItems:"center", flexDirection:"column", gap:"30px", backgroundColor:"cyan", paddingTop:"100px"
    }}>
      <div style={{display:'flex', gap:'20px'}}>
        <input
          type="number"
          placeholder="Enter Temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          style={{padding:"10px 20px", outline:"none"}}
        />
        <select
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          style={{padding:"10px 20px", outline:"none"}}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>

      <button onClick={handleTemperature} style={{border:"none", outline:"none", padding:'10px 20px', borderRadius:'5px', backgroundColor:"green", fontWeight:"bold", color:"white"}}>Convert</button>

      <div>
        <h2>
          Converted temperature is:{" "}
          <strong>{convertedTemperature}</strong>
        </h2>
        <select
          value={finalDegree}
          onChange={(e) => setFinalDegree(e.target.value)}
          style={{padding:"10px 20px", outline:"none"}}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
    </div>
  );
}

export default App;
