import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <nav>
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/blog/1">Blog Post 1</Link> |{" "}
      <Link to="/blog/2">Blog Post 2</Link>
    </nav>
  </div>
);

export default Home;
