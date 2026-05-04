'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IconCode, IconDeviceMobile, IconServer, IconBrandGit } from '@tabler/icons-react'

const highlights = [
  {
    icon: IconCode,
    title: 'Frontend Web',
    desc: 'Interfaces modernas com React e TypeScript, focadas em performance e experiência do usuário.',
  },
  {
    icon: IconDeviceMobile,
    title: 'Mobile',
    desc: 'Apps nativos e cross-platform com Flutter e React Native para iOS e Android.',
  },
  {
    icon: IconServer,
    title: 'Backend',
    desc: 'APIs robustas com Node.js, TypeScript e PostgreSQL. Arquitetura escalável.',
  },
  {
    icon: IconBrandGit,
    title: 'Versionamento',
    desc: 'Controle de versão com Git e GitHub, boas práticas de colaboração e CI/CD.',
  },
]

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute -left-40 top-1/2 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'var(--cyan)', filter: 'blur(100px)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Sobre mim<span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-md">
            De suporte técnico a apps publicados nas lojas — essa é a versão curta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-base">
              Sou desenvolvedor mobile com experiência desde 2018.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Atuei como suporte técnico e evoluí para desenvolvimento Android, o que me deu visão completa do software — do usuário ao código.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Nos últimos anos, trabalhei como freelancer e desenvolvedor mobile, sendo responsável por apps do zero até a publicação nas lojas. Sei lidar com cliente, prazo e entrego o que prometo.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Hoje foco em construir aplicações reais, performáticas e com boa experiência de uso. Trabalho bem em equipe — gosto de trocar ideia, revisar código e tomar decisões em conjunto. Sou direto e levo prazo a sério.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { value: '+10.000', label: 'downloads em apps publicados' },
                { value: 'Produção', label: 'experiência com apps ao vivo' },
                { value: 'Zero → Loja', label: 'desenvolvimento do início ao fim' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="p-4 rounded-xl border border-border bg-secondary flex flex-col gap-1"
                >
                  <span className="text-primary font-bold font-mono text-sm">{stat.value}</span>
                  <span className="text-muted-foreground text-xs leading-snug">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">Goiânia, Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">Aberto a oportunidades</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                <a
                  href="https://github.com/mobile-leo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  github.com/mobile-leo
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="mb-3 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
