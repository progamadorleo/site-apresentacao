'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Job = {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  tags: string[]
  current?: boolean
}

const jobs: Job[] = [
  {
    company: 'Codifica.Pro',
    role: 'Desenvolvedor Mobile',
    period: '2024 — 2025',
    location: 'Presencial',
    description: [
      'Responsável pelo desenvolvimento mobile do zero até a publicação nas lojas (Play Store e App Store).',
      'Atuei em todas as etapas: levantamento de requisitos, desenvolvimento, testes e deploy.',
      'Trabalhei em conjunto com equipe de design e backend para garantir a entrega do produto.',
    ],
    tags: ['Flutter', 'Dart', 'Play Store', 'App Store'],
  },
  {
    company: 'Freelancer / Autônomo',
    role: 'Desenvolvedor Full Stack',
    period: '2020 — 2024',
    location: 'Remoto',
    description: [
      'Prestação de serviços para diversas empresas e clientes como desenvolvedor autônomo.',
      'Desenvolvimento e venda de projetos próprios, do planejamento à entrega final.',
      'Experiência com todo o ciclo do produto: escopo, desenvolvimento, deploy e suporte.',
    ],
    tags: ['Flutter', 'React Native', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    company: 'MetaPrime Sistemas',
    role: 'Desenvolvedor Android',
    period: '2020 — 2021',
    location: 'Goiânia, GO',
    description: [
      'Migração do suporte técnico para o time de desenvolvimento, atuando com Android nativo.',
      'Participação no desenvolvimento e manutenção de aplicativos Android da empresa.',
      'Contato direto com usuários finais pelo histórico no suporte, facilitando entender as reais necessidades do produto.',
    ],
    tags: ['Android', 'Kotlin', 'Java'],
  },
  {
    company: 'MetaPrime Sistemas',
    role: 'Suporte Técnico',
    period: '2018 — 2020',
    location: 'Goiânia, GO',
    description: [
      'Primeiro emprego na área de tecnologia, responsável pelo atendimento e suporte a clientes.',
      'Resolução de problemas técnicos e acompanhamento de chamados.',
      'Onde tive o primeiro contato com programação e decidi seguir na área de desenvolvimento.',
    ],
    tags: ['Suporte', 'TI'],
  },
]

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-24 bg-secondary/30">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Onde estive<span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-md">
            Empresas, projetos e os anos que me fizeram o dev que sou hoje.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-xs text-muted-foreground tracking-widest mb-4 uppercase">Formação Acadêmica</p>
          <div className="flex items-center gap-5 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 max-w-lg">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold font-mono text-xs">ADS</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-primary text-xs font-mono mt-0.5">UNIALFA — Goiânia</p>
              <p className="text-muted-foreground text-xs mt-1">Cursando</p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-[calc(theme(spacing.36)+1px)] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="flex flex-col gap-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company + i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="md:grid md:grid-cols-[144px_auto_1fr] gap-6 group"
              >
                <div className="flex md:flex-col md:text-right gap-2 md:gap-0">
                  <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="font-mono text-xs text-primary mt-1 hidden md:inline">
                      atual
                    </span>
                  )}
                </div>

                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 z-10 transition-colors mt-0.5 ${
                      job.current
                        ? 'border-primary bg-primary shadow-sm shadow-primary/50'
                        : 'border-border bg-background group-hover:border-primary/60'
                    }`}
                  />
                </div>

                <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{job.role}</h3>
                      <p className="text-primary text-sm font-mono mt-0.5">{job.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 border border-border rounded">
                      {job.location}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {job.description.map((line, li) => (
                      <li key={li} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
