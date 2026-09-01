# Deginald Photography

A Next.js 15 site for a photography business with three service lines:

- **Portraits & Mini Sessions** (`/portraits`) — $75 mini sessions, 5 edited images
- **Drone Services** (`/drone`) — aerial photo & video packages
- **Real Estate Media** (`/real-estate`) — interior/exterior photography, drone coverage, video walkthroughs, twilight edits, with a live interactive package builder/calculator

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS + shadcn/ui components (Radix primitives)
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

This site is deployed to Vercel at **deginald-photography.vercel.app**. Any push to `main` can be connected to auto-deploy via Vercel's GitHub integration (Project Settings → Git in the Vercel dashboard) if you want push-to-deploy going forward.

## Structure

```
app/
  page.tsx              # Home (hero, about, services grid, contact)
  portraits/page.tsx    # Portrait & mini session page
  drone/page.tsx        # Drone services page
  real-estate/page.tsx  # Real estate media + live package builder
components/             # Page sections
components/ui/          # shadcn/ui primitives
lib/utils.ts            # cn() className helper
```
