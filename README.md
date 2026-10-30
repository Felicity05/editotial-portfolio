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
npm test
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

## Vercel Analytics visit count

`@vercel/analytics/next` is rendered once in the root layout. Enable Web Analytics for the project in Vercel, then deploy this code so production page views are collected. Enabling analytics in the dashboard alone does not install its tracking script in an existing deployment.

The edition-strip number is **total production page views across the entire project since Web Analytics was enabled**, including both portfolio pages. Refreshes and navigation can add page views; this is not unique people or one visit per session. Preview/development traffic does not contribute to the production count endpoint. The visible newspaper “VOL. 1 · NO.” design is unchanged; the number’s tooltip/accessibility label identifies its metric.

`getTotalVisits()` in `src/lib/edition.ts` runs only on the server and queries Vercel’s documented [`visits/count` API](https://vercel.com/docs/rest-api/web-analytics/counts-page-views) through `src/lib/vercel-analytics.ts`. No date filter is sent, so this is not limited to the dashboard’s default reporting window. The request uses Next.js’s data cache with five-minute revalidation and a three-second timeout. Analytics processing and caching mean the number is not guaranteed to increase instantly after each visit. No database, browser counter, or additional analytics dependency is used.

### Production setup

In Vercel **Project → Settings → Environment Variables**, configure these server-only values for Production:

| Variable                 | Value                                                                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VERCEL_ANALYTICS_TOKEN` | A [Vercel access token](https://vercel.com/account/tokens) authorized for the account/team that owns this project.                                                                                                            |
| `VERCEL_PROJECT_ID`      | Your `prj_...` project ID. Vercel exposes this system variable when **Automatically expose System Environment Variables** is enabled in project settings. For local development, copy the ID from Project Settings → General. |
| `VERCEL_TEAM_ID`         | The owning `team_...` ID for team-owned projects. Find it in Team Settings → General. Leave unset for personal-account projects.                                                                                              |

Never use a `NEXT_PUBLIC_` prefix for the token, commit it to Git, or paste it into chat. The access token is separate from the tracking package and is not automatically created by enabling analytics. Apply environment changes with a new production deployment; this implementation does not deploy the site.

For local verification, copy `.env.example` to `.env.local`, enter the same values, and restart Next.js. Environment files stay ignored by Git; only the blank example is tracked. Without credentials, the edition strip intentionally shows **—**, not a fabricated zero. A valid API response with zero page views displays **0**.

### Verification and troubleshooting

1. Open the production site and check Vercel’s Analytics dashboard for incoming page views.
2. Check the edition-strip number after analytics processing and the five-minute cache interval.
3. If the number remains “—”, check the required variables and token scope. Server logs report sanitized HTTP status codes for rejected requests (for example, 401/403 for credentials/scope, 429 for rate limiting) without logging the token or API response body.
4. API outages, timeouts, invalid responses, and missing configuration leave the portfolio available with “—”.

`npm test` runs the analytics contract/failure tests using Node’s built-in test runner and TypeScript stripping (Node 22.18+ or Node 24 recommended). Tests cover authenticated requests, team scope, all-time query semantics, page views versus visitors, zero counts, missing configuration, malformed responses, rate limits, network failures, and timeouts. Live API verification still requires real Vercel credentials.

## Styling configuration

Tailwind 4 uses its standard `@tailwindcss/postcss` integration in `postcss.config.mjs`. This replaces the starter’s Turbopack loader, which stripped CSS Module scoping and cached stale shared tokens. Use utilities directly for layout, spacing, type, borders, interaction states, and responsiveness. The shared theme defines `sm` (40rem), `md` (48rem), and `lg` (64rem); `md` switches to desktop columns, and `lg` expands the edition strip. Reuse these named breakpoints rather than introducing isolated media queries.

There are currently no effects complex enough to need a CSS Module. Add a colocated module only for complex component-specific effects; do not duplicate utility-owned properties. No isolated third-party widgets are present. If introduced, style their internals through the widget’s documented styling API.

`prettier.config.mjs` loads `prettier-plugin-tailwindcss` with the v4 stylesheet entry point. Run `npm run format` to format code and sort utilities, or `npm run format:check` to verify. Shared class groups use the lightweight `classes()` helper, also registered with the formatter so control and variant definitions are sorted. No JavaScript Tailwind configuration is needed.

## Visual reference

The first desktop mockup (UI specimen edition) and the mobile mockup guide layout, fine rules, typography, project order, and spacing. The two mobile columns in the reference represent consecutive portions of this single page. Actual project screenshots intentionally replace the reference’s concept artwork. User-requested copy takes precedence over older mockup text. Unknown contact and case-study links remain unconfigured.

## About page

The dedicated `/about` route follows the supplied About mockup and shares the masthead, edition strip, footer, links, dividers, theme, and breakpoints with the homepage. Each new section has its own component file. Navigation and the homepage teaser link to `/about`; “View my work” returns to `/#work`.

Edit the biography and approach copy in `src/data/aboutContent.ts`. Set `aboutContent.portrait` to an image path, dimensions, alt text, and caption when a real portrait is available; the current silhouette is explicitly labeled as a placeholder. The supplied résumé is linked at `/files/resume.pdf`; edit `portfolioLinks.resume` in `src/data/projects.ts` to change it. If the value is cleared, résumé labels show “Coming soon” and do not render dead links.
