import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import icon from "astro-icon";

import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  site: "https://plant-kennel.me",
  integrations: [vue(), react(), icon()]
});