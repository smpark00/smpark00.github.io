// @ts-check
import { defineConfig } from "astro/config";

// User page (smpark00.github.io) deploys to the domain root — no `base` needed.
export default defineConfig({
  site: "https://smpark00.github.io",
  trailingSlash: "ignore",
});
