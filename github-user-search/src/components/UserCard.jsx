jsx
import React from 'react'


export default function UserCard({ user }) {
return (
<div className="card">
<img className="avatar" src={user.avatar_url} alt={`${user.login} avatar`} />
<h3>{user.login}</h3>
<p>Score: {user.score ? user.score.toFixed(2) : '—'}</p>
<a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
</div>
)
}