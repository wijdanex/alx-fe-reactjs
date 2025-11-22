import axios from "axios";

export const fetchUserData = async (username) => {
  if (!username) throw new Error("username required");
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = token ? { Authorization: `token ${token}` } : {};
  const res = await axios.get(`https://api.github.com/users/${username}`, { headers });
  return res.data;
};
