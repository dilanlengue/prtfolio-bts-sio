---
name: ui-ux-pro-max
description: "UI/UX design intelligence. 67 styles, 161 palettes, 57 font pairings, 25 charts, 16 stacks (React, Next.js, Vue, Svelte, Astro, SwiftUI, React Native, Flutter, Nuxt, Nuxt UI, Tailwind, shadcn/ui, Jetpack Compose, Three.js, Angular, Laravel). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient."
---

# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 16 technology stacks. Searchable database with priority-based recommendations.

## How to Use

### Generate a Design System

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

### Domain Search

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

Available domains: `product`, `style`, `typography`, `color`, `landing`, `chart`, `ux`, `react`, `web`, `prompt`

### Stack Search

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack <stack>
```

Available stacks: `html-tailwind`, `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `nuxt-ui`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

## Quick Reference

| Priority | Category | Key Checks |
|----------|----------|------------|
| 1 | Accessibility (CRITICAL) | Contrast 4.5:1, Alt text, Keyboard nav, Aria-labels |
| 2 | Touch & Interaction (CRITICAL) | Min 44x44px targets, 8px spacing, Loading feedback |
| 3 | Performance (HIGH) | WebP/AVIF, Lazy loading, CLS < 0.1 |
| 4 | Style Selection (HIGH) | Match product type, Consistency, SVG icons |
| 5 | Layout & Responsive (HIGH) | Mobile-first, Viewport meta, No horizontal scroll |
| 6 | Typography & Color (MEDIUM) | Base 16px, Line-height 1.5, Semantic tokens |
| 7 | Animation (MEDIUM) | 150-300ms, Motion conveys meaning |
| 8 | Forms & Feedback (MEDIUM) | Visible labels, Error near field |
| 9 | Navigation (HIGH) | Predictable back, Bottom nav <= 5 |
| 10 | Charts & Data (LOW) | Legends, Tooltips, Accessible colors |
