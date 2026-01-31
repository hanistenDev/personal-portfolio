import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WebwindDigital } from "@/components/webwind-digital"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { lazy, Suspense } from "react"

// Lazy load components for better performance
const Portfolio = lazy(() => import("@/components/portfolio").then(module => ({ default: module.Portfolio })))
const Skills = lazy(() => import("@/components/skills").then(module => ({ default: module.Skills })))

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <WebwindDigital />
          <Services />
          <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Loading...</div></div>}>
            <Portfolio />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Loading...</div></div>}>
            <Skills />
          </Suspense>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
