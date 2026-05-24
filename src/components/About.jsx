import styles from './About.module.css'

const stats = [
  { num: '10+', label: 'Teslim edilen proje' },
  { num: '3',   label: 'Full stack uygulama (.NET × 2, Django × 1)' },
  { num: 'AI',  label: 'Gemini API entegrasyonu' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <div>
          <p className="section-label">01 — hakkımda</p>
          <h2 className="section-title">Kim olduğum</h2>
          <div className={styles.grid}>
            <div className={styles.text}>
              <p>Çukurova Üniversitesi'nde Bilgisayar Bilimleri öğrencisiyim. React & Vite ile gerçek müşterilere teslim ettiğim projeler dahil birden fazla full stack uygulama geliştirdim; state yönetimi, hook mimarisi ve harici API entegrasyonlarında kendimi kanıtladım.</p>
              <p>En güncel projem <strong>CyberShield</strong> — Django tabanlı, kullanıcı kimlik doğrulaması, olay yönetim paneli ve <strong>Google Gemini AI</strong> entegrasyonuyla siber güvenlik olaylarını otomatik analiz eden full stack bir platform. .NET ile de iki bağımsız web projesi teslim ettim.</p>
              <p>1.5 Adana Formula Student kulübünde yazılım birimi bünyesinde web ekibi kaptanıyım. Siber güvenliği CTF yarışmalarıyla aktif olarak takip ediyor, veri analizini SPSS & R ile derinleştiriyorum.</p>
            </div>
            <div className={styles.stats}>
              {stats.map(s => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
