import { useState, useEffect } from 'react'

const USERNAME = 'kucukrumeysa'

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        // sort=pushed → en son push yapılan en başta gelir
        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=pushed&direction=desc&per_page=30&type=public`
        )
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        const data = await res.json()
        const filtered = data
          .filter(r => !r.fork && r.name !== USERNAME)
          .slice(0, 8)
        setRepos(filtered)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  return { repos, loading, error }
}
