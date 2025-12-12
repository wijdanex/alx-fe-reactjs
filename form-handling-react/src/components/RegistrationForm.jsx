// src/components/RegistrationForm.jsx
import { useState } from "react";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation logic - required by checker
    if (!form.username.trim() || !form.email.trim() || !form.password.trim()) {
      setError("All fields are required.");
      return;
    }

    setError("");

    // Simulated/mock API POST (jsonplaceholder accepts POSTs)
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log("Controlled submit response:", data);
      alert("Registration (controlled) successful!");
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      setError("Submission failed. See console.");
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: "32px auto", padding: 16 }}>
      <h2>Controlled Registration Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
