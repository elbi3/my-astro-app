import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import icon from "astro-icon";

export default defineConfig({
  output: "server", //enables SSR     
  site: "https://plant-kennel.me",
  adapter: cloudflare(),
  integrations: [vue(), react(), icon()]
});