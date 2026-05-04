'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconPhone,
  IconArrowUpRight,
} from '@tabler/icons-react'

const contactLinks = [
  {
    icon: IconPhone,
    label: 'WhatsApp',
    value: '+55 62 99286-6099',
    href: 'https://wa.me/5562992866099',
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20 hover:bg-green-400/20 hover:border-green-400/40',
  },
  {
    icon: IconBrandGithub,
    label: 'GitHub',
    value: 'github.com/mobile-leo',
    href: 'https://github.com/mobile-leo',
    color: 'text-foreground',
    bg: 'bg-secondary border-border hover:border-primary/40 hover:bg-primary/10',
  },
  {
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
    value: 'in/mobile-leo',
    href: 'https://www.linkedin.com/in/mobile-leo/',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/40',
  },
  {
    icon: IconBrandInstagram,
    label: 'Instagram Projetos',
    value: '@Ls_dev',
    href: 'https://instagram.com/Ls_dev',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20 hover:bg-pink-400/20 hover:border-pink-400/40',
  },
  {
    icon: IconBrandInstagram,
    label: 'Instagram Pessoal',
    value: '@leo.5an',
    href: 'https://instagram.com/leo.5an',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20 hover:bg-purple-400/20 hover:border-purple-400/40',
  },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-10"
        style={{
          background: 'radial-gradient(ellipse 80% 100% at 50% 100%, var(--cyan) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Contato<span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-md">
            Me manda uma mensagem — respondo rápido.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">
              Vamos trabalhar juntos?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Estou disponível para projetos freelance, oportunidades de trabalho
              e colaborações.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid gap-3"
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${link.bg}`}
                >
                  <div className={`shrink-0 ${link.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{link.label}</p>
                    <p className="text-sm font-medium text-foreground truncate">{link.value}</p>
                  </div>
                  <IconArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
