import React from "react";

function MainContent() {
  const mainContentStyle = {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    textAlign: "center",
    color: "#333",
  };

  return (
    <main style={mainContentStyle}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
