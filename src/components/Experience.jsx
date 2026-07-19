import { useReveal } from '../hooks/useReveal'
import styles from './Experience.module.css'

const certs = [
  { text: 'Yapay Zeka ile Web Geliştirme (60s)', issuer: 'BTK Akademi' },
  { text: 'Kali Linux & Siber Güvenlik',          issuer: 'BTK Akademi' },
  { text: 'HTML5 ile Web Geliştirme',             issuer: 'BTK Akademi' },
  { text: 'REACT ile Web Programcılığı',          issuer: 'BTK Akademi' },
  { text: 'Aselsan Gelecek Hayalim',              issuer: 'ASELSAN · Savunma Sanayii Akademi' },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience">
      <div className="section-wrapper">
        <div className="reveal" ref={ref}>
          <p className="section-label">04 — deneyim</p>
          <h2 className="section-title">Nerede katkı sağladım</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className={styles.block}>
              <div className={styles.role}>Yazılım Stajyeri</div>
              <div className={styles.org}>Ziraat Bankası</div>
              <div className={styles.date}>6 Temmuz — 10 Ağustos 2026 (1 Ay)</div>
              <div className={styles.desc}>
                Bankacılık sektöründe kullanılan yazılımların süreçlerini ve veri akışlarını gözlemleyerek, gerçek bir kurumsal sistemin nasıl işlediğine dair pratik bilgi edindim.
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.role}>Web Takımı Üyesi</div>
              <div className={styles.org}>1.5 Adana Formula Student Kulübü</div>
              <div className={styles.date}>Mart 2026 — Günümüz · Aktif</div>
              <div className={styles.desc}>
                Formula Student mühendislik kulübü bünyesindeki web geliştirme takımının aktif
                üyesiyim. React ve Vite ile geliştirilen ve müşteriye teslim edilen Şef Kebap
                restoran web sitesi dahil gerçek projelerde çalıştım.
              </div>
            </div>
          </div>

          <div className={styles.certsGrid}>
            {certs.map(c => (
              <div key={c.text} className={styles.certItem}>
                <div className={styles.certDot} />
                <div>
                  <div className={styles.certText}>{c.text}</div>
                  <div className={styles.certIssuer}>{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
