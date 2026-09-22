// Service worker para Parque de la Ciudad — La Rioja (PWA).
// Estrategia: network-first para páginas (HTML) con respaldo en caché,
// cache-first para recursos estáticos (imágenes, css, js, fuentes).

const VERSION = 'v1';
const STATIC_CACHE = `pdlc-static-${VERSION}`;
const PAGE_CACHE = `pdlc-pages-${VERSION}`;
const OFFLINE_URL = '/';

const STATIC_ASSET_RE = /\.(?:js|css|png|jpe?g|webp|avif|svg|woff2?|ico|json|webmanifest)$/i;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PAGE_CACHE).then((cache) => cache.add(OFFLINE_URL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== PAGE_CACHE)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegaciones de página: network-first, con respaldo en caché.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          const cache = await caches.open(PAGE_CACHE);
          cache.put(request, fresh.clone()).catch(() => {});
          return fresh;
        } catch (_) {
          const cached = await caches.match(request);
          return cached || caches.match(OFFLINE_URL);
        }
      })()
    );
    return;
  }

  // Recursos estáticos: cache-first con revalidación de fondo.
  if (STATIC_ASSET_RE.test(url.pathname)) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        if (cached) {
          const revalidated = fetch(request)
            .then((res) => {
              if (res && res.ok) {
                caches.open(STATIC_CACHE).then((c) => c.put(request, res.clone())).catch(() => {});
              }
              return res;
            })
            .catch(() => cached);
          return cached;
        }
        try {
          const fresh = await fetch(request);
          if (fresh && fresh.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, fresh.clone()).catch(() => {});
          }
          return fresh;
        } catch (_) {
          return cached || Response.error();
        }
      })()
    );
  }
});
