# Verificación de entrega

## Controles estáticos realizados en este entorno

- Estructura de proyecto Astro/Tailwind/TypeScript creada.
- Versiones de dependencias fijadas sin `latest`, `*` ni rangos flotantes.
- `packageManager`, `engines.node` y `.node-version` fijados.
- No existe `pnpm-workspace.yaml` porque es un proyecto de un solo paquete.
- El dominio se resuelve sólo desde `SITE_URL` en `astro.config.mjs`.
- Sitemap condicional: sólo se activa si Astro recibe un `site` real.
- No hay `example.com`, `localhost` ni `chrome-extension://` en el código fuente.
- Interfaz y contenido público redactados en español de Argentina (`es-AR`).
- Privacidad, términos y cookies son rutas independientes, no ventanas modales.
- Logo y favicon SVG/PNG 16, 32 y 180 px están incluidos localmente.

## Limitación del entorno de generación

El contenedor disponible para esta entrega no tiene salida de red hacia el registro npm y no trae pnpm/Astro preinstalados. Por ese motivo no es posible ejecutar de forma verificable `corepack prepare`, `pnpm install`, `astro check` ni `astro build` aquí, ni generar un `pnpm-lock.yaml` auténtico sin inventar resoluciones o integridades.

No se incluye un lockfile falso. En un entorno con acceso al registro npm, el paso correcto es:

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
