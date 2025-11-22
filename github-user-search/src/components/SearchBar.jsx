jsx
import React, { useState } from 'react'


export default function SearchBar({ onSearch }) {
const [value, setValue] = useState('')


const submit = (e) => {
e.preventDefault()
if (!value.trim()) return
onSearch(value.trim())
}


return (
<form className="search-row" onSubmit={submit}>
<input
aria-label="search"
placeholder="Search GitHub users (e.g. john)"
value={value}
onChange={(e) => setValue(e.target.value)}
/>
<button type="submit">Search</button>
</form>
)
}