import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from 'nitro/vite'

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  vite: {
    plugins: [nitro()],
    build: {
      sourcemap: false,
      minify: 'terser',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
            'vendor-form': ['react-hook-form', '@hookform/resolvers', 'zod'],
            'vendor-router': ['@tanstack/react-router', '@tanstack/react-start'],
          }
        }
      }
    },
    ssr: {
      noExternal: ['framer-motion', 'gsap']
    }
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
