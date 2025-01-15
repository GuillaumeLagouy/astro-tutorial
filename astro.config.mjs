import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://gl-astro-tutorial.netlify.app/",
  integrations: [svelte()],
});