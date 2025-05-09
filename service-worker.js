const CACHE_NAME = "triage-cache-v1";
const BASE_PATH = "/gp-triage-pwa/";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        BASE_PATH,
        BASE_PATH + "index.html",
        BASE_PATH + "manifest.json",
        BASE_PATH + "icons/icon-192.png",
        BASE_PATH + "icons/icon-512.png"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
