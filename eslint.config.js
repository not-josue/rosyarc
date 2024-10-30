import eslintPluginAstro from "eslint-plugin-astro";

export default [
  eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Add or override rules here
      "astro/no-set-html-directive": "error",
    },
  },
];
