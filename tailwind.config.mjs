import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Gelasio", ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        "prose-2-cols": "50ch",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
