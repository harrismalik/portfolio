<div align="center">

# Harris Malik — Portfolio

**A jaw-dropping personal site for a Full-Stack & AI Product Engineer.**

Built with React, TypeScript, Tailwind CSS and Framer Motion — an "Aurora Studio"
dark theme with an animated aurora backdrop, scroll-linked reveals, a live AI console
hero, magnetic CTAs, animated counters, and a fully responsive, accessible layout.

[Live site →](https://mharrismalik.com)

</div>

---

## ✨ Highlights

- **Aurora backdrop** — a fixed, GPU-friendly layer of drifting gradient blobs, a dotted grid and film grain.
- **Signature hero** — editorial gradient headline, a live "AI console" card, a mouse-follow spotlight and animated proof metrics.
- **Cohesive design system** — one set of tokens (color, type, spacing, motion) drives every section.
- **Motion, tastefully** — scroll reveals, magnetic buttons, marquees, sliding active-nav indicator, scroll-progress bar and count-up stats — all `prefers-reduced-motion` aware.
- **Business + engineer facing** — a Services section for buyers and a categorized tech stack + case studies for engineers.
- **Fast & accessible** — semantic HTML, focus states, lazy images, and a lean bundle (no unused 3D/animation deps).

## 🧱 Tech stack

| Area          | Choice                                                    |
| ------------- | --------------------------------------------------------- |
| Framework     | [React 18](https://react.dev) + [Vite](https://vitejs.dev) |
| Language      | [TypeScript](https://www.typescriptlang.org) (strict)     |
| Styling       | [Tailwind CSS](https://tailwindcss.com)                   |
| Motion        | [Framer Motion](https://www.framer.com/motion/)           |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/)              |
| Icons         | [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts         | Sora (display) · Inter (body) · JetBrains Mono (labels)   |

## 🚀 Getting started

```bash
# install
npm install

# copy env (used by the contact & project-inquiry forms)
cp .env.example .env   # then fill in your NotificationAPI values

# develop
npm run dev

# type-check + production build
npm run build

# preview the production build
npm run preview

# lint
npm run lint
```

## 🗂️ Project structure

```
src/
├─ components/
│  ├─ common/        # shared primitives: AuroraBackground, Reveal, SectionHeader,
│  │                 # AnimatedNumber, Marquee, Magnetic, ScrollProgress, modals
│  ├─ Header/        # sticky glass nav + scroll-spy indicator
│  ├─ Hero/          # aurora hero + live AI console card
│  ├─ Proof/         # experience wordmarks + award badges
│  ├─ About/         # story bento + portrait + stats
│  ├─ Services/      # "what I build for you" (business-facing)
│  ├─ Skills/        # categorized tech stack + marquee
│  ├─ Work/          # featured projects
│  ├─ Experience/    # scroll-linked career timeline
│  ├─ Metrics/       # animated impact band
│  ├─ Contact/       # contact form (NotificationAPI)
│  └─ Footer/
├─ lib/              # cn() class merger + shared motion tokens
├─ index.css         # design-system tokens & utility classes
└─ App.tsx           # composition + global chrome
```

## 🔧 Configuration

The contact and project-inquiry forms post to [NotificationAPI](https://www.notificationapi.com/).
Set these in `.env`:

```
VITE_NOTIFICATION_API_URL=...
VITE_NOTIFICATION_API_AUTH=...
VITE_NOTIFICATION_EMAIL=...
```

---

<div align="center">
<sub>© 2025 Muhammad Harris Malik · Designed &amp; built with care.</sub>
</div>
