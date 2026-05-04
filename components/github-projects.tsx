import Link from 'next/link'
import {
  IconBrandGithub,
  IconDeviceMobile,
  IconWorld,
  IconStack2,
  IconStar,
  IconGitFork,
  IconCode,
} from '@tabler/icons-react'

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
}

type Category = 'mobile' | 'web' | 'fullstack' | 'outros'

const MOBILE_KEYWORDS = ['mobile', 'flutter', 'dart', 'android', 'ios', 'react-native', 'reactnative', 'kotlin']
const WEB_KEYWORDS = ['web', 'frontend', 'front-end', 'react', 'nextjs', 'next', 'html', 'css', 'vue', 'angular']
const FULLSTACK_KEYWORDS = ['fullstack', 'full-stack', 'full stack', 'backend', 'back-end', 'api', 'node', 'nodejs', 'express', 'typescript', 'postgres', 'postgresql']

function categorize(repo: Repo): Category {
  const haystack = [repo.name, repo.description ?? '', ...(repo.topics ?? [])].join(' ').toLowerCase()
  if (MOBILE_KEYWORDS.some((k) => haystack.includes(k))) return 'mobile'
  if (FULLSTACK_KEYWORDS.some((k) => haystack.includes(k))) return 'fullstack'
  if (WEB_KEYWORDS.some((k) => haystack.includes(k))) return 'web'
  return 'outros'
}

const categoryConfig: Record<Category, { label: string; color: string; icon: React.ReactNode }> = {
  mobile:    { label: 'Mobile',     color: 'text-cyan-400',          icon: <IconDeviceMobile size={13} /> },
  web:       { label: 'Web',        color: 'text-indigo-400',         icon: <IconWorld size={13} /> },
  fullstack: { label: 'Full Stack', color: 'text-emerald-400',        icon: <IconStack2 size={13} /> },
  outros:    { label: 'Outros',     color: 'text-muted-foreground',   icon: <IconCode size={13} /> },
}

function formatRepoName(name: string) {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      'https://api.github.com/users/mobile-leo/repos?sort=updated&per_page=30',
      { next: { revalidate: 3600 }, headers: { Accept: 'application/vnd.github+json' } }
    )
    if (!res.ok) return []
    const data: Repo[] = await res.json()
    return data.filter((r) => !r.name.includes('progamador') && r.description !== null)
  } catch {
    return []
  }
}

export async function GitHubProjects() {
  const repos = await getRepos()
  if (repos.length === 0) return null

  const categorized = repos.reduce<Record<Category, Repo[]>>(
    (acc, repo) => { acc[categorize(repo)].push(repo); return acc },
    { mobile: [], web: [], fullstack: [], outros: [] }
  )

  const order: Category[] = ['mobile', 'fullstack', 'web', 'outros']
  const nonEmpty = order.filter((c) => categorized[c].length > 0)

  return (
    <section id="projects" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">
              Atualizado automaticamente via GitHub API
            </p>
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <IconBrandGithub size={22} className="text-primary" />
              Repositórios Públicos
            </h3>
          </div>
          <a
            href="https://github.com/mobile-leo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors border border-border px-3 py-1.5 rounded-lg hover:border-primary/40"
          >
            <IconBrandGithub size={13} />
            ver perfil completo
          </a>
        </div>

        <div className="space-y-10">
          {nonEmpty.map((cat) => {
            const config = categoryConfig[cat]
            const list = categorized[cat]
            return (
              <div key={cat}>
                <div className={`flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest ${config.color}`}>
                  {config.icon}
                  {config.label}
                  <span className="text-muted-foreground normal-case tracking-normal font-normal">
                    ({list.length})
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {list.map((repo) => (
                    <Link
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                          {formatRepoName(repo.name)}
                        </h4>
                        <IconBrandGithub size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                      </div>
                      {repo.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {repo.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
                        {repo.language && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-primary/60" />
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <IconStar size={11} />
                            {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <IconGitFork size={11} />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
