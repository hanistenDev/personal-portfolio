import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export function Section({ title, subtitle, className, children, ...props }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const titleVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
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
    <section
      ref={ref}
      className={cn(
        "min-h-[100vh] py-2 px-4 flex flex-col justify-center items-center scroll-mt-16",
        className
      )}
      {...props}
    >
      {(title || subtitle) && (
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet via-violet-dark to-violet bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  )
}
