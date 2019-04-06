if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './'}).then(reg => console.log('reg', reg))
  .catch(e => console.log('error registering service worker', e))
}