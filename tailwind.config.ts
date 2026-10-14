import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          espresso: "#2D1E18",   // Deep brown / Dark text
          chocolate: "#3C281E",  // Chocolate dark
          cocoa: "#59453B",      // Secondary brown / Glass overlays
          gold: "#A37537",       // Primary accent / CTA buttons
          goldHover: "#8A612A",  // Hover state for CTA
          cream: "#F8F1EA",      // Navbar & background warm light
          linen: "#FDF8F3",      // Base background page
          sand: "#EFE5DA",       // Badge / Pill background
        },
      },
    },
  },
  plugins: [],
};

export default config;