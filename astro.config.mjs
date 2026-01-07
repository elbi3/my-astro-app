// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: "cloudflare",
  }),
  build: {
    assetsPrefix: "https://img.plant-kennel.me"
  },
  output: "static"
});
