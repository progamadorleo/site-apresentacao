import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react'

const socials = [
  { icon: IconBrandGithub, href: 'https://github.com/mobile-leo', label: 'GitHub' },
  { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/mobile-leo/', label: 'LinkedIn' },
  { icon: IconBrandInstagram, href: 'https://instagram.com/Ls_dev', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">{'<'}</span>
          leo.dev
          <span className="text-primary">{' />'}</span>
          {' '}— construído com Next.js
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Leonardo Santos
        </p>
      </div>
    </footer>
  )
}
