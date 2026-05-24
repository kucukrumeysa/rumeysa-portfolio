import { useEffect, useRef } from 'react'

export default function StarCanvas({ night }) {
  const canvasRef = useRef(null)
  const starsRef = useRef([])
  const rafRef = useRef(null)

  function initStars(canvas) {
    canvas.width = window.innerWidth
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight * 5)
    const count = window.innerWidth < 640 ? 80 : 220
    starsRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      o: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
    }))
  }

  function draw(canvas, ctx, nightMode) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    starsRef.current.forEach(s => {
      s.o += s.speed * 0.018
      if (s.o > 0.85 || s.o < 0.05) s.speed *= -1
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = nightMode
        ? `rgba(255,200,220,${s.o})`
        : `rgba(220,130,170,${s.o * 0.4})`
      ctx.fill()
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    initStars(canvas)

    function animate() {
      draw(canvas, ctx, document.body.classList.contains('night'))
      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => { initStars(canvas) }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: night ? 0.9 : 0.5,
        transition: 'opacity 0.6s ease',
      }}
    />
  )
}
