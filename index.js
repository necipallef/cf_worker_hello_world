function onFetchEvent(event) {
    event.respondWith('hello world!');
}

addEventListener('fetch', onFetchEvent);

