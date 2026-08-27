# Verificación de entrega

## Controles estáticos realizados en este entorno

- Estructura de proyecto Astro/Tailwind/TypeScript creada.
- Versiones de dependencias fijadas sin `latest`, `*` ni rangos flotantes.
- `packageManager`, `engines.node` y `.node-version` fijados.
- `pnpm-workspace.yaml` declara el paquete único (`.`) y autoriza los scripts de compilación de `esbuild` y `workerd` mediante `allowBuilds` (requisito de pnpm 11; sin esto `pnpm install`/`pnpm run` fallan con `ERR_PNPM_IGNORED_BUILDS`).
- El dominio se resuelve sólo desde `SITE_URL` en `astro.config.mjs`.
- Sitemap condicional: sólo se activa si Astro recibe un `site` real.
- No hay `example.com`, `localhost` ni `chrome-extension://` en el código fuente.
- Interfaz y contenido público redactados en español de Argentina (`es-AR`).
- Privacidad, términos y cookies son rutas independientes, no ventanas modales.
- Logo y favicon SVG/PNG 16, 32 y 180 px están incluidos localmente.

## Lockfile y verificación

El `pnpm-lock.yaml` se generó contra el registro npm con pnpm 11.24.0 y se incluye en el repositorio. `pnpm install` quedó verificado localmente con Node 24 y pnpm 11.24.0 (los scripts de compilación de `esbuild` y `workerd` se autorizaron vía `allowBuilds` en `pnpm-workspace.yaml`).

Para reproducir:

```bash
corepack enable
corepack prepare pnpm@11.24.0 --activate
pnpm install
pnpm check
pnpm build
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Después del primer `pnpm install`, debe conservarse el `pnpm-lock.yaml` generado y repetirse la instalación congelada. Si cualquiera de esos comandos falla, el proyecto todavía no debe considerarse validado para producción.
