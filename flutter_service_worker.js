'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9c1892e7e4290fd1c6e5226fa37e9bd3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fc854e12133c67582053bf6e01f85635",
"/": "fc854e12133c67582053bf6e01f85635",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "130266192d5c14e7c0a2f7ee71780fda",
"assets/AssetManifest.bin.json": "67a25f6c519f5fde979e10210b861651",
"assets/NOTICES": "f7844b9816e4ff524e64706320633de8",
"assets/fonts/MaterialIcons-Regular.otf": "cc38d7d718830fc168354874cb2d8acc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "001ae905e000193e3502c97dee6645b8",
"assets/assets/icons/dark_mode.svg": "9362ffb6b3ba7ac813df6f451a1e7089",
"assets/assets/icons/map.svg": "a90974c67a47210e24a48541b1693d4b",
"assets/assets/icons/light_mode.svg": "1af50e41f0ef344b0d67bd6d2994452b",
"assets/assets/icons/bolt.svg": "5d1f0a28a7f2f8909c3bf45b2d81498e",
"assets/assets/icons/list.svg": "54e0fc1a81f6e4817336185a70353a04",
"assets/assets/icons/location.svg": "7ca7c73d4f52a77f1b7d58aea4932d90",
"assets/assets/icons/eye.svg": "1b68c8722cc426a1b5f20346a7422695",
"assets/assets/icons/credit_card.svg": "99a730e92e4d8e963178ef8a0418e544",
"assets/assets/icons/chevron_right.svg": "c2e5e9025c95c6451ec8fa7908eaca2f",
"assets/assets/icons/check_circle.svg": "8a57ce1fa75d3ae52d79d7af4d441942",
"assets/assets/icons/wifi_off.svg": "1ef539b235cf3717bcdba15e76361acf",
"assets/assets/icons/gamepad.svg": "459f71d68b8dd2ab98ea78a77c4fa000",
"assets/assets/icons/search.svg": "6bf4aab07d4208c0317055f09529c951",
"assets/assets/icons/logout.svg": "252d6dc71a6f98b57299750486f8a898",
"assets/assets/icons/trash.svg": "42362222508308a6f011a97b883aceff",
"assets/assets/icons/keyboard.svg": "ebbf6659df976216bf36497af8e77122",
"assets/assets/icons/explore.svg": "20009a9e8ae5b65e1b36209b31d25216",
"assets/assets/icons/play_circle.svg": "19cc21eb14b2e4458f88f59a5b809b87",
"assets/assets/icons/send.svg": "a8041a9745084a4db5649bb4c7cf65b9",
"assets/assets/icons/phone.svg": "76eac7f799ea78a49f8b4c34c0ee5547",
"assets/assets/icons/calendar_today.svg": "3313086f538e98240fcbf948d314798d",
"assets/assets/icons/map_outlined.svg": "537461ffc0002e712ccc11b87f93ea10",
"assets/assets/icons/search_off.svg": "d6d4a38920e62dff55b0a32ad98ade25",
"assets/assets/icons/wallet.svg": "47b61f292fc56a15f69952f10d592f52",
"assets/assets/icons/edit.svg": "fa76676a6b83835d07f190745c7df326",
"assets/assets/icons/monitor.svg": "4c0bbaa3d6777beeefd53da7271f8c13",
"assets/assets/icons/mail.svg": "3182f0093891e328f56bc5d4d9b66db7",
"assets/assets/icons/photo.svg": "49f66f484bc501322fe9b4d9ef32e523",
"assets/assets/icons/clock.svg": "0df2d2bd1858aef9771e27c2c6d2bda4",
"assets/assets/icons/lock.svg": "eefa75c108aef0d2ca7d58d143b36572",
"assets/assets/icons/person_outlined.svg": "455d842947a4aac0ad7320a380ce7cf9",
"assets/assets/icons/star.svg": "319657d20420039c2fd7a74a75af4860",
"assets/assets/icons/mouse.svg": "c4beb4ce25cbf3f24f16c0acd80e2efd",
"assets/assets/icons/instagram.svg": "2224dc2739748a2225573cd4cca96879",
"assets/assets/icons/chevron_left.svg": "ace2ee1878f38f99ac4b4dffdf516ec0",
"assets/assets/icons/computer.svg": "268fb5ec40dfe782986e2871df3c5556",
"assets/assets/icons/warning.svg": "2af2da8d371680bad189b5043763888a",
"assets/assets/icons/crosshair.svg": "47105ba8d1cd8b249b74d5872623eff5",
"assets/assets/icons/notifications.svg": "b20a8c79ca764bf787674c0e3af9d5f8",
"assets/assets/icons/settings.svg": "4bf7e9edecc4ffe4e99433f6c34bbcc1",
"assets/assets/icons/close.svg": "03374d5ed4156cbea93944b72999d8c2",
"assets/assets/icons/explore_outlined.svg": "6200c820b660ed2d54b92f725c26c752",
"assets/assets/icons/person.svg": "455d842947a4aac0ad7320a380ce7cf9",
"assets/assets/icons/info.svg": "10c018e299593f926997984ed2d4a033",
"assets/assets/icons/error.svg": "3a153d236822455cbcbbaf1a5e6e8fb5",
"assets/assets/icons/chevron_down.svg": "187bd3c523792d97db515d57a8f1e573",
"assets/assets/icons/headphones.svg": "e7f0b9a01a0357c32c2461ce459f8db9",
"assets/assets/icons/globe.svg": "875e9c4a36ca215ef8f9c2fc30b416d7",
"assets/assets/icons/eye_off.svg": "cef8f080373ec72a305b873d644a4e7e",
"assets/assets/map/style_light.json": "6684da4ca829a703054ee0869158464d",
"assets/assets/map/style_dark.json": "bef6e2de569ee9ae866c599c824b2cec",
"assets/assets/map/tashkent.mbtiles": "66c0778cebddb7b134f90bb4f9d641a3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"main.dart.js": "a4bcd6bbd782c35c6f595e06b7d8dfe9",
"flutter_bootstrap.js": "97fe43652d03aa68e4a3db8021a784e1",
"manifest.json": "a557db73668aae832682ecbd61e48423"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
