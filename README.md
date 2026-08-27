# Guía Parque de la Ciudad · La Rioja

Micrositio turístico independiente y sin fines de lucro sobre el Parque de la Ciudad de La Rioja Capital, Argentina.

## Stack fijado

- Astro 7.2.7
- Tailwind CSS 4.3.3 + `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.3
- Wrangler 4.125.0
- pnpm 11.24.0
- Node.js 24.20.0 LTS

TypeScript 6 se eligió deliberadamente porque `@astrojs/check` 0.9.10 admite TypeScript 5 y 6; TypeScript 7 no se usa.

## Dominio: una sola fuente de verdad

El dominio público se define únicamente mediante `SITE_URL`, leído en `astro.config.mjs` y asignado al campo `site` de Astro.

```bash
SITE_URL=https://dominio-real.com.ar pnpm build
```

Si `SITE_URL` no existe o está vacío:

- el proyecto puede compilar sin dominio;
- no se emite canonical absoluto ni `og:url`;
- los JSON-LD omiten `url` absoluto;
- `@astrojs/sitemap` no se activa;
- no se introduce ningún dominio de ejemplo.

Cuando el dominio esté definido, basta con configurar `SITE_URL` y volver a compilar.

## Desarrollo

```bash
corepack enable
corepack prepare pnpm@11.24.0 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm dev
```

## Cloudflare Workers

El sitio se genera de forma estática y Wrangler publica `./dist` como assets de Cloudflare Workers.

```bash
pnpm deploy
```

Revisá el nombre del Worker en `wrangler.jsonc` si tu cuenta ya usa ese identificador.

## Google Analytics y consentimiento

El ID configurado es `G-HXM22WWPKP`. Analytics no se carga hasta que el visitante activa explícitamente la categoría “Analítica” en `/cookies/`. La elección se guarda en `localStorage` bajo `pdlc-cookie-preferences`.

## Fotografías

Las fotografías del parque utilizadas en la página son imágenes reales procedentes de fuentes editoriales o de visitantes identificadas en `PHOTO_SOURCES.md`. Se mantienen como recursos remotos para no redistribuir archivos fotográficos sin confirmar una licencia que permita reempaquetarlos. El logo y todos los favicons sí son locales.

Antes de una publicación definitiva, la opción preferible es obtener autorización o una fotografía con licencia de redistribución, guardarla en `public/images/` y sustituir las tres URL externas por archivos locales.

## Contenido y fuentes

La guía prioriza información de:

- Municipalidad de La Rioja / Dirección General de Turismo.
- Secretaría de Turismo de la Provincia de La Rioja.
- Portales públicos nacionales de Argentina.

Los datos volátiles —tarifas, horarios estacionales, transporte y eventos— se presentan como tales y deben verificarse antes de una visita.
