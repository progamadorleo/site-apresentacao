'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'motion/react'
import {
  IconBrandGithub,
  IconExternalLink,
  IconPlayerPlay,
  IconX,
  IconStar,
  IconChevronLeft,
  IconChevronRight,
  IconPhoto,
} from '@tabler/icons-react'

type FeaturedProject = {
  title: string
  description: string
  longDescription: string
  tags: string[]
  github?: string
  live?: string
  video?: string
  images?: string[]
  cover?: number
  badge?: string
}

const featured: FeaturedProject[] = [
  {
    title: 'No Prazo: App Financeiro',
    description: 'Controle financeiro pessoal para Android e iOS.',
    longDescription:
      'Aplicativo financeiro desenvolvido do zero e publicado nas lojas, com foco em gestão de gastos, metas e notificações inteligentes. Conta com +5.000 downloads e base ativa de usuários, incluindo assinaturas recorrentes.',
    tags: ['React-Native', 'API REST', 'Kotlin'],
    badge: 'Mobile',
    images: [
      '/images/noprazo/logo-noprazo.png',
      '/images/noprazo/noprazo1.jpeg',
      '/images/noprazo/noprazo2.jpeg',
      '/images/noprazo/noprazo3.jpeg',
      '/images/noprazo/noprazo4.jpeg'
    ],

  },
{
  title: 'Lembrei: Tarefas & Lembretes',
  description: 'App mobile para organização de tarefas e lembretes do dia a dia.',
  longDescription:
    'Aplicativo de tarefas e lembretes desenvolvido com foco em produtividade e experiência do usuário. Permite gerenciamento de rotinas, criação de lembretes e organização prática do dia a dia.',
  tags: ['Flutter', 'Dart', 'API REST'],
  badge: 'Mobile',
  images: [
    '/images/Lembrei/lembrei-capa.png',
    '/images/Lembrei/lembrei1.jpeg',
    '/images/Lembrei/lembrei2.jpeg',
    '/images/Lembrei/lembrei3.jpeg',
    '/images/Lembrei/lembrei4.jpeg',
    '/images/Lembrei/lembrei5.jpeg',
    '/images/Lembrei/lembrei6.jpeg',  
    '/images/Lembrei/lembrei7.jpeg',
    '/images/Lembrei/lembrei8.jpeg',
    '/images/Lembrei/lembrei9.jpeg',
    '/images/Lembrei/lembrei10.jpeg',
  ],
  video: '/videos/lembrei/lembrei.mp4',
},
{
  title: 'Gerador de OS',
  description: 'App para geração de ordens de serviço, vendas e orçamentos.',
  longDescription:
    'Sistema para geração de ordens de serviço, vendas e orçamentos, com exportação em PDF moderno e personalizável. Desenvolvido com fluxo completo de criação de documentos, focado em produtividade, organização e uso real por empresas.',
  tags: ['React Native', 'Node.js', 'PDF'],
  badge: 'Mobile',
  images: [
    '/images/OS/OS-Capa.png',
    '/images/OS/gerarOS.jpeg',
    '/images/OS/gerarOS2.jpeg',
    '/images/OS/gerarOS3.jpeg',
    '/images/OS/gerarOS4.jpeg',
    '/images/OS/gerarOS5.jpeg',
    '/images/OS/gerarOS6.jpeg',
    '/images/OS/gerarOS7.jpeg',
    '/images/OS/gerarOS8.jpeg',
    '/images/OS/gerarOS9.jpeg',
  ],

},
]

type ModalState =
  | { type: 'video'; src: string }
  | { type: 'images'; list: string[]; index: number }
  | null

