# Hegga Pria Junaedi — Portfolio Website

Futuristic ice-blue portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Sticky nav, hamburger mobile menu
│   ├── Hero.jsx        # Hero section with futuristic orb visual
│   ├── About.jsx       # About me with glassmorphism card
│   ├── Skills.jsx      # 7-column responsive skill grid
│   ├── Projects.jsx    # Project cards with GitHub/Demo links
│   ├── Contact.jsx     # Contact form + social links
│   └── Footer.jsx      # Minimal footer
├── data/
│   ├── projects.js     # Project data
│   └── skills.js       # Skills data
├── App.jsx             # Root component
├── main.jsx            # Entry point
└── index.css           # Global styles + Tailwind + utilities
```

## 🎨 Design System

- **Theme**: Ice Blue Futuristic Dark
- **Background**: `#020617` (slate-950)
- **Accent**: `#22d3ee` (cyan-400), `#38bdf8` (sky-400), `#3b82f6` (blue-500)
- **Font**: Plus Jakarta Sans (400/500/600/700/800)
- **Effects**: Glassmorphism, gradient text, glow effects, Framer Motion animations

## ✏️ Customization

Edit `src/data/projects.js` to add your own projects.  
Edit `src/data/skills.js` to update your tech stack.  
Update social links inside `src/components/Contact.jsx`.
