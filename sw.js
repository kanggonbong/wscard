// sw.js

// 서비스 워커가 설치될 때 즉시 활성화
self.addEventListener('install', () => {
  self.skipWaiting();
});

// 서비스 워커가 활성화될 때 클라이언트를 제어
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// [가장 중요] 네트워크 요청을 처리하는 fetch 이벤트 리스너
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // 온라인일 경우 네트워크에서 가져오고, 실패하면(오프라인) 캐시에서 찾음
    fetch(event.request).catch(() => {
      // 여기에 오프라인일 때 보여줄 기본 페이지나 메시지를 캐시에서 찾는 로직을 추가할 수 있습니다.
      // 지금은 간단하게 온라인 우선 전략을 유지합니다.
      return new Response('네트워크 연결을 확인해주세요.', { headers: { 'Content-Type': 'text/html' } });
    })
  );
});
