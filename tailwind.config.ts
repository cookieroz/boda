import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Dosis', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

