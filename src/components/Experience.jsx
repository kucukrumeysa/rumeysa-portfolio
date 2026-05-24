import styles from './Experience.module.css'

const certs = [
  { text: 'Yapay Zeka ile Web Geliştirme (60s)', issuer: 'BTK Akademi' },
  { text: 'Kali Linux & Siber Güvenlik',          issuer: 'BTK Akademi' },
  { text: 'HTML5 ile Web Geliştirme',             issuer: 'BTK Akademi' },
  { text: 'REACT ile Web Programcılığı',          issuer: 'BTK Akademi' },
  { text: 'Aselsan Gelecek Hayalim',              issuer: 'ASELSAN · Savunma Sanayii Akademi' },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrapper">
        <div>
          <p className="section-label">04 — deneyim</p>
          <h2 className="section-title">Nerede katkı sağladım</h2>

          <div className={styles.block}>
            <div className={styles.role}>Web Birim Kaptanı</div>
            <div className={styles.org}>1.5 Adana Formula Student Kulübü</div>
            <div className={styles.date}>2026 — Günümüz · Aktif</div>
            <div className={styles.desc}>
              Formula Student mühendislik kulübü bünyesindeki yazılım birimi bünyesinde web geliştirme ekibi kaptanıyım. React ve Vite ile geliştirilen ve müşteriye teslim edilen Şef Kebap
              restoran web sitesi dahil gerçek projelerde çalıştım.
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
