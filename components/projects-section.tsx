"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Revolutionary analytics platform that uses machine learning to provide real-time business insights. Serves over 1M+ users globally.",
      image: "/modern-analytics-dashboard.png",
      tags: ["AI/ML", "React", "Python", "AWS"],
      featured: true,
    },
    {
      title: "Enterprise Automation Suite",
      description: "Comprehensive automation solution that reduced operational costs by 40% for Fortune 500 clients.",
      image: "/business-automation-workflow.png",
      tags: ["Automation", "Node.js", "Docker", "Kubernetes"],
      featured: true,
    },
    {
      title: "Digital Transformation Framework",
      description: "Open-source framework helping companies transition to digital-first operations. 50K+ downloads.",
      image: "/digital-transformation-concept.jpg",
      tags: ["Open Source", "Framework", "TypeScript", "Cloud"],
      featured: false,
    },
    {
      title: "Sustainable Tech Initiative",
      description: "Led industry-wide initiative to reduce carbon footprint of tech operations by 30%.",
      image: "/green-technology-sustainability.jpg",
      tags: ["Sustainability", "Leadership", "Green Tech", "Strategy"],
      featured: false,
    },
    {
      title: "Blockchain Infrastructure Platform",
      description: "Built scalable blockchain infrastructure serving 500+ DeFi applications with 99.9% uptime.",
      image: "/blockchain-network-visualization.jpg",
      tags: ["Blockchain", "Web3", "Solidity", "Infrastructure"],
      featured: false,
    },
    {
      title: "Cybersecurity Command Center",
      description: "Real-time threat detection system protecting enterprise networks from advanced persistent threats.",
      image: "/cybersecurity-dashboard.jpg",
      tags: ["Security", "AI", "Real-time", "Enterprise"],
      featured: false,
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(147 51 234)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <g className="animate-network-pulse">
            <circle cx="200" cy="200" r="6" fill="rgb(59 130 246)" fillOpacity="0.8" />
            <circle cx="400" cy="150" r="6" fill="rgb(147 51 234)" fillOpacity="0.8" />
            <circle cx="600" cy="250" r="6" fill="rgb(59 130 246)" fillOpacity="0.8" />
            <circle cx="800" cy="180" r="6" fill="rgb(147 51 234)" fillOpacity="0.8" />

            <line
              x1="200"
              y1="200"
              x2="400"
              y2="150"
              stroke="url(#projectGradient)"
              strokeWidth="2"
              className="animate-connection-flow"
            />
            <line
              x1="400"
              y1="150"
              x2="600"
              y2="250"
              stroke="url(#projectGradient)"
              strokeWidth="2"
              className="animate-connection-flow-delayed"
            />
            <line
              x1="600"
              y1="250"
              x2="800"
              y2="180"
              stroke="url(#projectGradient)"
              strokeWidth="2"
              className="animate-connection-flow-reverse"
            />
          </g>

          <g className="animate-code-blocks">
            <rect
              x="100"
              y="400"
              width="80"
              height="12"
              fill="rgb(59 130 246)"
              fillOpacity="0.4"
              rx="2"
              className="animate-code-line"
            />
            <rect
              x="100"
              y="420"
              width="120"
              height="12"
              fill="rgb(147 51 234)"
              fillOpacity="0.4"
              rx="2"
              className="animate-code-line-delayed"
            />
            <rect
              x="100"
              y="440"
              width="60"
              height="12"
              fill="rgb(59 130 246)"
              fillOpacity="0.4"
              rx="2"
              className="animate-code-line-reverse"
            />
            <rect
              x="100"
              y="460"
              width="100"
              height="12"
              fill="rgb(147 51 234)"
              fillOpacity="0.4"
              rx="2"
              className="animate-code-line-fast"
            />
          </g>

          <g className="animate-project-float">
            <polygon
              points="1000,400 1020,420 1000,440 980,420"
              fill="none"
              stroke="rgb(59 130 246)"
              strokeWidth="2"
              strokeOpacity="0.5"
              className="animate-diamond-spin"
            />
            <circle cx="1000" cy="420" r="8" fill="rgb(59 130 246)" fillOpacity="0.3" className="animate-inner-pulse" />
          </g>

          <g className="animate-project-float-delayed">
            <rect
              x="1080"
              y="500"
              width="24"
              height="24"
              fill="none"
              stroke="rgb(147 51 234)"
              strokeWidth="2"
              strokeOpacity="0.5"
              rx="4"
              className="animate-square-morph"
            />
            <path
              d="M1092,506 L1092,518 M1086,512 L1098,512"
              stroke="rgb(147 51 234)"
              strokeWidth="2"
              strokeOpacity="0.6"
              className="animate-cross-rotate"
            />
          </g>
        </svg>

        {/* Enhanced floating gradients */}
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full animate-float-reverse blur-xl"></div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-text-reveal">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto animate-expand-width"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-primary/20 group animate-fade-in-up hover:animate-lift-float ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="bg-primary text-primary-foreground animate-pulse-gentle">Featured</Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 animate-fade-in"
                        style={{ animationDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 hover:animate-bounce-gentle group/btn">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-wiggle" />
                      View Project
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:animate-bounce-gentle group/btn bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:animate-spin-slow" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  )
}
