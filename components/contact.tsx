import { Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-mono text-sm">04. E agora?</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Vamos Trabalhar Juntos?</h2>
        <p className="text-muted-foreground leading-relaxed mb-12">
          Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou precisa de um
          desenvolvedor frontend dedicado, entre em contato!
        </p>

        <Link
          href="mailto:leosnts17@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors duration-300"
        >
          <Send className="w-4 h-4" />
          Enviar Mensagem
        </Link>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>leosnts17@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Goiânia - GO | Brasil</span>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm font-mono">
          Desenvolvido por Leonardo da Silva Santos © {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  )
}
