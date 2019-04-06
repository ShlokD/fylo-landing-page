if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: 'https://shlokd.github.io/fylo-landing-page/'})
  .then(() => {})
  .catch(() => {});
}