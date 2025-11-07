import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const counterStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "250px",
    margin: "20px auto",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={counterStyle}>
      <p>Current Count: {count}</p>
      <button
        style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "white" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#f44336", color: "white" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#008CBA", color: "white" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
