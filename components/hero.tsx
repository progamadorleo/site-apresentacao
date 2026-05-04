'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { IconArrowDown, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'

const socials = [
  { icon: IconBrandWhatsapp, href: 'https://wa.me/5562992866099', label: 'WhatsApp' },
  { icon: IconBrandGithub, href: 'https://github.com/mobile-leo', label: 'GitHub' },
  { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/mobile-leo/', label: 'LinkedIn' },
  { icon: IconBrandInstagram, href: 'https://instagram.com/Ls_dev', label: 'Instagram' },
]

const stack = ['Flutter', 'React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'Kotlin']

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -left-40 top-1/3 w-96 h-96 rounded-full opacity-[0.07]"
        style={{ background: 'var(--cyan)', filter: 'blur(120px)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden sm:block shrink-0"
          >
            <div
              className="absolute -inset-[3px] rounded-full"
              style={{ background: 'linear-gradient(135deg, var(--cyan), transparent 60%)' }}
            />
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-border">
              <Image
                src="/leodev-picture.jpg"
                alt="Foto de Leonardo Santos"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-balance">
            <span className="text-foreground">Leonardo</span>
            <br />
            <span className="glow-text" style={{ color: 'var(--cyan)' }}>
              Santos
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground"
        >
          Mobile Developer —{' '}
          <span className="text-primary">Flutter &amp; React Native</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-md border border-border bg-secondary text-muted-foreground tracking-wide"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="mt-6 flex flex-wrap gap-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-primary font-bold text-sm">+10.000</span>
            <span className="text-muted-foreground text-xs">downloads em apps publicados</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-muted-foreground text-xs">Experiência com aplicações em produção</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-foreground font-semibold text-sm transition-all hover:border-primary/50 hover:bg-primary/10 active:scale-95"
          >
            Entrar em contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex items-center gap-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg border border-border text-muted-foreground transition-all hover:text-primary hover:border-primary/50 hover:bg-primary/10"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase opacity-40">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <IconArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
