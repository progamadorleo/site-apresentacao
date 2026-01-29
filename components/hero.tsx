import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4 tracking-wider">Olá, meu nome é</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">Leonardo da Silva Santos</h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8">
          Desenvolvedor Fullstack
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Construo aplicações web completas, do frontend ao backend. Especializado em criar soluções modernas,
          escaláveis e com foco em performance e experiência do usuário.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/progamadorleo"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/progamadorleo/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:leosnts20@email.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
