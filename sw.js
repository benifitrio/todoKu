const CACHE_NAME = 'Pwa todoKu';
const urlsToCache = [
       '/',
       '/index.html',
       '/nav.html',
       '/notes.png',
       '/sitebg2.jpg',
       '/manifest.json',
       '/education.png',
       '/blogging.png',
       '/css/style.css',
       '/pages/jadwal.html',
       '/pages/quot.html',
       '/pages/todo.html',
       '/icon/android-icon-144x144.png',
       '/icon/android-icon-192x192.png',
       '/icon/favicon-96x96.png',
       '/icon/favicon.ico',
       '/js/app.js',
       '/js/input.js',
       '/js/jadwal.js',
       '/js/nav.js',
       '/js/quot.js',
       'https://use.fontawesome.com/releases/v5.0.8/css/all.css',
       'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css',
       'https://unpkg.com/aos@next/dist/aos.js',
       'https://unpkg.com/aos@next/dist/aos.css',
];

self.addEventListener("install", e =>{
  e.waitUntil(
    caches.open(CACHE_NAME).then( cache=> {
      console.log(cache.addAll(urlsToCache));
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event=> {
  event.respondWith(
    caches.match(event.request)
      .then(response=>{
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }

        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url
        );
        return fetch(event.request);
      })
  );

});

//menghapus cache lama dan aktifkan cache baru
self.addEventListener("activate", event=>{
  event.waitUntil(
    caches.keys().then(cacheNames=> {
      return Promise.all(
        cacheNames.map(cacheName=> {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});