// KAWREX service worker
// Makes the site installable and keeps it working when the network drops.

const CACHE = "kawrex-v38";
const FILES = [
  "./",
  "./index.html",
  "./iphone.html",
  "./android.html",
  "./software.html",
  "./gadgets.html",
  "./gaming.html",
  "./playstation.html",
  "./product.html",
  "./cart.html",
  "./checkout.html",
  "./swap.html",
  "./style.css",
  "./app.js",
  "./products.js",
  "./manifest.json",
  "./logo-mark.png",
  "./favicon.ico",
  "./favicon-32.png",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./iphone-hero.jpg"
];

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(FILES).catch(function () {
        // a missing file should not stop the install
      });
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE) return caches.delete(key);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;
  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then(function (cached) {
      if (cached) return cached;
      return fetch(request).then(function (response) {
        const copy = response.clone();
        caches.open(CACHE).then(function (cache) {
          cache.put(request, copy).catch(function () {});
        });
        return response;
      }).catch(function () {
        return caches.match("./index.html");
      });
    })
  );
});
