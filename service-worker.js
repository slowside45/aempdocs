/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f878acf5b823f6e0374fa7081f2e72e1"
  },
  {
    "url": "assets/css/0.styles.c76dfc91.css",
    "revision": "9a1f3000e97d6a9af5ddb784aff5de5f"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/back.877ccc86.png",
    "revision": "877ccc8628e0bc565d666b590e28578b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.588a79e4.js",
    "revision": "f09fba06cac62919ba147dcb7c18a04d"
  },
  {
    "url": "assets/js/3.3124b496.js",
    "revision": "2658bc1cafdd5491053484d608d46bb4"
  },
  {
    "url": "assets/js/4.8292baef.js",
    "revision": "6245d00217462fc398fa1f536b07b623"
  },
  {
    "url": "assets/js/5.dc97485c.js",
    "revision": "893165c1130fabf4eb9fba79d16bdaae"
  },
  {
    "url": "assets/js/6.45041405.js",
    "revision": "1f5ffa053959c169e7cd95b0f4859450"
  },
  {
    "url": "assets/js/7.40d45f9b.js",
    "revision": "0d02ae6e716d311c2d0c1dc9ed2480a5"
  },
  {
    "url": "assets/js/app.350ee593.js",
    "revision": "c86f474ecdaf3a7b69f8697a6e7a23d2"
  },
  {
    "url": "img/back.png",
    "revision": "877ccc8628e0bc565d666b590e28578b"
  },
  {
    "url": "index.html",
    "revision": "90ce9f794a28ba2d981952843d70dcd4"
  },
  {
    "url": "platform/index.html",
    "revision": "3e5773ebd579086914f1089cf94e5bcf"
  },
  {
    "url": "platform/rebuild.html",
    "revision": "068da1e45fbdef5174f05fdd1d4f1faa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
