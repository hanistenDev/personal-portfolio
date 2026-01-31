import { Blocks, Palette, Wrench } from "lucide-react"
import { Section } from "./ui/section"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Blocks,
      title: "Web Development",
      description:
        "Building responsive, scalable web applications using modern frameworks and best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with a focus on user experience.",
    },
    {
      icon: Wrench,
      title: "Consulting",
      description:
        "Technical consulting and architecture planning for web and mobile applications.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
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
    <Section
      id="services"
      title="Services"
      subtitle="Comprehensive solutions for your digital needs"
    >
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group p-8 rounded-2xl bg-card hover:bg-violet/5 transition-colors border border-border hover:border-violet/40 hover:shadow-lg"
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-violet/10 flex items-center justify-center text-violet group-hover:bg-violet group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-violet transition-colors">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
