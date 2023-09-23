import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "linear-gradient": "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        "button-gradient":
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
      colors: {
        primary: "#150E28",
        "primary-opacity": "rgba(144, 58, 255, 0.12)",
        secondary: "#903AFF",
        tertiary: "#D434FE",
        "tertiary-opacity": "rgba(212, 52, 254, 0.12)",
        "tertiary-secondary": "#ff26b9",
        "form-blur": "rgba( 0, 0, 0, 0.25)",
        overlay: "rgba(21, 14, 40, 0.9)",
      },
      fontFamily: {
        mont: ["var(--font-mont)", "serif"],
        display: ["sans-serif"],
      },
      maxWidth: {
        "8xl": "1320px",
      },
      boxShadow: {
        "form-shadow": "0 4px 4px 0 rgba( 0, 0, 0, 0.5)",
      },
      backdropBlur: {
        "form-filter": "blur(4px)",
      },
    },
  },
  plugins: [],
};
export default config;
