// sw.js (service worker file)
self.addEventListener('push', function(event) {
    let options = {
        body: event.data.text(),
        icon: '/icon.png',  // Your notification icon
        badge: '/badge.png',  // Your notification badge
    };

    event.waitUntil(
        self.registration.showNotification('New Post Alert!', options)
    );
});
