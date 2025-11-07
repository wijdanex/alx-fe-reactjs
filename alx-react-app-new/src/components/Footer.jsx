import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
