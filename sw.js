const version = '1.0.0';
const repository = 'https://shlokd.github.io/fylo-landing-page';

self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(`fylo-${version}`).then(cache => {
      return cache.addAll([
        '/',
        'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        'https://fonts.googleapis.com/css?family=Open+Sans|Raleway',
        'https://unpkg.com/normalize.css@8.0.1/normalize.css',
        `${repository}/css/flexbox.css`,
        `${repository}/css/spacing.css`,
        `${repository}/css/typography.css`,
        `${repository}/css/styles.css`,
        `${repository}/images/favicon-32x32.png`,
        `${repository}/images/bg-curvy-desktop.svg`,
        `${repository}/images/bg-curvy-mobile.svg`,
        `${repository}/images/bg-quotes.png`,
        `${repository}/images/icon-access-anywhere.svg`,
        `${repository}/images/icon-any-file.svg`,
        `${repository}/images/icon-arrow.svg`,
        `${repository}/images/icon-collaboration.svg`,
        `${repository}/images/icon-email.svg`,
        `${repository}/images/icon-location.svg`,
        `${repository}/images/icon-phone.svg`,
        `${repository}/images/icon-security.svg`,
        `${repository}/images/illustration-intro.png`,
        `${repository}/images/illustration-stay-productive.png`,
        `${repository}/images/profile-1.jpg`,
        `${repository}/images/profile-2.jpg`,
        `${repository}/images/profile-3.jpg`,
        `${repository}/index.html`,
        `${repository}/app.js`,
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