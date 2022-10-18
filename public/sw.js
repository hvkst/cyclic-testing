const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  // '/login',
  // '/signup',
  // '/dashboard',
  // '/list',
  '/js/appSw.js',
  '/js/script.js',
  '/js/bootstrap.bundle.min.js',
  '/stylesheets/style.css',
  '/stylesheets/bootstrap.min.css',
  '/images/logo.png',
  '/images/favicon.ico',
  '/images/touch/homescreen512.png',
  '/images/touch/homescreen192.png',
  '/images/touch/apple-touch-icon.png',
  '/manifest.json',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css',
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
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((key) => key !== staticCacheName).map((key) => caches.delete(key)));
    })
  );
});

// fetch events
self.addEventListener('fetch', (evt) => {
  // console.log('fetch event', evt);
  // const reqClone = evt.request.clone();
  // evt.respondWith(
  //   caches.match(reqClone).then((cacheRes) => {
  //     return cacheRes || fetch(reqClone);
  //   })
  // );
});
