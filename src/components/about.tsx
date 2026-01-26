import { Code2, Database, Layout } from "lucide-react"
import { Section } from "./ui/section"
import { AiOutlineRobot } from 'react-icons/ai';

export function About() {
  const skills = [
    { icon: Layout, label: "Frontend Development", description: "React, Next.js, TypeScript" },
    { icon: Database, label: "Backend Development", description: "Node.js, MSSQL, MongoDB" },
    { icon: Code2, label: "Languages", description: "JavaScript, Java, Python, SQL" },
    { icon: AiOutlineRobot, label: "AI Fundamentals", description: "Daily use of LLMs and prompt engineering" },
  ]

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate developer crafting exceptional digital experiences"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            Through my apprenticeship and co-founding Webwind Digital,
            I've gained solid experience in building modern,
            user-centered applications. My approach blends clean code practices 
            with purposeful design and problem-solving.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.label} className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-violet/10 text-violet flex-shrink-0">
                  <skill.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{skill.label}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