function MediaModal({ state, onClose, onNav }: {
  state: ModalState
  onClose: () => void
  onNav?: (dir: 1 | -1) => void
}) {
  if (!state) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.93, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.93, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-border bg-black shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center text-foreground transition-colors"
            aria-label="Fechar"
          >
            <IconX size={16} />
          </button>

          {state.type === 'video' && (
            <video src={state.src} controls autoPlay className="w-full aspect-video" />
          )}

          {state.type === 'images' && (
            <div className="relative">
              <div className="relative w-full aspect-video bg-black">
                <Image
                  src={state.list[state.index]}
                  alt={`Foto ${state.index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              {state.list.length > 1 && (
                <>
                  <button
                    onClick={() => onNav?.(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                    aria-label="Foto anterior"
                  >
                    <IconChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => onNav?.(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                    aria-label="Próxima foto"
                  >
                    <IconChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {state.list.map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === state.index ? 'bg-primary' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function Featured() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [modal, setModal] = useState<ModalState>(null)

  function openImages(images: string[]) {
    setModal({ type: 'images', list: images, index: 0 })
  }

  function openVideo(src: string) {
    setModal({ type: 'video', src })
  }

  function navImage(dir: 1 | -1) {
    if (!modal || modal.type !== 'images') return
    const next = (modal.index + dir + modal.list.length) % modal.list.length
    setModal({ ...modal, index: next })
  }

  return (
    <section id="featured" className="relative py-24 bg-secondary/20">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">{'// destaque'}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Projetos em destaque
          </h2>
          <p className="text-muted-foreground mt-3 text-base max-w-xl">
            Uma seleção dos trabalhos que mais me orgulho — projetos reais, do início ao fim.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {featured.map((project, i) => {
            const hasMedia = !!(project.images?.length || project.video)
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative grid md:grid-cols-2 gap-0 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
              >
                <div className="relative min-h-56 md:min-h-72 bg-secondary/60 overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-border">

                  {project.images?.length ? (
                    <>
                      <Image
                        src={project.images[project.cover ?? 0] ?? project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-background/30" />
                    </>
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                          backgroundSize: '32px 32px',
                        }}
                      />
                      <p className="font-bold text-2xl md:text-3xl text-foreground/10 select-none text-center px-6 text-balance group-hover:text-foreground/20 transition-colors duration-500">
                        {project.title}
                      </p>
                    </>
                  )}

                  <span className="absolute top-4 left-5 font-mono text-xs text-white/60 drop-shadow">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {project.badge && (
                    <span className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 backdrop-blur-sm">
                      <IconStar size={10} />
                      {project.badge}
                    </span>
                  )}

                  {project.images && project.images.length > 1 && (
                    <span className="absolute bottom-4 left-4 flex items-center gap-1 text-xs font-mono text-white/70 bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                      <IconPhoto size={12} />
                      {project.images.length} fotos
                    </span>
                  )}

                  {hasMedia && (
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {project.images?.length && (
                        <button
                          onClick={() => openImages(project.images!)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/90 text-background text-xs font-semibold shadow-lg hover:bg-foreground transition-colors"
                          aria-label="Ver fotos"
                        >
                          <IconPhoto size={14} />
                          Ver fotos
                        </button>
                      )}
                      {project.video && (
                        <button
                          onClick={() => openVideo(project.video!)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 text-background text-xs font-semibold shadow-lg hover:bg-primary transition-colors"
                          aria-label="Ver demo"
                        >
                          <IconPlayerPlay size={14} />
                          Ver demo
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center p-7 md:p-10 gap-5">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-1 flex-wrap">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <IconBrandGithub size={16} />
                        Código
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <IconExternalLink size={16} />
                        Acessar
                      </a>
                    )}
                    {project.images?.length && (
                      <button
                        onClick={() => openImages(project.images!)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <IconPhoto size={16} />
                        Fotos {project.images.length > 1 && `(${project.images.length})`}
                      </button>
                    )}
                    {project.video && (
                      <button
                        onClick={() => openVideo(project.video!)}
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <IconPlayerPlay size={16} />
                        Ver demo
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <MediaModal state={modal} onClose={() => setModal(null)} onNav={navImage} />
    </section>
  )
}
