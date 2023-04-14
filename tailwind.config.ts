import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Segoe: ["Segoe", "Roboto"],
      },
    },
  },
  plugins: [],
} satisfies Config;
