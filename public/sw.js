import { createHandlerBoundToURL, precacheAndRoute } from "workbox-precaching"
import { NavigationRoute, registerRoute } from "workbox-routing"
import { NetworkFirst, NetworkOnly, CacheFirst, StaleWhileRevalidate } from "workbox-strategies"
import { clientsClaim } from "workbox-core"

import { offlineFallback } from "workbox-recipes"
import { setDefaultHandler } from "workbox-routing"

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
    ({ url }) => url.pathname.includes(".svg"),
    new NetworkFirst({
        cacheName: "svg",
    })
)

// registerRoute(
//     ({ url }) => url.href === "https://api.sampleapis.com/coffee/hot",
//     async ({ url, request, event, params }) => {
//         const response = await fetch(request)
//         const responseBody = await response.text()
//         return new Response(JSON.stringify({ test: "abc" }), {
//             headers: response.headers,
//         })
//     }
// )

// registerRoute(
//     ({ url }) => url.pathname === "/" || url.pathname.includes(".js") || url.pathname.includes(".css"),
//     new NetworkFirst({
//         cacheName: "static",
//     })
// )

// setDefaultHandler(new NetworkOnly())
// offlineFallback({
//     pageFallback: "./offline.html",
// })

self.skipWaiting()
clientsClaim()
