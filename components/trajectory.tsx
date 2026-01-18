import { Globe, Briefcase, Smartphone, ExternalLink, Gamepad2 } from "lucide-react"
import Image from "next/image"

export function Trajectory() {
  const timeline = [
    {
      period: "2017 - 2019",
      title: "Início com Minecraft",
      description:
        "Meus primeiros passos profissionais foram desenvolvendo plugins para servidores de Minecraft utilizando Java. Durante 3 anos, trabalhei em diversos servidores e projetos menores, mas meu principal trabalho foi como desenvolvedor da Rede Mania, uma rede completa de servidores com mais de 3.000 jogadores mensais. Também desenvolvi sistemas personalizados para outros servidores da comunidade brasileira, criando plugins de minigames, economia, ranks e integrações com Discord.",
      icon: Gamepad2,
      technologies: ["Java", "Spigot API", "Maven", "MySQL"],
      featured: {
        type: "server",
        name: "Rede Mania",
        players: "3.000+",
        description: "Desenvolvedor principal da rede",
      },
    },
    {
      period: "2019 - 2021",
      title: "Transição para Web",
      description:
        "No final de 2019, iniciei minha trajetória no desenvolvimento web. Comecei com HTML, CSS e JavaScript vanilla, e rapidamente evolui para frameworks modernos como React e TypeScript.",
      icon: Globe,
      technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    },
    {
      period: "2021 - 2025",
      title: "Freelancer & Projetos Corporativos",
      description:
        "Desenvolvi dezenas de projetos como freelancer, incluindo landing pages de alta conversão, sites institucionais completos e ERPs robustos para empresas de médio porte. Trabalhei também com aplicações desktop utilizando Electron, criando sistemas offline-first para gestão empresarial. Entre os projetos destacam-se sites com sistema de pagamento automático integrado (Stripe/PagSeguro), painéis administrativos completos, sistemas de gerenciamento de estoque e criação de cupons promocionais.",
      icon: Briefcase,
      technologies: ["React", "Node.js", "PostgreSQL", "Next.js", "Stripe", "Electron"],
      clients: [
        {
          name: "Adelplast",
          logo: "adelplast-logo.png",
        },
        {
          name: "FN Reciclagem",
          logo: "fn-reciclagem-logo.png",
        },
        {
          name: "Ministério Vida",
          logo: "ministeriovida-logo.png",
          link: "https://igrejaministeriovida.com.br/",
          description: "Site completo com pagamentos",
        },
      ],
    },
    {
      period: "2025 - 2026",
      title: "Foco em Mobile",
      description:
        "Atualmente meu foco principal é o desenvolvimento mobile com React Native. Criei o aplicativo 'No Prazo', um app de lembretes de pagamentos com mais de 2.000 downloads na Play Store, sistema de assinaturas, API própria e painel administrativo completo.",
      icon: Smartphone,
      technologies: ["React Native", "Expo", "Node.js", "API REST"],
      featured: {
        type: "app",
        name: "No Prazo",
        downloads: "2.000+",
        hasLogo: true,
        link: "https://play.google.com/store/apps/details?id=com.noprazo",
      },
    },
  ]

  return (
    <section id="trajectory" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Trajetória</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.period} className="relative pl-16 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                {/* Icon - Support for custom image icon */}
                <div className="absolute left-0 md:left-1 -top-1 w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center overflow-hidden">
                  {item.icon && <item.icon className="w-5 h-5 text-primary" />}
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300">
                  <span className="text-primary font-mono text-sm">{item.period}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2">{item.title}</h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{item.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted rounded text-xs font-mono text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Featured server (Rede Mania) */}
                  {item.featured && item.featured.type === "server" && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-green-600 to-green-800 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="minecraft-logo.png"
                            alt="Minecraft"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{item.featured.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.featured.description}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                              {item.featured.players} jogadores/mês
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Clients with logos - Added logo support and links */}
                  {item.clients && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">Alguns clientes:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                        {item.clients.map((client) => (
                          <div
                            key={client.name}
                            className="bg-muted/50 border border-border rounded-lg p-3 hover:border-primary/50 transition-colors"
                          >
                            {client.link ? (
                              <a href={client.link} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="w-full h-12 flex items-center justify-center mb-2">
                                  <Image
                                    src={client.logo || "/placeholder.svg"}
                                    alt={client.name}
                                    width={80}
                                    height={48}
                                    className="max-h-12 w-auto object-contain"
                                  />
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                  <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                                    {client.name}
                                  </span>
                                  <ExternalLink className="w-3 h-3 text-primary" />
                                </div>
                                {client.description && (
                                  <p className="text-[10px] text-muted-foreground text-center mt-1">
                                    {client.description}
                                  </p>
                                )}
                              </a>
                            ) : (
                              <>
                                <div className="w-full h-12 flex items-center justify-center mb-2">
                                  <Image
                                    src={client.logo || "/placeholder.svg"}
                                    alt={client.name}
                                    width={80}
                                    height={48}
                                    className="max-h-12 w-auto object-contain"
                                  />
                                </div>
                                <p className="text-xs font-medium text-foreground text-center">{client.name}</p>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Featured app (No Prazo) */}
                  {item.featured && item.featured.type === "app" && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <a
                        href={item.featured.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src="no-prazo-logo.png"
                            alt="No Prazo App Logo"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.featured.name}
                            </h4>
                            <ExternalLink className="w-4 h-4 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">App de lembretes de pagamentos</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                              {item.featured.downloads} downloads
                            </span>
                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                              Play Store
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
