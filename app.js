if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: 'https://shlokd.github.io/fylo-landing-page/'}).then(reg => console.log('reg', reg))
  .catch(e => console.log('error registering service worker', e))
}