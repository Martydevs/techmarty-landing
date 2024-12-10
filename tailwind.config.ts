import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36aaf4',
          500: '#0c8de4',
          600: '#0270c3',
          700: '#0259a0',
          800: '#064b84',
          900: '#0b406e',
          950: '#07284a',
        },
        secondary: {
          50: '#f4f7fb',
          100: '#e9eef5',
          200: '#cedce9',
          300: '#a3bfd6',
          400: '#729cbe',
          500: '#507fa7',
          600: '#40668c',
          700: '#355272',
          800: '#2f465f',
          900: '#2b3c51',
          950: '#1d2736',
        },
        accent: {
          50: '#eefbf3',
          100: '#d6f5e1',
          200: '#b0e9c7',
          300: '#7dd6a7',
          400: '#47ba82',
          500: '#2c9d68',
          600: '#1f7d51',
          700: '#1b6443',
          800: '#195037',
          900: '#15422f',
          950: '#0b251b',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-robotomono)', 'monospace'],
      }
    },
  },
  plugins: [],
} satisfies Config;
