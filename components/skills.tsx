'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const categories = [
  {
    label: 'Mobile',
    color: '#06b6d4',
    skills: [
      { name: 'Flutter', level: 5 },
      { name: 'Dart', level: 5 },
      { name: 'React Native', level: 4 },
      { name: 'Kotlin', level: 3 },
      { name: 'Android Nativo', level: 3 },
    ],
  },
  {
    label: 'Frontend',
    color: '#818cf8',
    skills: [
      { name: 'React', level: 4 },
      { name: 'Next.js', level: 4 },
      { name: 'TypeScript', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'HTML / CSS', level: 5 },
    ],
  },
  {
    label: 'Backend',
    color: '#34d399',
    skills: [
      { name: 'Node.js', level: 4 },
      { name: 'TypeScript', level: 4 },
      { name: 'PostgreSQL', level: 3 },
      { name: 'REST APIs', level: 5 },
      { name: 'Express', level: 3 },
    ],
  },
  {
    label: 'Ferramentas',
    color: '#fb923c',
    skills: [
      { name: 'Git', level: 5 },
      { name: 'GitHub', level: 5 },
      { name: 'VS Code', level: 5 },
      { name: 'Linux', level: 3 },
      { name: 'Firebase', level: 3 },
    ],
  },
]

const DOTS = 5

function DotLevel({
  level,
  color,
  delay,
  inView,
}: {
  level: number
  color: string
  delay: number
  inView: boolean
}) {
  return (
    <div className="flex items-center gap-[5px]">
      {Array.from({ length: DOTS }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block w-2.5 h-2.5 rounded-full"
          style={
            i < level
              ? { background: color, boxShadow: `0 0 6px ${color}80` }
              : { background: 'var(--border)', opacity: 0.4 }
          }
        />
      ))}
    </div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="relative py-24 bg-secondary/30 overflow-hidden">
      <div
        className="pointer-events-none absolute right-0 top-0 w-96 h-96 opacity-5 rounded-full"
        style={{ background: 'var(--cyan)', filter: 'blur(120px)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            O que eu uso<span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-sm">
            Ferramentas e linguagens do dia a dia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card/40"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-6">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                />
                <h3
                  className="text-xs font-mono tracking-widest uppercase font-semibold"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h3>
              </div>

              {/* Skill rows */}
              <div className="flex flex-col divide-y divide-border/50">
                {cat.skills.map((skill, si) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.15 + ci * 0.08 + si * 0.05 }}
                      className="text-sm text-foreground"
                    >
                      {skill.name}
                    </motion.span>
                    <DotLevel
                      level={skill.level}
                      color={cat.color}
                      delay={0.2 + ci * 0.08 + si * 0.05}
                      inView={inView}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
