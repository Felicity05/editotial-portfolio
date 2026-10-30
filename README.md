# Arelys Alvarez — Interfaces & rhythm.

An editorial portfolio built in the existing Next.js 16 / React / TypeScript starter. One continuous, server-rendered page; no deployment or new app scaffold.

## Run locally

```sh
npm install
npm run dev
```

Validation:

```sh
npm run format:check
npm run lint
npx tsc --noEmit
npm run build
```

The production build needs network access to Google Fonts. Instrument Serif, Source Serif 4, and IBM Plex Mono are loaded with `next/font/google` in `src/app/layout.tsx` and self-hosted in the resulting build.

## Editing guide

- **Colors, type, spacing, rules, page width:** `src/app/globals.css`. Tailwind v4’s CSS-first `@theme` defines colors, spacing, typography, image ratios, layout widths, and breakpoints. `@theme inline` maps the fonts loaded by `next/font/google`. Components use these tokens through Tailwind utilities. Global CSS only adds base and accessibility defaults.
- **Project copy, technologies, order, URLs, images, alt text, captions:** `src/data/projects.ts`. Keep the array order intact for the requested reading order. Layout values are `lead`, `column`, and `wide`.
- **Image files:** `public/images/`. Replace a file and update its dimensions, alt text, and caption in the data file. El Solar and Moodify images are real public website screenshots captured October 28, 2026. El Solar was showing its no-active-events state. The UI specimen and cloud dashboard are illustrative SVG previews, not evidence of shipped features. The About collage is generated illustrative artwork, not personal photography. Captions disclose these distinctions.
- **Contact and social links:** `portfolioLinks` in `src/data/projects.ts`. Set `email` to a verified email address (without `mailto:`), and `github` / `linkedin` to full verified URLs. Until configured, social labels are not anchors and the “Let’s talk” disclosure shows a coming-soon message. Component-library and contribution URLs are also `null`: set them only when a real case-study or contributions page is supplied. No placeholder URL or invented ownership claim is rendered.
- **Reusable components:** Each React component has its own kebab-case file in `src/components/`, with direct named imports. `masthead.tsx`, `edition-strip.tsx`, `introduction.tsx`, `selected-work.tsx`, `quote-band.tsx`, `about.tsx`, and `footer.tsx` compose the page. Project articles, headings, media/captions, navigation, social links, controls, dividers, and technology lists are separate reusable components. `control-styles.ts` shares utility classes across controls. Page composition: `src/app/page.tsx`.
- **Edition date and analytics:** `src/lib/edition.ts`. The date is computed on every server request using `America/New_York`, including its displayed year and machine-readable date. `connection()` prevents a stale build-time date. No Cache Components are enabled.

## Missing analytics connection

The starter contains no analytics provider, database, credentials, or existing all-time visit source. `getTotalVisits()` deliberately returns `null`, rendered as **VOL. 1 · NO. —** with an accessible “Visit count unavailable” label. Replace that function with a server-only query to an existing all-time analytics source when one is provided. Do not substitute random numbers, page views from the current session, or localStorage.

## Styling configuration

Tailwind 4 uses its standard `@tailwindcss/postcss` integration in `postcss.config.mjs`. This replaces the starter’s Turbopack loader, which stripped CSS Module scoping and cached stale shared tokens. Use utilities directly for layout, spacing, type, borders, interaction states, and responsiveness. The shared theme defines `sm` (40rem), `md` (48rem), and `lg` (64rem); `md` switches to desktop columns, and `lg` expands the edition strip. Reuse these named breakpoints rather than introducing isolated media queries.

There are currently no effects complex enough to need a CSS Module. Add a colocated module only for complex component-specific effects; do not duplicate utility-owned properties. No isolated third-party widgets are present. If introduced, style their internals through the widget’s documented styling API.

`prettier.config.mjs` loads `prettier-plugin-tailwindcss` with the v4 stylesheet entry point. Run `npm run format` to format code and sort utilities, or `npm run format:check` to verify. Shared class groups use the lightweight `classes()` helper, also registered with the formatter so control and variant definitions are sorted. No JavaScript Tailwind configuration is needed.

## Visual reference

The first desktop mockup (UI specimen edition) and the mobile mockup guide layout, fine rules, typography, project order, and spacing. The two mobile columns in the reference represent consecutive portions of this single page. Actual project screenshots intentionally replace the reference’s concept artwork. User-requested copy takes precedence over older mockup text. Unknown contact and case-study links remain unconfigured.

## About page

The dedicated `/about` route follows the supplied About mockup and shares the masthead, edition strip, footer, links, dividers, theme, and breakpoints with the homepage. Each new section has its own component file. Navigation and the homepage teaser link to `/about`; “View my work” returns to `/#work`.

Edit the biography and approach copy in `src/data/aboutContent.ts`. Set `aboutContent.portrait` to an image path, dimensions, alt text, and caption when a real portrait is available; the current silhouette is explicitly labeled as a placeholder. The supplied résumé is linked at `/files/resume.pdf`; edit `portfolioLinks.resume` in `src/data/projects.ts` to change it. If the value is cleared, résumé labels show “Coming soon” and do not render dead links.
