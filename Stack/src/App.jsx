import React, { useState } from "react";

function App() {
  const [stack, setStack] = useState([]);
  const [element, setElement] = useState("");
  const [message, setMessage] = useState("");
  const maxSize = 10;

  const push = () => {
    if (stack.length < maxSize) {
      setStack((prevStack) => [...prevStack, element]);
      setMessage(`${element} is pushed into stack`);
      setElement("");
    } else {
      setMessage("Stack is full!");
    }
  };

  const pop = () => {
    if (stack.length > 0) {
      const poppedElement = stack[stack.length - 1];
      setStack((prevStack) => prevStack.slice(0, -1));
      setMessage(`Popped element: ${poppedElement}`);
    } else {
      setMessage("Stack is empty!");
    }
  };

  const peek = () => {
    if (stack.length > 0) {
      setMessage(`Top element: ${stack[stack.length - 1]}`);
    } else {
      setMessage("Stack is empty!");
    }
  };

  const isEmpty = () => {
    setMessage(stack.length === 0 ? "Stack is empty!" : "Stack is not empty!");
  };

  const isFull = () => {
    setMessage(stack.length === maxSize ? "Stack is full!" : "Stack is not full!");
  };

  return (
    <div
      style={{
        padding: "20px",
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightGray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30vw",
          height: "auto",
          border: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h1>Stack Implementation</h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={element}
            placeholder="Enter Element"
            onChange={(e) => setElement(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={push}
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
              Push
            </button>
            <button
              onClick={pop}
              style={{
                padding: "10px 20px",
                marginRight: "10px",
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Pop
            </button>
            <button
              onClick={peek}
              style={{
                padding: "10px 20px",
                marginRight: "10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Peek
            </button>
            <button
              onClick={isEmpty}
              style={{
                padding: "10px 20px",
                marginRight: "10px",
                backgroundColor: "purple",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              isEmpty
            </button>
            <button
              onClick={isFull}
              style={{
                padding: "10px 20px",
                marginRight: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              isFull
            </button>
          </div>
        </div>
        <div>
          <strong>{message}</strong>
          {stack.length > 0 && (
            <ul
              style={{
                width: "20rem",
                listStyleType: "none",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {stack
                .slice() 
                .reverse()
                .map((item, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      backgroundColor: "lightcyan",
                      width: "18rem",
                      borderRadius: "5px",
                    }}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
