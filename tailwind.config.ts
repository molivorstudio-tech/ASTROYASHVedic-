import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cosmic: {
          950: "#0B0E1A", // Primary deep cosmic background
          900: "#101424",
          850: "#141A30",
          800: "#19213D",
          700: "#222C52",
          600: "#323F70",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
          hover: "#18203B",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },
        amethyst: {
          50: "#F5EFFB",
          100: "#E7D6F6",
          200: "#D5B7EE",
          300: "#C298E4",
          400: "#B380D9", // Light Amethyst / Hover
          500: "#9966CC", // Primary Amethyst Accent
          600: "#7A4FA6", // Darker Amethyst / Border
          700: "#623B88",
          800: "#4A2A6B",
          900: "#341B4E",
          light: "#B380D9",
          dark: "#7A4FA6",
          glow: "rgba(153, 102, 204, 0.25)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "amethyst-glow": "0 0 25px -5px rgba(153, 102, 204, 0.35)",
        "amethyst-glow-lg": "0 0 40px -5px rgba(153, 102, 204, 0.45)",
        "cosmic-card": "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(153, 102, 204, 0.15)",
      },
      backgroundImage: {
        "amethyst-text-gradient": "linear-gradient(135deg, #FAF5FF 0%, #D5B7EE 40%, #9966CC 75%, #B380D9 100%)",
        "cosmic-radial": "radial-gradient(circle at 50% 0%, rgba(153, 102, 204, 0.15) 0%, rgba(11, 14, 26, 0) 70%)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.03)" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
