// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Base path for the deployment. On GitHub Pages "project sites" the app is served
// from /<repo-name>/, so assets and routes must be prefixed. The deploy workflow
// sets PAGES_BASE; local dev/preview falls back to "/".
const base = process.env.PAGES_BASE ?? "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Statically prerender the site to plain HTML files at build time so it can be
    // served from GitHub Pages (no server). `/` becomes dist/client/index.html with
    // the real page content + meta tags; the client then hydrates and takes over.
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
