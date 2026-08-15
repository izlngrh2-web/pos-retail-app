self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

// Cache-bypassing fetch (agar aplikasi selalu memuat data terbaru dari jaringan)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
