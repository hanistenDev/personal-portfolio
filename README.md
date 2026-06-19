# Personal Portfolio – Hanisten Thivakaran

A premium, modern portfolio website showcasing my work as an Application Developer. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **shadcn/ui** - Beautiful component library
- **Netlify Forms** - Contact form handling

## ✨ Features

- 🎨 Premium Aurora gradient background animations
- 🎭 Smooth scroll-reveal animations on all sections
- 📱 Fully responsive design
- 🌓 Dark/Light theme toggle
- ⚡ Optimized performance with lazy loading
- ♿ Accessibility-first (ARIA labels, semantic HTML)
- 🔒 Spam-protected contact form (Netlify Forms + Honeypot)
- 🎯 SEO optimized with meta tags and structured data

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hanistenDev/personal-portfolio.git
cd personal-portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Add EmailJS environment variables in Netlify (see Contact Form Setup below)

### Contact Form Setup

The contact form uses **EmailJS** (primary) with **Netlify Forms** as fallback.

**Required for production (Netlify → Site configuration → Environment variables):**
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Copy the values from your local `.env` file (see `.env.example` for the required keys).

**How it works:**
- EmailJS sends contact messages to your configured Gmail inbox
- Netlify Forms is used as fallback if EmailJS env vars are missing
- Honeypot field prevents spam bots

**Optional:** Set up email notifications for Netlify Forms in Netlify Dashboard:
1. Go to Site settings → Forms
2. Enable email notifications
3. Add your email address

## 📁 Project Structure

```
src/
├── components/
│   ├── about.tsx          # About section with skills
│   ├── contact.tsx        # Contact form (Netlify Forms)
│   ├── footer.tsx         # Footer component
│   ├── header.tsx         # Navigation header
│   ├── hero.tsx           # Hero section with Aurora background
│   ├── portfolio.tsx     # Portfolio projects showcase
│   ├── services.tsx      # Services section
│   ├── skills.tsx        # Skills with progress bars
│   └── ui/               # shadcn/ui components
├── pages/
│   └── Index.tsx         # Main page
└── index.css             # Global styles + Aurora animations
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the violet theme:

```typescript
violet: {
  DEFAULT: "#8B5CF6",
  dark: "#7C3AED",
  light: "#A78BFA",
}
```

### Content

- **Hero**: Edit `src/components/hero.tsx`
- **Portfolio**: Edit projects array in `src/components/portfolio.tsx`
- **About**: Edit `src/components/about.tsx`
- **Skills**: Edit skills object in `src/components/skills.tsx`

## 📝 License

This project is private and proprietary.

## 👤 Author

**Hanisten Thivakaran**
- Application Developer at Sunrise
- Based in Zürich, Switzerland
- GitHub: [@hanistenDev](https://github.com/hanistenDev)
- LinkedIn: [Hanisten Thivakaran](https://www.linkedin.com/in/hanisten-thivakaran-765043327/)