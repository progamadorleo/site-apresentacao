import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Aplicativo de Vendas",
      description:
        "Aplicativo mobile para registro de vendas com suporte offline. Funciona tanto conectado quanto desconectado da internet, sincronizando os dados automaticamente quando a conexão é restabelecida.",
      tech: ["Expo", "React", "API Rest", "TypeScript"],
      github: "https://github.com/progamadorleo/Aplicativo-de-Vendas",
      demo: "#",
    },
    {
      title: "Site de Apresentação",
      description:
        "Este próprio site que você está visualizando! Um portfólio moderno e responsivo construído para apresentar meus projetos e habilidades como desenvolvedor.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Lucide React"],
      github: "https://github.com/progamadorleo/site-apresentacao",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projetos</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span className="text-primary font-mono text-sm">Projeto {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted rounded text-xs font-mono text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Ver código do ${project.title} no GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Ver demo do ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/progamadorleo"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors duration-300 font-mono text-sm"
          >
            <Github className="w-4 h-4" />
            Ver mais no GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
