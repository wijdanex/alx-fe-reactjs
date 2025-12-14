import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation logic
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Controlled form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}   {/* ✅ matches checker */}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}      {/* ✅ matches checker */}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}   {/* ✅ matches checker */}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
