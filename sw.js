const CACHE='gyros-cmv-cache-v6';
const ASSETS=['./','./index.html','./app.js','./gyros-custos-cardapio.json','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
const NETWORK_FIRST=['/','/index.html','/app.js','/gyros-custos-cardapio.json','/manifest.webmanifest'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
    const clients=await self.clients.matchAll({type:'window'});
    await Promise.all(clients.map(client=>client.navigate(client.url)));
  })());
});

async function networkFirst(request, fallbackKey) {
  const cache=await caches.open(CACHE);
  try {
    const response=await fetch(request);
    cache.put(fallbackKey || request, response.clone());
    return response;
  } catch (err) {
    return caches.match(fallbackKey || request);
  }
}

self.addEventListener('fetch',e=>{
  if (e.request.method !== 'GET') return;
  if (e.request.mode === 'navigate') {
    e.respondWith(networkFirst(e.request,'./index.html'));
    return;
  }
  const url=new URL(e.request.url);
  if (url.origin===location.origin && NETWORK_FIRST.includes(url.pathname)) {
    e.respondWith(networkFirst(e.request));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{
      if (url.origin === location.origin) {
        const copy=resp.clone();
        caches.open(CACHE).then(c=>c.put(e.request,copy));
      }
      return resp;
    }))
  );
});
