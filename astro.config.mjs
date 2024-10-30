// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "amazon.com", pathname: "/**" },
    ],
  },
  integrations: [tailwind(), react(), mdx()],
});
