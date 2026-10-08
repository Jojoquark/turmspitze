// Turmspitze – Service Worker: speichert das Spiel fuer den Offline-Betrieb.
// Strategie: sofort aus dem Speicher laden, im Hintergrund aktualisieren.
const VERSION = 'turmspitze-202610080716';
const DATEIEN = [
  './',
  './index.html',
  './manifest.webmanifest',
  './online-config.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return c.addAll(DATEIEN);
  }).then(function () {
    return self.skipWaiting();
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (namen) {
    return Promise.all(namen.filter(function (n) {
      return n.indexOf('turmspitze-') === 0 && n !== VERSION;
    }).map(function (n) {
      return caches.delete(n);
    }));
  }).then(function () {
    return self.clients.claim();
  }));
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) {
    return;
  }
  // Zugangsdaten fuer den Online-Modus immer zuerst aus dem Netz (damit Aenderungen sofort wirken)
  if (/online-config\.js$/.test(new URL(req.url).pathname)) {
    e.respondWith(fetch(req).then(function (antwort) {
      if (antwort && antwort.ok) {
        const kopie = antwort.clone();
        caches.open(VERSION).then(function (cache) {
          cache.put(req, kopie);
        });
      }
      return antwort;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true });
    }));
    return;
  }
  e.respondWith(caches.open(VERSION).then(function (cache) {
    return cache.match(req, { ignoreSearch: true }).then(function (treffer) {
      const netz = fetch(req).then(function (antwort) {
        if (antwort && antwort.ok) {
          cache.put(req, antwort.clone());
        }
        return antwort;
      }).catch(function () {
        return treffer || (req.mode === 'navigate' ? cache.match('./index.html') : undefined);
      });
      return treffer || netz;
    });
  }));
});
