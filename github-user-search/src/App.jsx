jsx
import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import { searchUsers } from './services/github'


export default function App() {
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


const handleSearch = async (query) => {
setError(null)
setLoading(true)
try {
const data = await searchUsers(query, { per_page: 12 })
setUsers(data.items || [])
} catch (err) {
setError(err.message || 'Request failed')
} finally {
setLoading(false)
}
}


return (
<div className="app">
<h1>GitHub User Search</h1>
<SearchBar onSearch={handleSearch} />
{loading && <p>Loading…</p>}
{error && <p style={{color:'red'}}>{error}</p>}
<div className="user-grid">
{users.map((u) => (
<UserCard key={u.id} user={u} />
))}
</div>
</div>
)
}