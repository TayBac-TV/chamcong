// Service worker tối giản: giúp Android nhận diện là app cài được.
// Luôn lấy bản mới nhất từ mạng (không lưu cache) để cập nhật tức thì.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<meta charset="utf-8"><div style="font-family:sans-serif;padding:40px;text-align:center">Không có mạng. Kiểm tra kết nối rồi mở lại app.</div>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
