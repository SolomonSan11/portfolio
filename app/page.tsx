import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="particle-system">
        <div className="particle animate-particle-float-1"></div>
        <div className="particle animate-particle-float-2"></div>
        <div className="particle animate-particle-float-3"></div>
        <div className="particle animate-particle-float-1 animate-delay-500"></div>
        <div className="particle animate-particle-float-2 animate-delay-1000"></div>
        <div className="particle animate-particle-float-3 animate-delay-1500"></div>
      </div>

      <div className="morphing-bg morphing-bg-1 animate-morphing-blob"></div>
      <div className="morphing-bg morphing-bg-2 animate-morphing-blob animate-delay-700"></div>
      <div className="morphing-bg morphing-bg-3 animate-morphing-blob animate-delay-1000"></div>

      <div className="fixed inset-0 tech-grid opacity-20 animate-background-wave"></div>

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}
