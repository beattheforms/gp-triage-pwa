const CACHE_NAME = "triage-cache-v1";
const BASE = "/gp-triage-pwa/";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        BASE,
        BASE + "index.html",
        BASE + "manifest.json",
        BASE + "icons/icon-192.png",
        BASE + "icons/icon-512.png"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
