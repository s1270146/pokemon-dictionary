import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        "pickup": "calc((360 / 1280) * 100vw)",
      },
      padding: {
        "pickup-bottom": "calc(( 55 / 1280 ) *100vw )",
        "30": "calc((30 / 1280) * 100vw)",
      },
      spacing: {
        'pickup-heading-30': 'calc((30 / 1280) * 100vw)',
        'pickup-heading-90': 'calc((90 / 1280) * 100vw)',
      },
      width: {
        'pickup-heading': 'calc((300 / 1280) * 100vw)',
      },
    },
  },
  plugins: [],
};
export default config;
