import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inval, setInval] = useState("");
  const [lc, setLc] = useState(false);
  const [uc, setUc] = useState(false);
  const [num, setNum] = useState(false);
  const [sym, setSym] = useState(false);
  const [range, setRange] = useState(0);

  const handleonchange = (e) => {
    let val = e.target.value;
    setInval(val);
    setLc(/[a-z]/.test(val));
    setUc(/[A-Z]/.test(val));
    setNum(/\d/.test(val));
    setSym(/[!@#$%&*]/.test(val));
  };

  useEffect(() => {
    let strength = 0;

    if (inval.length > 0 && inval.length <= 4) {
      strength += 4;
    } else if (inval.length > 4 && inval.length <= 8) {
      strength += 8;
    } else if (inval.length > 8 && inval.length <= 12) {
      strength += 12;
    } else if (inval.length > 12 && inval.length <= 18) {
      strength += 18;
    }

    setRange(strength);
  }, [inval]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={inval}
          onChange={(e) => handleonchange(e)}
          style={{
            border: "2px solid blue",
            padding: "8px",
            width: "250px",
            borderRadius: "4px",
          }}
        />
      </div>

      <div>
        <p style={{ color: lc ? "black" : "#aaa" }}>Lowercase</p>
        <p style={{ color: uc ? "black" : "#aaa" }}>Uppercase</p>
        <p style={{ color: num ? "black" : "#aaa" }}>Number</p>
        <p style={{ color: sym ? "black" : "#aaa" }}>Symbol</p>
      </div>

      <div>
        <input
          type="range"
          value={range}
          max={18}
          id="strength"
          style={{
            width: "250px",
            accentColor: inval.length <= 6 ? "red" : inval.length <= 12 ? "yellow" : "green",
          }}
        />
      </div>

      <div>
        <p>Your password has {inval.length} characters</p>
      </div>

      {inval.length <= 6 ? (
        <p>Your password is weak</p>
      ) : inval.length > 6 && inval.length <= 12 ? (
        <p>Your password is medium</p>
      ) : (
        <p>Your password is strong</p>
      )}
    </div>
  );
}

export default App;
