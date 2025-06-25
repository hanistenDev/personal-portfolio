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
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-3xl mx-auto text-left px-4 sm:px-0">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through my apprenticeship and co-founding Webwind Digital,
            I’ve gained solid experience in building modern,
             user-centered applications. My approach blends clean code practices 
             with purposeful design and problem-solving.
          </p>
          <div className="grid gap-6">
            {skills.map((skill) => (
              <div key={skill.label} className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-violet/10 text-violet">
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

        {/* Bild-Container */}
        <div className="flex justify-center">
          <div className="relative rounded-3xl shadow-2xl overflow-hidden max-w-xs sm:max-w-sm">
            {/* Overlay, bleibt über dem Bild */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet via-violet-dark to-violet opacity-10 rounded-3xl pointer-events-none" />
            <img
              src="/images/profile.png" // Später hier dein echtes Bild einfügen
              alt="Developer"
              className="relative rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
