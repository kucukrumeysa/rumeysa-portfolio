import { useState, useEffect } from 'react'

export function useTheme() {
  const [night, setNight] = useState(false)

  useEffect(() => {
    if (night) {
      document.body.classList.add('night')
    } else {
      document.body.classList.remove('night')
    }
  }, [night])

  return { night, toggleTheme: () => setNight(n => !n) }
}
