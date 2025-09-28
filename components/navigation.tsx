"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    // { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-effect border-b border-primary/20" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 from-primary to-accent rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
              <img
                src="/logo.jpeg"            // Path to your logo image in public folder
                alt="Logo"
                className="w-7 h-7 object-contain rounded-lg" // Adjust to fit inside 8x8 container
              />
            </div>
            <span className="font-bold text-xl gradient-text">Si Thu Nyunt Swe (Jack)</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-foreground transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glass-effect hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-200" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-200" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-primary/20 rounded-b-lg animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
