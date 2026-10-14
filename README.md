# Kova Development — website

Marketing site for Kova Development, a web design & development studio. Built with React + Vite.

## Run locally

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build in dist/
```

## Where to edit

- `src/App.jsx` — page sections and content. Constants at the top:
  - `CASES` — real client case studies (Vantra Collective, Bloom Pilates Studio)
  - `PACKAGES`, `RUNNING_BASE`, `RUNNING_ADDONS`, `CURRENCY` — pricing (EUR)
  - `SOCIALS` — Instagram / TikTok / LinkedIn URLs (empty = shown as "coming soon")
  - `FAQS`, `SERVICES`, `STEPS`
- `src/legal.js` — Privacy, Terms and Cookie policy templates and company details (`COMPANY`). Replace every `[bracketed]` placeholder before launch.
- `src/components/Mockup.jsx` — code-drawn website mockups.
- `src/index.css` — design tokens (colors, fonts) at the top.
