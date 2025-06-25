import { Github, ExternalLink } from "lucide-react"
import { Section } from "./ui/section"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import { useState } from "react"

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null)

  const projects = [
    {
      title: "UCCP DataVision Tool – Frontend",
      description: "Frontend interface for a comprehensive data tracking tool. Built with modern React patterns and provides an intuitive user experience for real-time data visualization and analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/hanistenDev/uccp-frontend/tree/main",
      longDescription: "Modern frontend application for data tracking with real-time dashboards, interactive charts, and responsive design. Features include user authentication, data visualization, and comprehensive reporting tools.",
      hasGitHub: true,
    },
    {
      title: "UCCP DataVision Tool – Backend",
      description: "Robust backend API for the data tracking tool. Handles real-time data processing, user authentication, and provides secure endpoints for the frontend application.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "Express", "SQL Server "],
      github: "https://github.com/hanistenDev/uccp-backend/tree/master",
      longDescription: "Scalable backend infrastructure with RESTful API design, real-time data processing capabilities, secure authentication, and comprehensive database management for the data tracking platform.",
      hasGitHub: true,
    },
    {
      title: "Webwind Digital Website",
      description: "A custom-built website for Webwind Digital, designed to showcase the company's services and vision. The site is fully responsive and features a modern, user-friendly interface.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      website: "https://webwinddigital.com",
      longDescription: "A comprehensive website built for Webwind Digital that showcases their services, team, and portfolio. Features include dynamic content management, responsive design, and modern UI/UX principles.",
      hasGitHub: false,
    },
  ]

  return (
    <Section
      id="portfolio"
      title="Portfolio"
      subtitle="Check out some of my recent projects"
    >
      <div className="container mx-auto">
        {/* Projects Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:border-violet/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-violet/10 text-violet"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.hasGitHub ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-violet hover:text-white"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-violet hover:text-white"
                      onClick={() => window.open(project.website, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Site
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-violet hover:text-white"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <p>{selectedProject?.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-violet/10 text-violet"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Section>
  )
}
