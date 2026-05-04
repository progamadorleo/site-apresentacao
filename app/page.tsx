import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Featured } from '@/components/featured'
import { GitHubProjects } from '@/components/github-projects'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Featured />
      <GitHubProjects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
