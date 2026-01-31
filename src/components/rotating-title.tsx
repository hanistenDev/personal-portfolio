import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface RotatingTitleProps {
  titles: string[]
  interval?: number
}

export function RotatingTitle({ titles, interval = 2500 }: RotatingTitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !titles.length) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      return
    }

    // Start rotation after showing first title for interval duration
    const initialDelay = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      }, interval)
    }, interval)

    return () => {
      clearTimeout(initialDelay)
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [titles.length, interval, prefersReducedMotion])

  // Always ensure we have a title to display
  const currentTitle = titles[currentIndex] || titles[0] || "Application Developer"

  // Simple fallback: just show the first title if reduced motion or no titles
  if (prefersReducedMotion || !titles.length) {
    return (
      <span className="absolute inset-0 flex items-center justify-center text-center whitespace-nowrap md:whitespace-normal">
        {titles[0] || "Application Developer"}
      </span>
    )
  }

  // Fixed-height container with absolute positioning to prevent layout shift
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(3px)" }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0 flex items-center justify-center text-center whitespace-nowrap md:whitespace-normal"
        >
          {currentTitle}
        </motion.span>
      </AnimatePresence>
    </>
  )
}
