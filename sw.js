const CACHE_NAME = "prl-espana-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/data.js",
  "./js/data-normativa-extra.js",
  "./js/data-detalle-rds.js",
  "./js/data-detalle-catalunya.js",
  "./js/data-detalle-saneamiento.js",
  "./js/data-casos-accidentes.js",
  "./js/data-plantillas.js",
  "./js/data-quiz-autoeval.js",
  "./js/data-contenido-expandido.js",
  "./js/data-cuadernillo.js",
  "./js/data-extra.js",
  "./js/data-extra-2.js",
  "./js/data-profesor.js",
  "./js/data-catalan.js",
  "./js/data-explicaciones.js",
  "./js/data-preguntas.js",
  "./js/ai-profesor.js",
  "./js/storage.js",
  "./js/app.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        const clone = r.clone();
        caches.open(CACHE_NAME).then((c) => c.put(e.request, clone));
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});
