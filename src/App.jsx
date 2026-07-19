import { useTheme } from './hooks/useTheme'
import StarCanvas    from './components/StarCanvas'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import TechStack     from './components/TechStack'
import Projects      from './components/Projects'
import Experience    from './components/Experience'
import Contact       from './components/Contact'

export default function App() {
  const { night, toggleTheme } = useTheme()

  return (
    <>
      <StarCanvas night={night} />
      <Navbar night={night} onToggle={toggleTheme} />

      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <TechStack />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Contact />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text3)',
        fontFamily: 'var(--mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.1em',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        zIndex: 1,
      }}>
        sevgiyle yapıldı · rumeysa küçük · 2025 ✦
      </footer>
    </>
  )
}
