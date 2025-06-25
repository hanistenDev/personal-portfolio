
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WebwindDigital } from "@/components/webwind-digital"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CookieConsentBanner } from "@/components/cookie-consent"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <WebwindDigital />
          <Services />
          <Portfolio />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <CookieConsentBanner />
      </div>
    </ThemeProvider>
  );
};

export default Index;
