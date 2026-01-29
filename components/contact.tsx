import { Mail, MapPin, MessageCircle } from "lucide-react"

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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5562992866099"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-md hover:bg-[#20bd5a] transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="mailto:leosnts17@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            Enviar Email
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-muted-foreground text-sm">
          <a 
            href="mailto:leosnts17@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>leosnts17@gmail.com</span>
          </a>
          <a 
            href="https://wa.me/5562992866099"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <span>+55 62 99286-6099</span>
          </a>
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
