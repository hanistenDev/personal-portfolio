
import { Blocks, Palette, Wrench } from "lucide-react"
import { Section } from "./ui/section"

export function Services() {
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

  return (
    <Section
      id="services"
      title="Services"
      subtitle="Comprehensive solutions for your digital needs"
    >
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-8 rounded-2xl bg-card hover:bg-violet/5 transition-colors border border-border"
          >
            <div className="w-12 h-12 mb-6 rounded-lg bg-violet/10 flex items-center justify-center text-violet group-hover:bg-violet group-hover:text-white transition-colors">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
