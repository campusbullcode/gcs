# Globe Consulting Services

Recruitment & workforce solutions landing page, built with **Vite + React**.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploy to Vercel

The repo includes `vercel.json` (framework preset: `vite`). Either:

- **Dashboard:** import the Git repo at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Vite — build command `npm run build`, output dir `dist`.
- **CLI:** `npm i -g vercel && vercel` (then `vercel --prod`).

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Vite entry — fonts, meta, `#root` mount |
| `src/main.jsx` | React bootstrap |
| `src/App.jsx` | Renders the page markup, runs interactions on mount |
| `src/markup.js` | Page HTML (hero, services, industries, process, contact, footer) |
| `src/interactions.js` | Scroll reveals, counters, SVG globe builder, theme switcher, form |
| `src/styles.css` | All styling + responsive rules |
| `public/assets/globe-logo.png` | Brand logo |

The floating control (bottom-right) switches between the **Editorial / Bold** directions and accent colors; the choice persists in `localStorage`.
