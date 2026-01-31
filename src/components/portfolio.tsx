import { Github, ExternalLink } from "lucide-react"
import { Section } from "./ui/section"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "UCCP DataVision Tool – Frontend",
      description: "Frontend interface for a comprehensive data tracking tool. Built with modern React patterns and provides an intuitive user experience for real-time data visualization and analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/hanistenDev/uccp-frontend/tree/main",
      website: null,
      longDescription: "Modern frontend application for data tracking with real-time dashboards, interactive charts, and responsive design. Features include user authentication, data visualization, and comprehensive reporting tools.",
      impact: "Focus: performance, secure APIs, clean UX",
      hasGitHub: true,
    },
    {
      title: "UCCP DataVision Tool – Backend",
      description: "Robust backend API for the data tracking tool. Handles real-time data processing, user authentication, and provides secure endpoints for the frontend application.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "Express", "SQL Server"],
      github: "https://github.com/hanistenDev/uccp-backend/tree/master",
      website: null,
      longDescription: "Scalable backend infrastructure with RESTful API design, real-time data processing capabilities, secure authentication, and comprehensive database management for the data tracking platform.",
      impact: "Focus: scalable architecture, secure APIs, real-time processing",
      hasGitHub: true,
    },
    {
      title: "Webwind Digital Website",
      description: "A custom-built website for Webwind Digital, designed to showcase the company's services and vision. The site is fully responsive and features a modern, user-friendly interface.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      website: "https://webwinddigital.com",
      github: null,
      longDescription: "A comprehensive website built for Webwind Digital that showcases their services, team, and portfolio. Features include dynamic content management, responsive design, and modern UI/UX principles.",
      impact: "Focus: modern design, responsive UX, performance optimization",
      hasGitHub: false,
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
      id="portfolio"
      title="Portfolio"
      subtitle="Check out some of my recent projects"
    >
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              project={project}
              variants={cardVariants}
              onDetailsClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <p className="text-base">{selectedProject?.longDescription}</p>
              {selectedProject?.impact && (
                <p className="text-sm text-violet font-medium italic">
                  {selectedProject.impact}
                </p>
              )}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-violet/10 text-violet border border-violet/20"
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

function PortfolioCard({
  project,
  variants,
  onDetailsClick,
}: {
  project: typeof projects[0]
  variants: any
  onDetailsClick: () => void
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    // Subtle tilt: max 3 degrees
    const rotateX = ((y - centerY) / centerY) * 3
    const rotateY = ((centerX - x) / centerX) * 3

    setMousePosition({ x: rotateY, y: rotateX })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      animate={{
        rotateX: mousePosition.y,
        rotateY: mousePosition.x,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="group rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-violet/20 flex flex-col relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet via-violet-dark to-violet p-[1px]">
          <div className="h-full w-full rounded-xl bg-card" />
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet/0 via-violet/0 to-violet/0 group-hover:via-violet/5 group-hover:to-violet/10 transition-all duration-300 pointer-events-none z-0" />

      <div className="aspect-video overflow-hidden relative z-10">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-violet transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-3 text-sm flex-grow">
          {project.description}
        </p>
        <p className="text-xs text-violet/80 mb-4 font-medium italic">
          {project.impact}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-violet/10 text-violet border border-violet/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.hasGitHub && project.github ? (
            <MagneticButton>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 hover:bg-violet hover:text-white hover:border-violet transition-all"
                onClick={() => window.open(project.github, "_blank")}
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </MagneticButton>
          ) : null}
          {project.website ? (
            <MagneticButton>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 hover:bg-violet hover:text-white hover:border-violet transition-all"
                onClick={() => window.open(project.website, "_blank")}
                aria-label={`Visit ${project.title} live site`}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Site
              </Button>
            </MagneticButton>
          ) : null}
          <MagneticButton>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-violet hover:text-white hover:border-violet transition-all"
              onClick={onDetailsClick}
              aria-label={`View details for ${project.title}`}
            >
              Details
            </Button>
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  )
}

// Small Magnetic Button for Portfolio Cards
function MagneticButton({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    setPosition({ x: x * 0.1, y: y * 0.1 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  )
}
