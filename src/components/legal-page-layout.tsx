import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

interface LegalPageLayoutProps {
  title: string
  children: React.ReactNode
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-3xl px-4 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-violet transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-violet via-violet-dark to-violet bg-clip-text text-transparent">
            {title}
          </h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
