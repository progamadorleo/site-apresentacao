export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sobre Mim</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Tenho contato com computadores desde os <span className="text-primary">9 anos de idade</span>, o que
              despertou em mim uma curiosidade natural pela tecnologia. Aos{" "}
              <span className="text-primary">16 anos</span>, me apaixonei pelo mundo da programação e comecei a
              desenvolver projetos simples, como{" "}
              <span className="text-primary">plugins para servidores de Minecraft</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A partir daí, minha jornada evoluiu para projetos mais complexos: construção de{" "}
              <span className="text-primary">ERPs para micro empresas</span>,{" "}
              <span className="text-primary">aplicativos mobile</span> e diversas soluções web completas. Toda essa
              experiência foi adquirida de forma autodidata e através de freelances.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje, como desenvolvedor fullstack, domino tanto o frontend com{" "}
              <span className="text-primary">React</span> e <span className="text-primary">TypeScript</span>, quanto o
              backend com <span className="text-primary">Node.js</span> e bancos de dados. Busco oportunidades para
              crescer profissionalmente e contribuir com projetos desafiadores.
            </p>
          </div>

          <div className="relative group">
            <div className="relative w-full aspect-square bg-card rounded-lg overflow-hidden border border-border">
              <img
                src="/leodev-picture.jpg"
                alt="Leonardo da Silva Santos"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
