self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('nullverse').then(cache =>
      cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js'
      ])
    )
  );
});
