/* eslint-disable no-undef */
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'workbox'.
workbox.routing.registerRoute(
  new RegExp('https:.*min.(css|js)'),
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'workbox'.
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cdn-cache',
  })
);
