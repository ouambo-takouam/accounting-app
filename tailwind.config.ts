import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray01: "rgb(244, 245, 248)",
        gray02a: "rgba(57,58,61,.1)",
        gray02: "rgb(212, 215, 220)",
        gray03: "rgb(141, 144, 150)",
        gray04: "rgb(107,108,114)",
        green01: "rgb(83, 183, 0)",
        green02: "rgb(44, 160, 28)",
        green03: "rgb(37, 143, 29)",
        black01: "rgb(57, 58, 61)",
        black02: "rgb(51, 51, 51)",
        black03: "rgb(40, 40, 40)",
        blue01: "#0077c5",
      },
      boxShadow: {
        btn: "0 0 0 2px rgb(255, 255, 255)",
        search: "0 0 0 2px rgba(44, 160, 28, 0.5)",
        input: "0 0 2px 2px rgba(44, 160, 28, 0.15)",
        box: "1px 1px 12px 2px rgba(161, 161, 161, 0.25)",
      },
      backgroundImage: {
        product: "url('/public/images/png/product.png')",
      },
    },
  },
  plugins: [],
};
export default config;
