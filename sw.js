// 즉시 활성화
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 온라인 우선 (삼성: fetch 리스너 유무를 설치 판단에 활용)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => new Response('오프라인입니다.', { status: 503 }))
  );
});
