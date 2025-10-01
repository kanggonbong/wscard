// sw.js

// 서비스 워커가 설치될 때 즉시 활성화되도록 합니다.
self.addEventListener('install', () => self.skipWaiting());

// 서비스 워커가 활성화될 때 클라이언트를 제어하도록 합니다.
self.addEventListener('activate', () => self.clients.claim());

// 네트워크 요청을 가로채는 'fetch' 이벤트 리스너 (가장 중요!)
// 이 부분이 있어야 삼성 인터넷에서 설치가 가능해집니다.
self.addEventListener('fetch', event => {
  // 현재는 온라인 우선 전략을 사용합니다.
  // 오프라인 기능을 더 추가하고 싶다면 이 부분을 확장할 수 있습니다.
  event.respondWith(fetch(event.request));
});
