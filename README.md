# Singh's Roti Shop

Marketing and menu website for Singh's Roti Shop, a family-owned Trinidadian and West Indian restaurant with two locations in the Boston area (Dorchester and Revere Beach). A two-time _Best of Boston_ winner, serving the neighborhood for thirty years.

The site is built so the family can manage their own menu and reviews through a headless CMS, with no code changes required.

**Live site:** singhsrotiboston.com

---

## Tech stack

- **Next.js** (App Router) with **TypeScript**
- **Tailwind CSS v4** for styling, driven by semantic design tokens
- **Sanity** as the headless CMS (menu and reviews), with the Studio embedded in the app
- **Framer Motion** for scroll and interaction animation
- Deployed on **Vercel**

---

## Features

- **Config-driven content.** All business content (locations, hours, links, story, hero copy) lives in one file, so a single edit updates the whole site.
- **CMS-managed menu.** An 85-item, 10-category menu the family edits themselves in the Studio.
- **CMS-managed reviews.** A customer-review type feeding a pausable review marquee.
- **Per-location ordering.** Each shop carries its own DoorDash and Grubhub links, embedded map, hours, and click-to-call.
- **Recognition band, catering CTA, and story section** to carry the brand and drive orders.
- **Motion system** with a shared easing curve and reusable variants, plus `prefers-reduced-motion` support.
- **SEO ready.** `LocalBusiness` structured data for both locations and an Open Graph share card for social links.

---

## Architecture

The project is intentionally config-driven so it stays easy to maintain and reskin.

```
app/
  layout.tsx            Root layout: fonts, nav, metadata, motion provider
  page.tsx              Home page: a clean stack of sections
  globals.css           Design tokens (@theme) and the marquee keyframes
  lib/
    site.ts             Single source of truth for all business content
    motion.ts           Shared motion variants (reveal, stagger, imageReveal)
  components/           One file per section; each owns its own motion
    Nav.tsx  Hero.tsx  Story.tsx  Menu.tsx  Press.tsx
    Reviews.tsx  Catering.tsx  Locations.tsx  Footer.tsx
    MotionProvider.tsx  StructuredData.tsx
  studio/[[...tool]]/   Embedded Sanity Studio route (/studio)
sanity/
  schemaTypes/          category, menuItem, review
  queries.ts            GROQ queries
  lib/                  Typed data fetchers (getMenu, getReviews)
```

Two ideas do most of the work:

- **`app/lib/site.ts`** is the single source of truth for content. Components read from it, so business details are never hardcoded in the UI.
- **`app/lib/motion.ts`** defines the easing and timing once. Every section pulls from the same primitives, so the motion feels varied but coherent.

---

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Add environment variables (see below)
#    create a file named .env.local in the project root

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site and [http://localhost:3000/studio](http://localhost:3000/studio) for the CMS.

---

## Environment variables

Create `.env.local` in the project root:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID="fi1fu77v"
NEXT_PUBLIC_SANITY_DATASET="production"
```

Both values are public by design (the `NEXT_PUBLIC_` prefix exposes them to the browser). The same two variables must be added in the Vercel project settings for production builds.

---

## Managing content

**Menu and reviews** are edited in the Studio at `/studio`, no code required.

**Everything else** (locations, hours, phone numbers, ordering links, story text, hero copy) lives in `app/lib/site.ts`. Edit that one file and every section updates.

### Bulk-importing the menu

The full menu can be loaded into Sanity from an NDJSON file:

```bash
npx sanity dataset import singhs-menu.ndjson production --replace
```

`--replace` overwrites existing documents cleanly, so the import is safe to re-run after edits.

---

## Deployment

Deployed on Vercel from the `main` branch.

1. Import the repo in Vercel and add the two environment variables above.
2. After the first deploy, add the live domain to the project's **CORS origins** in [sanity.io/manage](https://www.sanity.io/manage) so the Studio works in production.
3. Update `siteUrl` in `app/layout.tsx` to the live domain so share cards and structured data resolve to absolute URLs.

---

## Credits

Designed and built by **Evan Boodoosingh** — [evanboodoosingh.vercel.app](https://evanboodoosingh.vercel.app)