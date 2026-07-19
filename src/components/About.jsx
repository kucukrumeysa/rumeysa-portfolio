import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const stats = [
  { num: '8+', label: 'Teslim edilen proje' },
  { num: '5',  label: 'BTK & sektör sertifikası' },
  { num: 'B1', label: 'İngilizce seviyesi' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about">
      <div className="section-wrapper">
        <div className="reveal" ref={ref}>
          <p className="section-label">01 — hakkımda</p>
          <h2 className="section-title">Kim olduğum</h2>
          <div className={styles.grid}>
            <div className={styles.text}>
              <p>Çukurova Üniversitesi'nde ikinci yıl Bilgisayar Bilimleri öğrencisiyim. Web geliştirmeye derin bir ilgim var; backend'de .NET, frontend'de React kullanıyorum.</p>
              <p>1.5 Adana Formula Student kulübünde web takımı üyesi olarak gerçek müşteri projeleri üretiyorum. Siber güvenliği CTF yarışmalarıyla ve istatistiksel analizi SPSS & R ile öğrenmeye devam ediyorum.</p>
              <p>Tasarım ile mühendisliğin kesişim noktasında olmayı seviyorum — yalnızca çalışan değil, düşünülmüş hissettiren yazılımlar inşa etmek istiyorum.</p>
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
