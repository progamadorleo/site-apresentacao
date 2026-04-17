import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Trajectory } from "@/components/trajectory"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Trajectory />
      <Projects />
      <Contact />
    </main>
  )
}
