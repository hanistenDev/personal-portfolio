import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface SectionRevealProps {
  children: ReactNode
  className?: string
  staggerChildren?: number
  delay?: number
}

export function SectionReveal({ 
  children, 
  className = "",
  staggerChildren = 0.1,
  delay = 0
}: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(10px)" 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const RevealItem = motion.div

