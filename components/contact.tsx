"use client"

import { Check, Copy, Mail, MapPin, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyToClipboard = (text: string, type: "whatsapp" | "email") => {
    navigator.clipboard.writeText(text)
    if (type === "whatsapp") {
      setCopiedWhatsapp(true)
      setTimeout(() => setCopiedWhatsapp(false), 2000)
    } else {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-mono text-sm">04. E agora?</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Vamos Trabalhar Juntos?</h2>
        <p className="text-muted-foreground leading-relaxed mb-12">
          Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou precisa de um
          desenvolvedor, entre em contato!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="group relative flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300">
            <a
              href="https://wa.me/5562992866099"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:scale-110 transition-transform duration-300"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <div className="text-center">
              <span className="block font-semibold text-foreground">WhatsApp</span>
              <span className="text-xs text-muted-foreground">+55 62 99286-6099</span>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard("+5562992866099", "whatsapp")}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#25D366] transition-colors"
            >
              {copiedWhatsapp ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copiar
                </>
              )}
            </button>
          </div>
          
          <div className="group relative flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            <a
              href="mailto:leosnts17@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <div className="text-center">
              <span className="block font-semibold text-foreground">Email</span>
              <span className="text-xs text-muted-foreground">leosnts17@gmail.com</span>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard("leosnts17@gmail.com", "email")}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copiar
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Goiania - GO | Brasil</span>
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
