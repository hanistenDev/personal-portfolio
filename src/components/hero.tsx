import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { useState, useEffect, useMemo } from "react"

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  
  const titles = useMemo(() => [
    "Frontend Developer",
    "Backend & Database Developer", 
    "Web & App Developer"
  ], [])
  
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    
    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentTitleIndex, titles])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Enhanced gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 via-violet-500/20 to-transparent animate-gradient dark:from-violet-500/30 dark:via-violet-500/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/30 via-transparent to-transparent animate-gradient" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-violet shadow-lg">
            <img
              src="/images/profile.png"
              alt="Hanisten Thivakaran - Application Developer"
              className="w-full h-full object-cover"
              loading="eager"
              width="128"
              height="128"
            />
          </div>
          
          <span className="inline-block px-3 py-1 mb-4 text-sm text-violet bg-violet/10 rounded-full animate-fadeIn">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight animate-fadeIn" style={{ animationDelay: "200ms" }}>
            Hanisten Thivakaran
          </h1>
          
          <p className="text-xl text-violet dark:text-violet-light mb-4 animate-fadeIn" style={{ animationDelay: "300ms" }}>
            Based in Zürich, Switzerland
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "400ms" }}>
            Application Developer at Sunrise, combining code and creativity to solve real-world challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "600ms" }}>
            <Button
              size="lg"
              className="group bg-violet hover:bg-violet-dark text-white"
              onClick={() => scrollToSection('portfolio')}
              aria-label="Zu Portfolio Sektion scrollen"
            >
              Projekte ansehen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-violet text-violet hover:bg-violet hover:text-white"
              onClick={() => scrollToSection('contact')}
              aria-label="Zu Kontakt Sektion scrollen"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
