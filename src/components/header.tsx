import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up"
    setScrollDirection(direction)
    setLastScrollY(latest)
    setIsScrolled(latest > 50)
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <motion.header
      className="fixed top-0 w-full z-50"
      animate={{
        y: scrollDirection === "down" && isScrolled ? -20 : 0,
        opacity: scrollDirection === "down" && isScrolled ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      style={{
        pointerEvents: scrollDirection === "down" && isScrolled ? "none" : "auto",
      }}
    >
      <motion.div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
        animate={{
          scale: isScrolled ? 0.95 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className={`rounded-full mx-auto transition-all duration-300 ${
            isScrolled ? "bg-background/90 backdrop-blur-xl shadow-xl border border-border/50" : "bg-background/80 backdrop-blur-lg"
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-14 px-5" : "h-16 px-6"
          }`}>
            <a 
              href="#" 
              className="text-2xl font-bold text-violet hover:text-violet-dark transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Scroll to top"
            >
              Portfolio
            </a>

            <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-violet transition-colors text-sm font-medium"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </button>
              ))}
              <ThemeToggle />
            </nav>

            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-24 left-4 right-4 rounded-2xl bg-background/95 backdrop-blur-lg shadow-lg border border-border"
          aria-label="Mobile Navigation"
        >
          <div className="p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-violet transition-colors rounded-lg hover:bg-violet/5"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
