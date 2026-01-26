
import { Github, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/hanistenDev" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hanisten-thivakaran-765043327/" },
    { icon: Instagram, href: "https://instagram.com" },
  ]

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Hanisten. All rights reserved.
        </p>
        <nav className="flex items-center gap-4" aria-label="Social Media Links">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-violet hover:bg-violet/10 transition-colors"
              aria-label={`Besuchen Sie mein ${social.icon.name === 'Github' ? 'GitHub' : social.icon.name === 'Linkedin' ? 'LinkedIn' : 'Instagram'} Profil`}
            >
              <social.icon className="w-5 h-5" aria-hidden="true" />
            </a>
          ))}
        </nav>
        <nav className="flex gap-6 text-sm text-muted-foreground" aria-label="Footer Links">
          <a href="#" className="hover:text-violet transition-colors" aria-label="Datenschutzerklärung">
            Datenschutz
          </a>
          <a href="#" className="hover:text-violet transition-colors" aria-label="Impressum">
            Impressum
          </a>
        </nav>
      </div>
    </footer>
  )
}
