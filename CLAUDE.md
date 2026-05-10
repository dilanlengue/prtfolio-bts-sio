# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for Dilan Lengue (BTS SIO SISR). Static React SPA — no backend, no API, no tests.

## Commands

- **Dev server:** `npm run dev` → http://localhost:5173 (binds 0.0.0.0)
- **Build:** `npm run build` → `dist/`
- **Lint:** `npm run lint` (ESLint 9 flat config, `no-unused-vars` ignores `^[A-Z_]`)
- **Preview prod build:** `npm run preview`

## Stack

React 19 + Vite 7 + Tailwind CSS 4 (via `@tailwindcss/vite` plugin, no `tailwind.config` — theme defined in `@theme` block in `src/index.css`). Icons from `lucide-react`. Routing via `react-router-dom` (BrowserRouter).

## Architecture

**Routing:** `App.jsx` defines all routes inside a `<BrowserRouter>`. Every route renders inside `Layout`, which provides the chrome (background, nav, footer). Routes are multi-page (`/`, `/a-propos`, `/competences`, `/cv`, `/projets`, `/bts`, `/certifications`, `/veille`, `/entreprise`, `/contact`).

**Layout shell:** `Layout.jsx` wraps `<Outlet>` with three persistent elements:
- `CyberBackground` — full-screen animated canvas backdrop
- `TopNav` — mobile/tablet top bar (hidden on `lg:`), includes mobile hamburger menu
- `SideNav` — desktop icon sidebar (64px, hidden below `lg:`)
- `Footer` — site footer

Navigation breakpoint: `TopNav` shows below `lg:`, `SideNav` shows at `lg:` and above. Nav links are defined in both components — keep them in sync when adding/removing pages.

**Pages vs Components:** `src/pages/` are route-level page components. `src/components/` are reusable section components that pages compose. Some pages directly render a single component (e.g., `ProjetsPage` renders `Projets`).

**Scroll animations:** `useScrollAnimation` hook (used in `AppContent`) uses IntersectionObserver + MutationObserver to add `.visible` class to elements with animation classes (`animate-fade-up`, `animate-fade-left`, `animate-fade-right`, `animate-scale`). These CSS classes and keyframes are defined in `src/index.css`.

## Design System (in `src/index.css`)

All theme tokens are in the `@theme` block: `--color-primary` (#6366f1), `--color-accent` (#22d3ee), `--color-cyber` (#00ff88), dark shades `--color-dark-{900..500}`. Fonts: Inter (body), Orbitron (display/accents), JetBrains Mono (code/numbers). Glass morphism utilities (`.glass`, `.glass-hover`) and gradient utilities (`.gradient-text`, `.gradient-border`) are custom CSS classes, not Tailwind utilities.

## Conventions

- All content is in French.
- JSX files use `.jsx` extension (no TypeScript).
- Inline styles are used heavily alongside Tailwind classes — don't refactor to pure Tailwind unless asked.
- Static assets (PDF, images) go in `public/` and are referenced with absolute paths (`/photo-dilan.png`).
