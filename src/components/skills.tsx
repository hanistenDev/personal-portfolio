import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Section } from "./ui/section"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "HTML / CSS", level: 95 },
      { name: "TypeScript", level: 70 },
      { name: "Next.js", level: 70 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 70 },
      { name: "MongoDB (NoSQL)", level: 80 },
      { name: "SQL", level: 85 },
    ],
    other: [
      { name: "UI/UX Design", level: 75 },
      { name: "Git & Version Control", level: 85 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Prompt Engineering", level: 70 },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
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
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="w-full justify-center mb-8 bg-card">
              <TabsTrigger value="frontend" className="px-8">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="px-8">Backend</TabsTrigger>
              <TabsTrigger value="other" className="px-8">Other</TabsTrigger>
            </TabsList>
            {Object.entries(skills).map(([category, skillList]) => (
              <TabsContent
                key={category}
                value={category}
                className="mt-0"
              >
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {skillList.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="p-4 rounded-lg bg-card border border-border hover:border-violet/50 transition-colors"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-violet/10"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </Section>
  )
}
