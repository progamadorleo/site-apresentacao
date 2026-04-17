export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Sobre Mim
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* 👇 Agora 2 colunas em vez de 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXTO */}
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Tenho contato com tecnologia desde os{" "}
              <span className="text-primary">9 anos de idade</span>, o que
              despertou em mim uma curiosidade natural pelo desenvolvimento de software. Aos{" "}
              <span className="text-primary">16 anos</span>, iniciei minha jornada na programação e desde então venho
              me dedicando a criar soluções que agregam valor real aos negócios.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Ao longo dos anos, minha trajetória evoluiu para projetos cada vez mais robustos: desenvolvimento de{" "}
              <span className="text-primary">sistemas ERP para empresas</span>,{" "}
              <span className="text-primary">aplicativos mobile</span> e diversas soluções web completas.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Hoje, como desenvolvedor fullstack, domino tanto o frontend com{" "}
              <span className="text-primary">React</span> e{" "}
              <span className="text-primary">TypeScript</span>, quanto o backend com{" "}
              <span className="text-primary">Node.js</span>.
            </p>
          </div>

          {/* IMAGEM */}
          <div className="relative group max-w-sm mx-auto md:mx-0">
            <div className="relative w-full aspect-[3/4] bg-card rounded-lg overflow-hidden border border-border">
              <img
                src="/leodev-picture.jpeg"
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
