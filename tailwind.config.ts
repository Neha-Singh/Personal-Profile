// tailwind.config.ts (optional but useful)
import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        brand: { 500: "#0499FC", 600: "#0E446B", 700: "#153454" },
        gold: "#FFCE1B",
      },
    },
  },
} satisfies Config;
