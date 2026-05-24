import styles from './Navbar.module.css'

const links = [
  { href: '#about',      label: 'about' },
  { href: '#stack',      label: 'stack' },
  { href: '#projects',   label: 'projects' },
  { href: '#experience', label: 'exp' },
  { href: '#contact',    label: 'contact' },
]

export default function Navbar({ night, onToggle }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>rumeysa ✦</div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
        <li>
          <button className={styles.themeBtn} onClick={onToggle}>
            {night ? '☀ gündüz' : '☽ gece modu'}
          </button>
        </li>
      </ul>
    </nav>
  )
}
