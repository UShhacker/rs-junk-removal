import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  preset: 'vercel',
  minify: true,
  prerender: {
    crawlLinks: true,
    routes: ['/', '/sitemap.xml', '/robots.txt'],
    ignore: ['/api']
  },
  routeRules: {
    '/assets/**': { cache: { maxAge: 60 * 60 * 24 * 365 } },
    '/**': { cache: { maxAge: 0 } }
  }
})
