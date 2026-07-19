import { useMemo } from 'react'

const COLORS = ['#f9c6d8', '#f5aac8', '#fbd5e5', '#f0b0cc', '#fce8f0']

export default function FloatingPetals() {
  const petals = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => {
      const size = Math.random() * 18 + 8
      return {
        id: i,
        width: size,
        height: size * 0.7,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration: `${Math.random() * 20 + 15}s`,
        delay: `${Math.random() * 10}s`,
        rotate: `${Math.random() * 360}deg`,
      }
    }), []
  )

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <style>{`
        @keyframes floatPetal {
          0%   { opacity: 0; transform: var(--rot0) translateY(-20px); }
          10%  { opacity: 0.18; }
          90%  { opacity: 0.12; }
          100% { opacity: 0; transform: var(--rot1) translateY(110vh); }
        }
      `}</style>
      {petals.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
            background: p.color,
            borderRadius: '50% 0 50% 0',
            opacity: 0.18,
            '--rot0': `rotate(${p.rotate})`,
            '--rot1': `rotate(calc(${p.rotate} + 360deg))`,
            animation: `floatPetal ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  )
}
