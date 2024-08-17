import { Space_Grotesk } from "next/font/google";
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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        space_grotesk: ["Space Grotesk", "sans-serif"],
      },
      cursor: {
        default: 'url(/cursor.png), default',
        pointer: 'url(/cursor.png), pointer',
      },
    },
  },
  plugins: [],
};
export default config;
