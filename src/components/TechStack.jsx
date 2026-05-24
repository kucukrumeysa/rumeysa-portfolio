import styles from './TechStack.module.css'

const groups = [
  {
    label: 'Frontend',
    variant: 'a',
    chips: ['React', 'Vite', 'HTML5', 'CSS3', 'REST API Entegrasyonu'],
  },
  {
    label: 'Backend & Veri',
    variant: 'b',
    chips: ['.NET / C#', 'Django', 'Python', 'Kotlin', 'Spring Boot', 'SQL', 'Java'],
  },
  {
    label: 'Araçlar & İlgi',
    variant: 'c',
    chips: ['Git', 'Gemini API', 'SPSS', 'Kali Linux', 'Pygame', 'OpenGL'],
  },
  {
    label: 'Öğreniliyor',
    variant: 'd',
    chips: ['R', 'Verilog'],
  },
]

export default function TechStack() {
  return (
    <section id="stack">
      <div className="section-wrapper">
        <div>
          <p className="section-label">02 — teknoloji</p>
          <h2 className="section-title">Ne kullandığım</h2>
          <div className={styles.grid}>
            {groups.map(g => (
              <div key={g.label} className={styles.group}>
                <div className={styles.groupLabel}>{g.label}</div>
                <div className={styles.chips}>
                  {g.chips.map(c => (
                    <span key={c} className={`${styles.chip} ${styles[`chip_${g.variant}`]}`}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
