// install service worker
self.addEventListener('install', (evt) => {
  console.log('service worker has been installed');
});

// activate service worker
self.addEventListener('activate', (evt) => {
  console.log('service worker has been activated');
});
