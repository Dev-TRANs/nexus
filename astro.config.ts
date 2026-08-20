// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? process.env.CF_PAGES_URL ?? "http://localhost:4321",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});