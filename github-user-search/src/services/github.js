js
import axios from 'axios'


const GITHUB_BASE = 'https://api.github.com'


const getAxiosInstance = () => {
const token = import.meta.env.VITE_APP_GITHUB_API_KEY
const headers = token ? { Authorization: `token ${token}` } : {}
return axios.create({ baseURL: GITHUB_BASE, headers })
}


export async function searchUsers(q, opts = {}) {
// q: query string (required)
// opts: { per_page, page }
const instance = getAxiosInstance()
const params = { q, per_page: opts.per_page || 10, page: opts.page || 1 }
const res = await instance.get('/search/users', { params })
return res.data
}


export async function getUser(username) {
const instance = getAxiosInstance()
const res = await instance.get(`/users/${username}`)
return res.data
}