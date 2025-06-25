import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Section } from "./ui/section"

export function Skills() {
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

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="container mx-auto max-w-4xl">
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
              className="mt-0 animate-fadeIn"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {skillList.map((skill) => (
                  <div
                    key={skill.name}
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
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  )
}
