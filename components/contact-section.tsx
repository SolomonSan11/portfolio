"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sithu.md@softnovations.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+66)639935357",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangkok",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full animate-float-reverse blur-xl"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/5 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-text-reveal">Let's Connect</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 animate-expand-width"></div>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              Ready to discuss your next big idea? I'm always open to exploring new opportunities and partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for strategic guidance, partnership opportunities, or just want to connect, I'd
                  love to hear from you. Let's build something amazing together.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 animate-fade-in-up hover:animate-bounce-gentle group"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-wiggle">
                      <info.icon className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card
              className="p-8 animate-fade-in-up hover:shadow-xl transition-all duration-500 group"
              style={{ animationDelay: "500ms" }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-fade-in" style={{ animationDelay: "700ms" }}>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input
                      placeholder="John"
                      className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: "750ms" }}>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "850ms" }}>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <Input
                    placeholder="Let's discuss a partnership"
                    className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "900ms" }}>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="hover:border-primary/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-in hover:animate-bounce-gentle group/btn transition-all duration-300"
                  style={{ animationDelay: "950ms" }}
                >
                  <Send className="h-4 w-4 mr-2 group-hover/btn:animate-wiggle" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <div
        className="mt-20 pt-8 border-t border-border text-center animate-fade-in"
        style={{ animationDelay: "1000ms" }}
      >
        <p className="text-muted-foreground hover:text-primary transition-colors duration-300">
          © 2025 Si Thu Nyunt Swe (Jack). All rights reserved.
        </p>
      </div>
    </section>
  )
}
