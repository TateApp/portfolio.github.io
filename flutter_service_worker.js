'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "d903008ddab0d2a86fa0e4fcbbeaa16c",
"/": "d903008ddab0d2a86fa0e4fcbbeaa16c",
"main.dart.js": "a87e76d584b949387a7d9fdb21389844",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "45592f97b341124ccadc1d3c25cfb83c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/2c26769fa818f8e4dad0602f2e150538cd34d4": "a5c978301e46f50edd6d1eb1607f7f8e",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/9e/e08673c9af7d5dc9abc5dcd28ddee604002e3d": "c1ddad40fdc2a8949771e6dae3e1b8cd",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/9c/0176a844d3e4ca2d63ea3945987c7541f0b83b": "d256c9e70f35a105ac3774a7ddbc8c87",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/d9/2a1ce085ef8acc348d1ed6c61583331e34deef": "a4eb592bb4f700a268a1d2019bca90e6",
".git/objects/bd/6d2fd04de34ed7a44388e8402733b2941dff53": "f32c663f6e4d5556659ea260eeebb275",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/8ab80e0b8ab1bfd4cd32ea377c5430fe9ffb81": "d79ec3363d9f75a01f66eb2674e28705",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/ee65e834ce0e177f279dcaf0f473fd3c4cfba5": "6553f30c28fce6a4069b998b58cd2305",
".git/objects/f2/f53949469523af415eb160dccb8b114cc51e69": "685a888a5cb83b933b16e3826db776e1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ec/186cc328bb69e9c2b3ac548a0eadf11ce22e7e": "3405692b607009a9fa2864abb17ffe4e",
".git/objects/ec/ffefe1724a88d9e3531a5fd8eb43e4963badfd": "201cb73022f810e6f2a81593fc7573d5",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/1a0f3b63b43fd2f33cc35fe834bf215f7bea34": "9ed85dbd13b8c36788f7bc8b397c7e29",
".git/objects/18/ab5896037b2ca415b63c48f5e2f2e2b48d8a93": "e822ecae7a1d405ba8b32430b1462f2f",
".git/objects/27/ba4284f2cec0bd8afd8800d7c6470871f4b8f9": "2abe09ada888c36fdc394910da01ff4e",
".git/objects/7d/cf2f1279a21e9638631aa8a445d69d4116581f": "ce0f62ff14d410411895bbc703c5da18",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/17a4baa6b68e34ae88e8cb3233dbb3068e5b24": "44906c43307ecee61c011ee4b5e14fe6",
".git/objects/86/c00c13b1b54dcc1f2aaf3bd7260739d97e97f6": "f46b0ed945e795ec1cabe56755327ff9",
".git/objects/43/12aefa51cae6188ec33f9d9fdfd0fb97999676": "3a8efd800110c95e03a8396d207b650d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/410d07b985c289ee303511ea5f63362658225f": "751c4b010a323c9062ed7825709895dc",
".git/objects/31/987cce732741fae75222ec9f1535b3394e91be": "dcd52a21b5a1185128b4505c24303fa9",
".git/objects/3a/60c9b8292bca706a1c5a25dddfa14d225d48b6": "cfe8dcd920960eafc76d01d5e7fd6a62",
".git/objects/63/74af2b1790ee3e2901e54d7dfb5c6693b35b82": "378774ac020df988cb89800e2a199838",
".git/objects/bf/0144017787ca973e8e2a49dfb27205762eaa8c": "1118b2bda73aca340c7643bc053a01e7",
".git/objects/a0/edbe3347e49efa8144d9c1e5e8f63f5de2b5db": "994bb00d20749e16757ab01a2714b69b",
".git/objects/dc/780254f3e6ef3b3b9dd63f8a4baa63e6c8eafd": "90cb8f28dc64b62ac968c00944d620b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/94dda52aa106387fe1c18d9486ab131898d2c0": "6a1ed95d9a37002303748dec0afdf57f",
".git/objects/f9/f7fc2b5075b75420a3e415026480ddc8674974": "d2f2c1d3760836227df86fcb65da1d93",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/282b262b4901218f1b3748ce43fb0df47bc751": "d6fe2bafca40530b83b43250b71578cc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/d8685b9e86712a0a3cbd036d089a702a5b94f1": "8c0a74540c1cea6afef8a0de67632421",
".git/objects/4a/ea29a4a30eddfbc952d121f868691739b3a1b9": "405b4ef30c2ed1a5b2ab67623493d02c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8c/3f49e26d855d156682f3e8ac5ebc607708af48": "e6017ddaff7d835165c72b2166181879",
".git/objects/8c/9e211c8ab67edb3d3c956831ffca0e019cc2f3": "3e83d554d6d02f65067c53e213a72f79",
".git/objects/85/aa3bc173a330c5d2496a112bee3023a60767f6": "66b16bb746b04325f3a4b25e3215f85c",
".git/objects/71/45ce5f9ee562acbe74add2acd739ef8286294b": "7aed3108fe02c66b6d3b35076276d75f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/13/2c15ec4fe8e759961e8be6057ee3835a0ba92a": "421d4fef097a9cf24d06c25d49bc5cd9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23be6ebe3975e93918e17ea69c7d29ae",
".git/logs/refs/heads/main": "66fe0f3c99dce6d4c560d81b1559aae6",
".git/logs/refs/remotes/origin/main": "47f048d5f786580d767b70b062a4ea26",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "00450495dba3e5bbfdeefb216ac96b42",
".git/refs/remotes/origin/main": "ddf821812e6ace4964982d5f9687ff2e",
".git/index": "3f046cbb29038c2d1cd504944ee13f1a",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "ab03f01f84dab56a86870519565b9fec",
"assets/AssetManifest.json": "1c1c42adbe7e749fe41a2cd7ede9a134",
"assets/NOTICES": "74a5bed8b0d964bf30fe1606ecdcdefe",
"assets/FontManifest.json": "ab49ed99709123850dd6d5e6a46dcd7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/DartFont.ttf": "0278c5fbf4ec7c6dcf76235d1439705a",
"assets/assets/Spotify.jpeg": "ffaeed8684c788828aacf2be69161709",
"assets/assets/Millwall.jpeg": "959417de633b06d6b25acfe8b71f6c89",
"assets/assets/Everton.jpeg": "425c71a0fdde5b7368c4750ea90fe3ae",
"assets/assets/first.jpeg": "f9628e8062a1d5e6281b11a2f8051433",
"assets/assets/UIKitWeb.jpeg": "f154fcd908f015338304312b04575291",
"assets/assets/Flutter.jpeg": "d48c0bc0aee44ae1339554016b856688",
"assets/assets/Blackpool.jpeg": "5a2c260c2d6639993aa5c5c40f23e754",
"assets/assets/gridviewimage1.jpeg": "efb6552c0ec6803379c6264ab71bf897",
"assets/assets/FlutterDocs.jpeg": "efb6552c0ec6803379c6264ab71bf897",
"assets/assets/youtubeFirst.jpeg": "a3866c8e587d6bbb9a2e486314e2611c",
"assets/assets/UIKit.png": "6a21cdf0c86a7b07057b23bb65d4e7ec",
"assets/assets/SwiftUI.png": "f70245bb50d97a1fe417e445848322eb",
"assets/assets/Blackburn.jpeg": "40e6a0cb60dfe43b7269441c2c97f2ac",
"assets/assets/Stocks.jpeg": "830deec633520e7ba1632fef256be4f5",
"canvaskit/canvaskit%202.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit%202.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
