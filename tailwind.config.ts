import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        "sidebar": '0 0 33.3333333333%',
        "main": '0 0 66.6666666667%',
      }
    },
  },
  plugins: [],
} satisfies Config;
