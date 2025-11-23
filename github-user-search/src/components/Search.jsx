import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-row">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="search"
          style={{ padding: "8px", flex: "1" }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can&apos;t find the user</p>}

      {user && (
        <div className="user-card" role="region" aria-live="polite">
          <img className="avatar" src={user.avatar_url} alt={`${user.login} avatar`} />
          <h3>{user.name || user.login}</h3>
          <p>Public repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">Visit GitHub Profile</a>
        </div>
      )}
    </div>
  );
}
