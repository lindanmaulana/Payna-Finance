import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        whiteGray: "var(--whiteGray)",
        gray: "var(--gray)",
        blue: "var(--blue)",
        redOrange: "var(--redOrange)"
      },
    },
  },
  plugins: [],
} satisfies Config;
