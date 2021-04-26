  
var cacheName = 'cacheBen';
var filesToCache = [
  '/game.html',
  '/index.html',
  '/game.css',
  '/game.js',
  '/fightBg.png',
  '/images/bite.png',
  '/images/kick.png',
  '/images/punch.png',
  '/images/enemy1.png',
  '/images/player1.png',
  '/sounds/bgmusic.mp3',
  '/index.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});