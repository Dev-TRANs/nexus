// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? process.env.CF_PAGES_URL ?? "http://localhost:4321",

  output: 'server',
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});