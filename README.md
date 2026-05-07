# RateDesk.ai — Marketing Site (v1)

Marketing site for **RateDesk.ai**, the hospitality vertical product in the [Aurasea](https://www.aurasea.ai) ecosystem.

> **Status: v1 — credibility & brand presence.** Product is pre-launch. CTA is `mailto:hello@ratedesk.ai` only. No demo form, no pricing page, no login. These are added once the product is ready.

## Stack

- **Next.js 14** (App Router, static-first)
- **TypeScript**
- **Tailwind CSS** with custom design tokens matching Aurasea brand
- Bilingual: Thai (`/th`, default) + English (`/en`)
- Fonts: Fraunces (display serif) + Inter Tight (Latin body) + IBM Plex Sans Thai (Thai)
- Deploys to **Vercel** (zero config)

## Brand alignment

The site mirrors the editorial tone of `aurasea.ai` and `auraseaos.com`:

- Same TH/EN top-right toggle pattern
- Cross-link footer to Aurasea OS and the corporate site (per the domain architecture strategy doc)
- Calm, hospitality-appropriate palette: warm paper background, deep sea ink, restrained gold accents
- Editorial layout — first-letter dropcap, eyebrow labels, "Vol. 01 · 2026" rule, asymmetric grids

## Sections (v1)

1. **Hero** — tagline + lead, "Coming Soon" eyebrow
2. **Problem** — why rate decisions lag in independent SEA hotels
3. **How it works** — three-step explanation (rate recs / competitor shopping / LINE briefing)
4. **Integrations** — Easyfo, Cloudbeds, SiteMinder, Little Hotelier
5. **Design partner** — Crystal Resort credibility block
6. **FAQ** — five questions (launch date, sizing, vs Western RMS, data, pricing)
7. **Footer** — Aurasea cross-links, contact email, bilingual switch

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

The root `/` redirects to `/th`. Switch to English at `/en`.

## Deploy to Vercel

```bash
# Option A: via Vercel CLI
npx vercel

# Option B: push to GitHub, then "Import Project" in Vercel dashboard
```

Point the `ratedesk.ai` domain at the Vercel project. No env vars required for v1.

## What to add for v2 (when product is ready)

Per the domain architecture strategy doc:

- **Pricing** — tier breakdown in THB
- **Crystal Resort case study** — full customer story page
- **Demo request form** — replace mailto with a real form (collect email + property name)
- **Login button** in header → `app.auraseaos.com`
- **Schema markup** — `SoftwareApplication` JSON-LD
- **Google Analytics 4 + Search Console** verification
- **Thai-localized blog** — 2–4 cornerstone articles on hospitality revenue management

## File structure

```
app/
  layout.tsx          # Root layout, font loading, metadata
  page.tsx            # Redirects / → /th
  globals.css         # Tailwind + custom tokens, animations
  sitemap.ts          # Auto-generated sitemap
  th/page.tsx         # Thai landing
  en/page.tsx         # English landing
components/
  Landing.tsx         # Composes all sections
  Header.tsx          # Logo + nav + lang toggle
  Hero.tsx            # Hero with horizon SVG
  Problem.tsx         # Editorial dropcap section
  HowItWorks.tsx      # Three numbered steps
  Integrations.tsx    # PMS partner grid
  DesignPartner.tsx   # Crystal Resort dark section
  FAQ.tsx             # Interactive accordion (client component)
  Footer.tsx          # Aurasea ecosystem cross-links
lib/
  content.ts          # All copy in TH + EN
public/
  favicon.svg
  robots.txt
```

All copy lives in `lib/content.ts`. To edit text, you only edit one file.
