import { useState } from 'react'
import styles from './Projects.module.css'

// ─── Proje verileri ───────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: 'Formula Student Customize Studio',
    description: '3D araç özelleştirme arayüzü, topluluk forumu ve teknik dokümantasyon modülü. JWT tabanlı kullanıcı kimlik doğrulama sistemi içeriyor.',
    tags: ['React', 'Node.js', 'JWT'],
    type: 'Takım Projesi',
    team: '1.5 Adana Formula Student',
    github: 'https://github.com/kucukrumeysa',
    live: null,
    featured: true,
  },
  {
    id: 2,
    name: 'CyberShield',
    description: 'Siber güvenlik olaylarını kategorize eden ve Gemini 2.5 Flash API ile yapay zeka destekli analiz sunan full stack web uygulaması. Kural tabanlı fallback mekanizması içeriyor.',
    tags: ['React', '.NET', 'Gemini API', 'C#'],
    type: 'Kişisel Proje',
    team: null,
    github: 'https://github.com/kucukrumeysa',
    live: null,
    featured: true,
  },
  {
    id: 3,
    name: 'University Management System',
    description: 'Öğrenci kayıtları, ders yönetimi ve kullanıcı yönetimini kapsayan full stack sistem. JWT kimlik doğrulama ve rol tabanlı erişim kontrolü (RBAC) uygulandı.',
    tags: ['React', '.NET 10', 'C#', 'JWT'],
    type: 'Kişisel Proje',
    team: null,
    github: 'https://github.com/kucukrumeysa/UniversityManagementSystem',
    live: null,
    featured: true,
  },
  {
    id: 4,
    name: 'E-Ticaret Sitesi (.NET)',
    description: 'Gemini API ile akıllı ürün öneri sistemi, kullanıcı yönetimi ve sipariş akışı içeren .NET tabanlı alışveriş uygulaması. 3 kişilik ekip projesi.',
    tags: ['.NET', 'Gemini API', 'C#', 'Git'],
    type: 'Takım Projesi',
    team: 'BTK Akademi Atölyesi',
    github: 'https://github.com/kucukrumeysa',
    live: null,
    featured: false,
  },
  {
    id: 5,
    name: 'BirBuçuk FS — Resmi Takım Sitesi',
    description: 'Anasayfa, araçlar, sponsorlar, sürdürülebilirlik ve iletişim sayfalarından oluşan resmi Formula Student takım web sitesi.',
    tags: ['React', 'Vite'],
    type: 'Takım Projesi',
    team: '1.5 Adana Formula Student',
    github: 'https://github.com/kucukrumeysa',
    live: 'https://birbucukadanaformula.com',
    featured: false,
  },
  {
    id: 6,
    name: 'Şef Kebap — Restoran Web Sitesi',
    description: 'Müşteriye teslim edilen restoran web sitesi. React ve Vite kullanılarak geliştirildi, domain alımı aşamasında.',
    tags: ['React', 'Vite'],
    type: 'Müşteri Projesi',
    team: '1.5 Adana Formula Student Web Takımı',
    github: 'https://github.com/birbucukformula-Web/sef_kebab',
    live: null,
    featured: false,
  },
  {
    id: 7,
    name: 'Film Arama Uygulaması',
    description: 'TMDB API ile canlı film arama, popüler filmler listesi ve favorilere ekleme özellikli dinamik React uygulaması.',
    tags: ['React', 'TMDB API', 'JavaScript'],
    type: 'Kişisel Proje',
    team: null,
    github: 'https://github.com/kucukrumeysa/movies',
    live: null,
    featured: false,
  },
  {
    id: 8,
    name: 'Kitap Yönetim Uygulaması',
    description: 'Kotlin ve Spring Boot kullanılarak geliştirilen, veritabanı yönetimli REST API backend projesi.',
    tags: ['Kotlin', 'Spring Boot', 'REST API'],
    type: 'Kişisel Proje',
    team: null,
    github: 'https://github.com/kucukrumeysa',
    live: null,
    featured: false,
  },
]

const TAG_COLORS = {
  'React':       '#6baed6',
  'JavaScript':  '#f1c27d',
  'TypeScript':  '#6baed6',
  'Python':      '#c49abe',
  'Kotlin':      '#c084fc',
  '.NET':        '#7fada0',
  '.NET 10':     '#7fada0',
  'C#':          '#7fada0',
  'JWT':         '#a0b4e8',
  'Vite':        '#e8a0a0',
  'Node.js':     '#80c8a0',
  'Git':         '#e08080',
  'Gemini API':  '#f4a77a',
  'TMDB API':    '#c49abe',
  'REST API':    '#a0cfa0',
  'Spring Boot': '#80c8a0',
  'HTML':        '#e8a0a0',
  'CSS':         '#a0b4e8',
}

function getTagColor(tag) {
  return TAG_COLORS[tag] ?? '#c8a0b8'
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

const TYPE_BADGE = {
  'Takım Projesi':    { bg: 'rgba(107,173,214,0.15)', color: '#6baed6' },
  'Müşteri Projesi':  { bg: 'rgba(128,200,160,0.15)', color: '#80c8a0' },
  'Kişisel Proje':    { bg: 'rgba(196,154,190,0.15)', color: '#c49abe' },
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const featured = PROJECTS.filter(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)
  const visible = showAll ? PROJECTS : featured

  return (
    <section id="projects">
      <div className="section-wrapper">
        <div>
          <p className="section-label">03 — projeler</p>
          <p className={styles.sub}>
            Geliştirdiğim projelerden bir seçki.{' '}
            <a
              href="https://github.com/kucukrumeysa"
              target="_blank"
              rel="noreferrer"
              className={styles.ghLink}
            >
              github.com/kucukrumeysa ↗
            </a>
          </p>

          <div className={styles.grid}>
            {visible.map((project, i) => (
              <div
                key={project.id}
                className={styles.card}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Tip badge */}
                <div className={styles.cardTop}>
                  <span
                    className={styles.typeBadge}
                    style={{
                      background: TYPE_BADGE[project.type]?.bg,
                      color: TYPE_BADGE[project.type]?.color,
                    }}
                  >
                    {project.type}
                  </span>
                  <div className={styles.links}>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className={styles.iconLink} title="Canlı Site">
                        <ExternalIcon />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className={styles.iconLink} title="GitHub">
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>

                {/* İsim */}
                <h3 className={styles.name}>{project.name}</h3>

                {/* Takım */}
                {project.team && (
                  <p className={styles.team}>{project.team}</p>
                )}

                {/* Açıklama */}
                <p className={styles.desc}>{project.description}</p>

                {/* Etiketler */}
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={styles.tag}
                      style={{ borderColor: getTagColor(tag), color: getTagColor(tag) }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Daha fazla / daha az */}
          {rest.length > 0 && (
            <button
              className={styles.toggleBtn}
              onClick={() => setShowAll(v => !v)}
            >
              {showAll
                ? `↑ Daha az göster`
                : `↓ Tüm projeleri gör (${rest.length} proje daha)`}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}