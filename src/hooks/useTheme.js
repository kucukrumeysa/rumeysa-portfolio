import { useState, useEffect } from 'react'

export function useTheme() {
  const [night, setNight] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved !== null) {
      return saved === 'dark'
    }
    return true // Default to night mode
  })

  useEffect(() => {
    if (night) {
      document.body.classList.add('night')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('night')
      localStorage.setItem('theme', 'light')
    }
  }, [night])

  return { night, toggleTheme: () => setNight(n => !n) }
}
