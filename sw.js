/* Klassali Terrain — service worker : l'appli reste disponible sans réseau.
   À chaque nouvelle version livrée, le numéro CACHE change : l'ancien cache est supprimé
   et la page affiche « mise à jour installée » au prochain lancement. */
const CACHE = 'klassali-terrain-v2';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // polices Google etc. : réseau direct, sinon repli natif du navigateur
  // Page et fichiers de l'appli : réseau d'abord (pour prendre les mises à jour), cache sinon (hors-ligne).
  event.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html')))
  );
});
