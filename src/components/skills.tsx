import { Code2, Database, Terminal } from "lucide-react"
import { Section } from "./ui/section"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["HTML / CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend & Data",
    skills: ["Node.js", "SQL", "MongoDB", "REST APIs", "Postman"],
  },
  {
    icon: Terminal,
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Prompt Engineering"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6" ref={ref}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card
                className="group h-full bg-card border-border hover:border-violet transition-all duration-300
                hover:shadow-2xl hover:scale-[1.02] hover:bg-violet/5 relative overflow-hidden"
              >
                <CardContent className="p-5 sm:p-6 relative z-10">
                  <div className="w-11 h-11 mb-5 rounded-lg bg-violet/10 flex items-center justify-center text-violet group-hover:bg-violet group-hover:text-white transition-colors">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold mb-4 text-lg text-foreground group-hover:text-violet transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-violet/10 text-violet border border-violet/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-violet/10 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
