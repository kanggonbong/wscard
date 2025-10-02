// sw.js

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('네트워크 연결을 확인해주세요.', { headers: { 'Content-Type': 'text/html' } });
    })
  );
});