# códigus.ai — Premium Software Engineering Portfolio

A sleek, dark-mode portfolio website for **códigus.ai**, a premium software engineering and digital transformation agency. Operating as the specialized technology arm of **[SN Groups](https://sngroups.co.in)**. Built with React, TypeScript, Framer Motion, and Vite.

---

## ✨ Features

- **Animated Hero** — Split-text reveal animation with floating background orbs
- **Scrolling Marquee** — Infinite ticker strip highlighting service areas
- **Services Section** — 6 interactive cards with mouse-tracking glow effects
- **Project Index** — Minimal numbered list; click any project to open a full case study
- **Case Study Pages** — Rich detail pages with overview, problem, solution, features, tech stack, and results
- **Mobile Hamburger Menu** — Animated slide-in drawer for mobile navigation
- **Scroll Progress Bar** — Fixed top bar tracking page scroll position
- **Privacy Policy Page** — Standalone route
- **Fully Responsive** — Optimised for all screen sizes

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts) |
| Styling | Vanilla CSS (custom design system) |

---

## 📁 Project Structure

```
codigus.ai/
├── public/
│   └── projects/          # Project mockup images
│       ├── aether.png
│       ├── helius.png
│       └── synthetix.png
├── src/
│   ├── data/
│   │   └── projects.ts    # Centralised project data
│   ├── App.tsx            # Main app, routing, all sections
│   ├── ProjectDetail.tsx  # Case study detail page component
│   ├── Privacy.tsx        # Privacy policy page
│   ├── index.css          # Global design system & styles
│   └── main.tsx           # Entry point
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/sharan24072004-glitch/kodikas.ai-.git
cd kodikas.ai-

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be live at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

---

## 📝 Adding / Updating Projects

All project data lives in one file — `src/data/projects.ts`.

Each project has the following fields:

```ts
{
  id: string;           // URL-safe identifier
  title: string;        // Project name
  tagline: string;      // One-liner hook
  tags: string[];       // Tech/category tags
  image: string;        // Path to image in /public/projects/
  overview: string;     // 2–3 sentence summary
  problem: string;      // What the client needed
  solution: string;     // What was built
  features: string[];   // 4–6 key features
  stack: { name: string; category: string }[];  // Tech stack
  result: string;       // Outcomes / impact
  color: string;        // Accent hex color for the detail page
}
```

To add a new project:
1. Add its entry to the `projects` array in `src/data/projects.ts`
2. Drop its image into `public/projects/`
3. That's it — it automatically appears in the project list and gets its own case study page

---

## 📬 Contact

**codigus-ai@sngroups.co.in**

---

> Built with precision by códigus.ai
