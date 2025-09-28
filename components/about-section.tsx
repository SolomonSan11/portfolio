"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
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

  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "40+", label: "Projects Led" },
    { value: "$30000+", label: "Revenue Generated" },
    { value: "100+", label: "Team Members" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(59 130 246)" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
            <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(147 51 234)" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" className="animate-grid-flow" />

          <g className="animate-stats-flow">
            <rect
              x="100"
              y="100"
              width="200"
              height="4"
              fill="url(#statsGradient)"
              rx="2"
              className="animate-progress-bar"
            />
            <rect
              x="100"
              y="120"
              width="150"
              height="4"
              fill="url(#statsGradient)"
              rx="2"
              className="animate-progress-bar-delayed"
            />
            <rect
              x="100"
              y="140"
              width="180"
              height="4"
              fill="url(#statsGradient)"
              rx="2"
              className="animate-progress-bar-reverse"
            />
          </g>

          <g className="animate-tech-float">
            <circle cx="900" cy="150" r="20" fill="none" stroke="rgb(59 130 246)" strokeWidth="2" strokeOpacity="0.4" />
            <path
              d="M890,150 L900,140 L910,150 L900,160 Z"
              fill="rgb(59 130 246)"
              fillOpacity="0.6"
              className="animate-tech-pulse"
            />
          </g>

          <g className="animate-tech-float-delayed">
            <rect
              x="1000"
              y="300"
              width="30"
              height="30"
              fill="none"
              stroke="rgb(147 51 234)"
              strokeWidth="2"
              strokeOpacity="0.4"
              rx="4"
            />
            <circle
              cx="1015"
              cy="315"
              r="8"
              fill="rgb(147 51 234)"
              fillOpacity="0.6"
              className="animate-tech-pulse-delayed"
            />
          </g>
        </svg>

        {/* Enhanced floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/5 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/10 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-text-reveal">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto animate-expand-width"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p
                className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                I founded Softnovations Co., Ltd. because I believe software should make daily work simpler for people and organizations not more complicated. 
                With 8+ years of building product-first solutions and working with 30+ clients.
                I focus on apps for social enterprises and small businesses that are easy to use, cost-conscious, and built to last. 
                My approach is practical and hands-on: listen first, build what matters, then keep improving. 
                If a small technical nudge can help your teams work better, I’m happy to provide it.
                let’s create something useful together.
              </p>
             
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:animate-bounce-gentle hover:scale-105 group"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-primary mb-2 animate-count-up group-hover:animate-pulse">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground animate-fade-in">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
