const version = '1.0.0';

self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(`fylo-${version}`).then(cache => {
      return cache.addAll([
        '/',
        'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        'https://fonts.googleapis.com/css?family=Open+Sans|Raleway',
        'https://unpkg.com/normalize.css@8.0.1/normalize.css',
        '/css/flexbox.css',
        '/css/spacing.css',
        '/css/typography.css',
        '/css/styles.css',
        '/images/favicon-32x32.png',
        '/images/bg-curvy-desktop.svg',
        '/images/bg-curvy-mobile.svg',
        '/images/bg-quotes.png',
        'images/icon-access-anywhere.svg',
        '/images/icon-any-file.svg',
        '/images/icon-arrow.svg',
        '/images/icon-collaboration.svg',
        '/images/icon-email.svg',
        '/images/icon-location.svg',
        '/images/icon-phone.svg',
        '/images/icon-security.svg',
        '/images/illustration-intro.png',
        '/images/illustration-stay-productive.png',
        '/images/profile-1.jpg',
        '/images/profile-2.jpg',
        '/images/profile-3.jpg',
        '/index.html',
        '/app.js',
      ])
    })
  )
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});