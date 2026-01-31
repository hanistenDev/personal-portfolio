import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { RotatingTitle } from "./rotating-title"
import { useEffect, useState } from "react"

export function Hero() {
  const [showScrollCue, setShowScrollCue] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollCue(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titles = [
    "Application Developer",
    "Full-Stack Developer",
    "Web Experience Builder",
    "UI-focused Engineer",
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 aurora-bg z-0" />
      <div className="noise-overlay z-0" />
      
      {/* Floating Light Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/15 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet/10 rounded-full blur-2xl"
          animate={prefersReducedMotion ? {} : {
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Large Rotating H1 Title - Fixed height to prevent layout shift */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 md:mb-12 tracking-tight text-foreground">
              {/* Fixed height wrapper - reserves space for 2 lines on mobile, 1 line on desktop */}
              <div className="relative inline-block w-full max-w-full h-[1.4em] md:h-[1.2em] lg:h-[1.2em]">
                <RotatingTitle titles={titles} interval={2500} />
              </div>
            </h1>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
          >
            building modern web experiences
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-violet mb-12 max-w-2xl mx-auto"
          >
            Based in Zürich, Switzerland
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton>
              <Button
                size="lg"
                className="group bg-violet hover:bg-violet-dark text-white px-8 py-6 text-lg shadow-lg shadow-violet/25 hover:shadow-xl hover:shadow-violet/30 transition-all"
                onClick={() => scrollToSection('portfolio')}
                aria-label="Scroll to portfolio section"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </MagneticButton>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-violet text-violet hover:bg-violet hover:text-white px-8 py-6 text-lg backdrop-blur-sm bg-background/50"
                onClick={() => scrollToSection('contact')}
                aria-label="Scroll to contact section"
              >
                Contact
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      {showScrollCue && !prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6" />
            <div className="w-1 h-8 bg-violet/30 rounded-full" />
          </motion.div>
        </motion.div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-0" />
    </section>
  )
}

// Magnetic Button Component
function MagneticButton({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    setPosition({ x: x * 0.15, y: y * 0.15 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  )
}
