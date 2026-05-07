# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build (TypeScript compile + Vite bundle)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

No test suite is configured.

## Stack

- **React 19** + **TypeScript 5.7** SPA
- **Vite 6** build tool with `@vitejs/plugin-react` (Oxc compiler)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **Node 22** required

## Architecture

Currently a minimal single-page app derived from the Vite React+TypeScript template:

- `index.html` → `src/main.tsx` → `src/App.tsx`
- `src/App.css` uses CSS nesting and CSS custom properties (not Tailwind utility classes — the project mixes both approaches)
- SVG icons are bundled as a sprite at `public/icons.svg` and referenced via `<use href="/icons.svg#icon-id">`
- Static assets (images, SVGs) live in `src/assets/` and are imported directly into components

## Deployment

Deployed on Vercel via Git integration. `npm run build` produces the `dist/` output that Vercel serves. No CI/CD pipeline exists beyond Vercel's automatic deploys.

## Portfolio — Project Context

**Owner**: Jacopo Valsecchi — Web Developer  
**Goal**: Professional portfolio website, corporate and clean visual style

### Sections (in order)
1. **Hero** — name, role, CTA buttons "Contact me" and "View projects"
2. **Skills** — technologies grouped by category (Frontend, Backend, Tools)
3. **Projects** — cards with title, description, tech stack, GitHub/live links
4. **Experience** — vertical timeline with company, role, period, description
5. **Contact** — email, LinkedIn, GitHub

### Folder structure

src/
components/
layout/      # Navbar, Footer
sections/    # Hero, Skills, Projects, Experience, Contact
ui/          # Button, Card, Badge (reusable components)
data/          # .ts files with static data (projects, skills, experience)
types/         # TypeScript interfaces

### Conventions
- Data always separated in `src/data/`, never hardcoded inside components
- TypeScript interfaces for every data structure, never use `any`
- Tailwind classes only, no inline styles
- Small, focused components (single responsibility)
- Palette: white, gray, slate — one accent color (blue or slate)
- Centered layout, max-width 1100px, mobile-first
- Subtle animations: fade-in on scroll, hover effects on cards and links

## Visual Theme

The portfolio should feel like a modern developer tool, not a generic corporate site.

- Dark background as default (#0f172a slate-900 or #111827 gray-900)
- Accent color: electric blue (#3b82f6) or cyan (#06b6d4)
- Monospace font for name/role (e.g. JetBrains Mono, Fira Code)
- Code-inspired details: subtle grid background, terminal-style elements,
  blinking cursor on Hero title, syntax highlight colors for skill badges
- Thin borders with low opacity (border-white/10)
- Glassmorphism cards: bg-white/5 backdrop-blur border border-white/10
- Smooth transitions everywhere (transition-all duration-300)

## Animations
- Use Framer Motion for all animations
- Fade-in on scroll for every section
- Stagger children animations for lists and cards
- Smooth hover effects on interactive elements
- No abrupt transitions, always use ease-in-out