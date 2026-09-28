import { useReveal } from '../hooks/useReveal'
import { useGitHubRepos } from '../hooks/useGitHubRepos'
import styles from './Projects.module.css'

const LANG_COLORS = {
  JavaScript: '#f1c27d',
  TypeScript: '#6baed6',
  Python:     '#c49abe',
  Kotlin:     '#c084fc',
  Java:       '#e08080',
  'C#':       '#7fada0',
  HTML:       '#e8a0a0',
  CSS:        '#a0b4e8',
  Vue:        '#80c8a0',
  React:      '#6baed6',
  Django:     '#092e20',
  default:    '#c8a0b8',
}

function getLangColor(lang) {
  return LANG_COLORS[lang] ?? LANG_COLORS.default
}

const FEATURED_PROJECTS = [
  {
    id: 'featured-1',
    name: 'Şef Kebap — QR Menü Sistemi',
    html_url: 'https://github.com/kucukrumeysa/sefkebap-qr',
    description: 'Müşteriye teslim edilen QR menü sistemi. Django kullanılarak geliştirildi, admin panelinden anlık menü ve görsel değişiklikleri yapılabiliyor.',
    language: 'Django',
    stargazers_count: 0
  },
  {
    id: 'featured-2',
    name: 'Şef Kebap — Restoran Web Sitesi',
    html_url: 'https://github.com/birbucukformula-Web/sef_kebab',
    description: 'Müşteriye teslim edilen restoran web sitesi. React ve Vite kullanılarak geliştirildi (Frontend).',
    language: 'React',
    stargazers_count: 0
  },
  {
    id: 'featured-3',
    name: '1.5 Adana Formula Student Web Sitesi',
    html_url: 'https://github.com/birbucukformula-Web/Deneme-bolgesi',
    description: 'Takımın resmi web sitesi. Taslak mimarisi tarafımca hazırlandı, React ve Vite ile ekip olarak görsel geliştirmeleri devam ediyor.',
    language: 'React',
    stargazers_count: 0
  },
  {
    id: 'featured-4',
    name: 'Cebeci İş Makineleri Web Sitesi',
    html_url: 'https://github.com/kucukrumeysa/cebeci-is-makineleri-web',
    description: 'İş makineleri sektörü için tasarlanmış, online katalog ve WhatsApp teklif entegrasyonu sunan kurumsal web sitesi.',
    language: 'TypeScript',
    stargazers_count: 0
  },
  {
    id: 'featured-5',
    name: 'TMDB Film Arama Uygulaması',
    html_url: 'https://github.com/kucukrumeysa/movies',
    description: 'React ve TMDB API kullanılarak geliştirilmiş, anlık veri çeken film arama ve favorilere ekleme uygulaması.',
    language: 'React',
    stargazers_count: 1
  },
  {
    id: 'featured-6',
    name: '32-Bit Parametrik ALU',
    html_url: 'https://github.com/kucukrumeysa/32-bit-parametric-alu',
    description: 'Verilog kullanılarak tasarlanmış, temel aritmetik ve mantıksal işlemleri gerçekleştirebilen 32-bit parametrik donanım (işlemci) modeli.',
    language: 'Verilog',
    stargazers_count: 1
  },
  {
    id: 'featured-7',
    name: 'Karar Ağacı ile Veri Sınıflandırma',
    html_url: 'https://github.com/kucukrumeysa/karar-agaci-siniflandirma',
    description: 'Veri setleri üzerinde Decision Tree (Karar Ağacı) makine öğrenimi algoritmaları uygulayarak geliştirilmiş sınıflandırma projesi.',
    language: 'Python',
    stargazers_count: 2
  },
  {
    id: 'featured-8',
    name: '3D Liman Sahnesi (OpenGL)',
    html_url: 'https://github.com/kucukrumeysa/Computer-Graphics-Port-Pier-3D-Scene',
    description: 'Python ve OpenGL ile geliştirilmiş, 3 boyutlu obje yükleme, ışıklandırma ve kaplama tekniklerinin uygulandığı liman simülasyonu.',
    language: 'Python',
    stargazers_count: 1
  }
]

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

function SkeletonCard() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skLine} style={{ width: '60%' }} />
      <div className={styles.skLine} style={{ width: '88%' }} />
      <div className={styles.skLine} style={{ width: '40%' }} />
    </div>
  )
}

function ProjectCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <div className={styles.cardHeader}>
        <div className={styles.repoName}>
          {repo.name.replace(/-/g, ' ')}
        </div>
        <span className={styles.extIcon}><ExternalIcon /></span>
      </div>

      <p className={styles.desc}>
        {repo.description
          ? repo.description.slice(0, 115) + (repo.description.length > 115 ? '…' : '')
          : <em>Açıklama yok</em>
        }
      </p>

      <div className={styles.cardFooter}>
        {repo.language && (
          <>
            <span
              className={styles.dot}
              style={{ background: getLangColor(repo.language) }}
            />
            <span className={styles.lang}>{repo.language}</span>
          </>
        )}
        {repo.stargazers_count > 0 && (
          <span className={styles.stars} style={{ marginLeft: 'auto' }}>
            <StarIcon /> {repo.stargazers_count}
          </span>
        )}
      </div>
    </a>
  )
}

export default function Projects() {
  const ref = useReveal()
  const { repos, loading, error } = useGitHubRepos()

  // Featured projelerde olanları GitHub listesinden çıkar (tekrarlanmasın)
  const filteredRepos = repos.filter(
    (r) => !FEATURED_PROJECTS.some((fp) => fp.html_url === r.html_url)
  )

  return (
    <section id="projects">
      <div className="section-wrapper">
        <div className="reveal" ref={ref}>
          <p className="section-label">03 — projeler</p>
          <h2 className="section-title">Öne Çıkanlar &amp; Tüm Repolar</h2>
          <p className={styles.sub}>
            Teslim edilen projeler ve github.com/kucukrumeysa
          </p>

          <div className={styles.grid}>
            {/* Önce elle eklenen (Featured) projeleri göster */}
            {FEATURED_PROJECTS.map(repo => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}

            {loading && Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={`skel-${i}`} />)}

            {!loading && error && (
              <p className={styles.error}>
                GitHub API'den diğer repolar yüklenemedi.{' '}
                <a href="https://github.com/kucukrumeysa" target="_blank" rel="noreferrer">
                  Profili gör
                </a>
              </p>
            )}

            {/* Sonra GitHub'dan gelenleri göster */}
            {!loading && !error && filteredRepos.map(repo => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

