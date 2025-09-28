"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Leaderships",
    skills: ["Team Building", "Strategic Planning", "Digital Transformation", "Project & Product Management", "Cost & Resource Mangement", "Mentorship"],
    color: "from-blue-500 to-cyan-1200",
  },
  {
    title: "Technical Expertises",
    skills: ["Cloud Architecture", "AI/ML", "Microservices", "DevOps", "CI/CD", "API Development", "Programming", "Database Management", "Cybersecurity", "Blockchain"],
    color: "from-purple-500 to-pink-1200",
  },
  {
    title: "Business Developments",
    skills: ["Product Strategy", "Market Analysis", "Pitching", "Stakeholder Management", "Product Innovation"],
    color: "from-emerald-500 to-teal-1200",
  },
  {
    title: "Soft Skills",
    skills: ["Cross-functional Communication", "Negotiation", "Adaptability", "Problem Solving", "EQ", "Resilience","Crative Thinking", "Time Management", "Priorization"],
    color: "from-orange-500 to-red-1200",
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("skills-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % skillCategories.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section id="skills-section" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <radialGradient id="skillsGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="rgb(147 51 234)" stopOpacity="0.05" />
            </radialGradient>
          </defs>

          {/* Animated neural network */}
          <g className="animate-neural-network">
            <circle cx="200" cy="150" r="4" fill="rgb(59 130 246)" fillOpacity="0.6" />
            <circle cx="400" cy="200" r="4" fill="rgb(147 51 234)" fillOpacity="0.6" />
            <circle cx="600" cy="180" r="4" fill="rgb(59 130 246)" fillOpacity="0.6" />
            <circle cx="800" cy="220" r="4" fill="rgb(147 51 234)" fillOpacity="0.6" />
            <circle cx="1000" cy="160" r="4" fill="rgb(59 130 246)" fillOpacity="0.6" />

            <line
              x1="200"
              y1="150"
              x2="400"
              y2="200"
              stroke="url(#skillsGradient)"
              strokeWidth="1"
              className="animate-pulse-line"
            />
            <line
              x1="400"
              y1="200"
              x2="600"
              y2="180"
              stroke="url(#skillsGradient)"
              strokeWidth="1"
              className="animate-pulse-line"
              style={{ animationDelay: "0.5s" }}
            />
            <line
              x1="600"
              y1="180"
              x2="800"
              y2="220"
              stroke="url(#skillsGradient)"
              strokeWidth="1"
              className="animate-pulse-line"
              style={{ animationDelay: "1s" }}
            />
            <line
              x1="800"
              y1="220"
              x2="1000"
              y2="160"
              stroke="url(#skillsGradient)"
              strokeWidth="1"
              className="animate-pulse-line"
              style={{ animationDelay: "1.5s" }}
            />
          </g>

          {/* Floating geometric shapes */}
          <polygon
            points="100,400 150,350 200,400 150,450"
            fill="rgb(59 130 246)"
            fillOpacity="0.1"
            className="animate-float-rotate"
          />
          <polygon
            points="1000,300 1050,250 1100,300 1050,350"
            fill="rgb(147 51 234)"
            fillOpacity="0.1"
            className="animate-float-rotate"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Skills &</span>
              <br />
              <span className="text-foreground">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive blend of technical mastery and strategic leadership, driving innovation across multiple
              domains of technology and business.
            </p>
          </div>

          {/* Interactive skill categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`glass-effect rounded-2xl p-8 border transition-all duration-500 cursor-pointer ${
                  activeCategory === index
                    ? "border-primary/50 bg-primary/5 scale-105"
                    : "border-primary/20 hover:border-primary/30"
                }`}
                onMouseEnter={() => setActiveCategory(index)}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-4 animate-pulse`} />
                  <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeCategory === index
                          ? "bg-gradient-to-r " + category.color + " text-white animate-skill-glow"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Animated progress indicators */}
          <div className="glass-effect rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-center mb-8">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Technical Leadership", percentage: 95 },
                { label: "Strategic Vision", percentage: 92 },
                { label: "Innovation Drive", percentage: 98 },
              ].map((competency, index) => (
                <div key={competency.label} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="rgb(59 130 246 / 0.2)" strokeWidth="8" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#skillsGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - competency.percentage / 100)}`}
                        className={`transition-all duration-2000 ${isVisible ? "animate-draw-circle" : ""}`}
                        style={{ animationDelay: `${index * 0.5}s` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold gradient-text">{competency.percentage}%</span>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-foreground">{competency.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
