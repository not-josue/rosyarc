import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  html: {
    template: "./src/index.html",
    base: "/home",
    about: {
      base: "/about",
    },
    gallery: {
      base: "/gallery",
    },
    articles: {
      "diy-cemetery-bouquet": {
        base: "/articles/diy-cemetery-bouquet",
      },
      "diy-cross-arrangement": {
        base: "/articles/diy-cross-arrangement",
      },
      "diy-heart-arrangement": {
        base: "/articles/diy-heart-arrangement",
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        gallery: resolve(__dirname, "gallery/index.html"),
        article1: resolve(
          __dirname,
          "articles/diy-cemetery-bouquet/index.html"
        ),
        article2: resolve(
          __dirname,
          "articles/diy-cross-arrangement/index.html"
        ),
        article3: resolve(
          __dirname,
          "articles/diy-heart-arrangement/index.html"
        ),
      },
    },
  },
});
