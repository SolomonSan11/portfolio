"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
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

  const experiences = [
    {
      title: "Chief Executive Officer",
      company: "Softnovations Co., Ltd.",
      period: "2023 — Present",
      // description:
      //   "Leading a team of 200+ professionals in developing cutting-edge AI solutions for enterprise clients. Scaled revenue from $10M to $100M+ in 4 years.",
      skills: ["Strategic Planning", "Team Leadership", "Project Management", "Product Development", "Time Management", "StakeHolder Communication", "Business Development", "Cost and Resource Management"],
    },
    {
      title: "Chief Technology Officer/Project Manager",
      company: "MPT (Myanamr Post and Telecommunication)",
      period: "2023 — 2024",
      // description:
      //   "Spearheaded digital transformation initiatives for Fortune 500 companies. Built and managed engineering teams across 3 continents.",
      skills: ["Cloud Architecture", "Project Management", "System Architecture", "Time Management", "Partner Comminication", "Digital Transformation", "Team Management", "Programming", "Database Mangement", "Telecommunication", "Reporting"],
    },
    {
      title: "Project Manager",
      company: "Start Gear Inc. , Fresh Moe Co., Ltd., Simple Z Co., Ltd., Viabells Singapore (Pte)",
      period: "2022 — 2023",
      // description:
      //   "Led the engineering team through Series A to Series C funding rounds. Architected scalable systems serving millions of users.",
      skills: ["System Architecture", "Scalability", "Team Building", "Project Mangement", "Cloud Architecture", "System Design", "Reporting"],
    },
    {
      title: "Country Manager",
      company: "Simple Z Co., Ltd.",
      period: "2021 — 2022",
      // description:
      //   "Led the engineering team through Series A to Series C funding rounds. Architected scalable systems serving millions of users.",
      skills: ["System Architecture", "Scalability", "Team Building", "Product Development", "Project Management", "Planning", "Reporting"],
    },
    {
      title: "Senior Software Engineer",
      company: "Prudential, Loftal Co., Ltd., Viabells Singapore (Pte)",
      period: "2017 — 2022",
      // description:
      //   "Developed high-performance applications and mentored junior developers. Contributed to open-source projects with 10K+ stars.",
      skills: ["Full-Stack Development", "Programming", "Database", "Server Deployment", "Mentoring", "Problem Solving", "Critical Thinkging", "Performance Optimization"],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-36 h-36 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full animate-float-slow blur-2xl"></div>
        <div className="absolute bottom-1/4 left-10 w-28 h-28 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full animate-float-reverse blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-text-reveal">Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto animate-expand-width"></div>
          </div>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary animate-shimmer hidden md:block"></div>

            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-500 hover:border-primary/20 group animate-fade-in-up hover:animate-lift-float relative md:ml-12"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-16 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-gentle hidden md:block"></div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary font-semibold animate-fade-in">{exp.company}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-muted-foreground border-muted-foreground w-fit animate-bounce-subtle hover:animate-wiggle"
                  >
                    {exp.period}
                  </Badge>
                </div>

                <p
                  className="text-muted-foreground leading-relaxed mb-6 animate-fade-in"
                  style={{ animationDelay: `${index * 200 + 100}ms` }}
                >
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 animate-fade-in hover:animate-bounce-gentle"
                      style={{ animationDelay: `${index * 200 + skillIndex * 50 + 200}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
