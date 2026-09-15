const CACHE_NAME = "miaomiao-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // 内容保持联网加载，确保原网站更新后仍能看到最新版本
});
