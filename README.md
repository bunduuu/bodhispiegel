# Bodhi Spiegel Portfolio (Next.js)

Premium creator/strategist portfolio for Bodhi Spiegel, designed as a modern cinematic media site rather than a resume page.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` – local development
- `npm run build` – production build
- `npm run start` – run production server
- `npm run lint` – lint checks

## Content Editing

All editable portfolio content lives in:

- `src/data/site.ts`

This includes:
- Hero copy
- Metrics/proof cards
- Featured work pillars
- Case studies
- Filterable projects
- Skills groups
- About copy
- Contact links and phone toggle (`includePhone`)

## Replacing Placeholder Media

Current placeholder visuals are stored in:

- `public/placeholders/project-1.svg`
- `public/placeholders/project-2.svg`
- `public/placeholders/project-3.svg`
- `public/placeholders/project-4.svg`
- `public/placeholders/project-5.svg`

To replace with real assets:
1. Add your real thumbnails/images to `public/placeholders/` (or a new folder like `public/projects/`).
2. Update each project `image` path inside `src/data/site.ts`.
3. Add real external links to each project `link` field.

## Suggested Next Assets To Add

1. 6-10 real YouTube thumbnails tied to strongest retention wins.
2. 2-3 WPSU project links with short context blurbs.
3. 2 deeper case study pages with timeline and analytics snapshots.
4. Real social profile links for YouTube, LinkedIn, and Instagram.
5. Optional showreel clip in hero or project intro.

## GitHub Pages Deployment

This repo is configured to publish from **`/docs`**.

1. Run `npm run build:pages` to generate a static export into `docs/`.
2. In GitHub settings, set Pages source to **Deploy from a branch** and folder **`/docs`** on your publishing branch.
3. Ensure `docs/index.html` exists (this build script generates it automatically).

The `build:pages` script also:
- keeps `docs/CNAME` synced from root `CNAME` (if present)
- writes `docs/.nojekyll` for predictable asset serving

