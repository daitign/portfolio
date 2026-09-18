/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#050608",
          900: "#07080c",
          850: "#0c0e15",
          800: "#111420",
          700: "#1b2030",
        },
        gold: {
          300: "#f3e7c4",
          400: "#e6c770",
          500: "#d4af37",
          600: "#b38f22",
        },
        champagne: "#f5e6ca",
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '"Lexend Deca"',
          "system-ui",
          "sans-serif",
        ],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', "sans-serif"],
        lexend: ['"Lexend Deca"', "sans-serif"],
      },
      boxShadow: {
        luxury:
          "0 20px 50px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "luxury-gold":
          "0 20px 50px -10px rgba(212, 175, 55, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.3)",
        "luxury-light":
          "0 20px 40px -15px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2.5s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
