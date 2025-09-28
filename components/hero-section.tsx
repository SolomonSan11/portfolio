"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Zap, Cpu } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(147 51 234)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Subtle animated lines */}
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-draw-line"
          />

          {/* Floating dots for subtle movement */}
          <circle cx="300" cy="200" r="2" fill="rgb(59 130 246)" fillOpacity="0.4" className="animate-float-gentle" />
          <circle
            cx="900"
            cy="300"
            r="2"
            fill="rgb(147 51 234)"
            fillOpacity="0.4"
            className="animate-float-gentle"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex justify-center mb-12 mt-8">
            <div className="relative group">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden glass-effect border border-primary/20">
                <img
                  src="/stcoat.jpg"
                  alt="Professional Photo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-8 opacity-60">
              <Code className="h-8 w-8 text-primary" />
              <Zap className="h-8 w-8 text-accent" />
              <Cpu className="h-8 w-8 text-primary" />
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-balance mb-6 leading-none">
              <span className="gradient-text">TECH EXECUTIVE</span>
              <br />
              {/* <span className="text-foreground font-light">EXECUTIVE</span> */}
            </h1>

            <div className="glass-effect border border-primary/20 rounded-2xl p-6 mb-8 max-w-5xl mx-auto transition-transform duration-300 hover:scale-[1.02]">
              <p className="text-2xl md:text-3xl text-primary mb-2 font-medium">Si Thu Nyunt Swe (Jack)</p>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Founder & Business Innovator
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {"I’m the Founder of Softnovations Co., Ltd., with 8+ years building product-first software and supporting 30+ clients."}
                {"I design practical, customer-first applications for social enterprises and small and medium businesses  long-term, high-quality solutions that are flexible, sustainable, and accessible regardless of price."} 
                {"My focus is solving everyday operational problems so users feel the real value, and I’m always willing to lend my support — even a small contribution can strengthen IT for organizations and communities."}
                {"If you want software that’s useful, affordable, and built to last, let’s build it together."}
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-4 text-lg font-medium border border-primary/20 hover:scale-105 transition-all duration-300"
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg glass-effect border-primary/30 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 bg-transparent hover:scale-105 transition-all duration-300 hover:border-primary/50"
              >
                Download Portfolio
              </Button>
            </div> */}

            {/* <div className="flex justify-center space-x-8 mb-20">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 w-12 h-12 rounded-full glass-effect hover:scale-110 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-accent hover:bg-accent/10 w-12 h-12 rounded-full glass-effect hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 w-12 h-12 rounded-full glass-effect hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div> */}
          </div>
        </div>

        {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="glass-effect rounded-full p-3 hover:scale-110 cursor-pointer transition-all duration-300">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div> */}
      </div>
    </section>
  )
}
