import type { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter), sans-serif", { fontFeatureSettings: '"cv11"' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
