import styles from './Projects.module.css'
import { useGitHubRepos } from '../hooks/useGitHubRepos'

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
  default:    '#c8a0b8',
}

function getLangColor(lang) {
  return LANG_COLORS[lang] ?? LANG_COLORS.default
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

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos()

  return (
    <section id="projects">
      <div className="section-wrapper">
        <div>
          <p className="section-label">03 — projeler</p>
          <p className={styles.sub}>
            GitHub'daki en güncel projelerim.<br />
            Daha fazlası için github.com/kucukrumeysa ·
          </p>

          <div className={styles.grid}>
            {loading && Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}

            {!loading && error && (
              <p className={styles.error}>
                GitHub API'den repolar yüklenemedi. Tüm projeler için:{' '}
                <a href="https://github.com/kucukrumeysa" target="_blank" rel="noreferrer">
                  github.com/kucukrumeysa
                </a>
              </p>
            )}

            {!loading && !error && repos.map(repo => (
              <a
                key={repo.id}
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
                    ? repo.description.slice(0, 95) + (repo.description.length > 95 ? '…' : '')
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
