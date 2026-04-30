import { About } from '@/components/About'
import { CaseStudies } from '@/components/CaseStudies'
import { Contact } from '@/components/Contact'
import { FeaturedPillars } from '@/components/FeaturedPillars'
import { Hero } from '@/components/Hero'
import { Metrics } from '@/components/Metrics'
import { Navbar } from '@/components/Navbar'
import { ProjectShowcase } from '@/components/ProjectShowcase'
import { Skills } from '@/components/Skills'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Metrics />
      <FeaturedPillars />
      <CaseStudies />
      <ProjectShowcase />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}
