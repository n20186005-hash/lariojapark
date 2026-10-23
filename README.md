# Parque de la Ciudad, La Rioja

Spanish visitor guide for https://lariojapark.com. Four existing routes cover the guide, privacy, terms and analytics settings.

Use Node 24.12 or newer in the 24 series and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Astro builds static pages into `dist`. The existing Cloudflare project is `lariojapark`; `src/worker.ts` serves ASSETS and handles the canonical HTTP entrance and actual 404 statuses. Source-map upload is disabled. A local build does not imply deployment.

Weather remains a client-side Open-Meteo forecast with validation, model time and honest unavailable state. No weather values are captured at build time. The existing optional Google Analytics measurement ID is retained with verified stored choices and immediate runtime withdrawal. Map and weather requests are separate services disclosed in the privacy page.

Public facts and image provenance are described in `SOURCES.md` and `PHOTO_SOURCES.md`.
