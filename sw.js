// sw.js - Service Worker
const CACHE_NAME = "despensa-cache-v1";
const urlsToCache = [
  "/index.html",
  "/manifest.json",
  "/style.css",
  "/sw.js",
  "/icon-192.png",
  "/icon-512.png"
];

// Instalación
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Activación
self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
