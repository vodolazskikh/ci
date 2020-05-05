//  Ключ для кэша сервис-воркера
const CACHE = "worker_cache";
const timeout = 1000;

self.addEventListener("install", (event) => {
  console.log("Установлен");
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      // Сохраняем кэш при инициализации воркера
      return cache.addAll([
        "index.html",
        "static/js/bundle.js",
        "static/js/main.chunk.js",
        "static/js/0.chunk.js",
        "static/media/tools.2d2123ee.svg",
        "static/media/cog.290e4564.svg",
        "favicon.ico",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Происходит запрос на сервер");
  event.respondWith(
    fromNetwork(event.request, timeout).catch((err) => {
      // При превышении таймаута возвращаем закешированные данные
      return fromCache(event.request);
    })
  );
});

function fromNetwork(request, timeout) {
  // Пытаемся запросить данные из сети
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then((response) => {
      clearTimeout(timeoutId);
      resolve(response);
    }, reject);
  });
}

// Проверить, есть ли в кеше нужные данные
function fromCache(request) {
  return caches
    .open(CACHE)
    .then((cache) =>
      cache
        .match(request)
        .then((matching) => matching || Promise.reject("no-match"))
    );
}
