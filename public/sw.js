const staticCacheName = 'site-static';
const assets = [
  '/',
  '/login',
  '/signup',
  '/dashboard',
  '/list',
  '/js/script.js',
  '/stylesheets/style.css',
  '/images/logo.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
];
// install service worker
self.addEventListener('install', (evt) => {
  // console.log('service worker has been installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', (evt) => {
  // console.log('service worker has been activated');
});

// fetch events
self.addEventListener('fetch', (evt) => {
  // console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
