import { type Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
      },
      fontFamily: {
        sans: ['Dosis', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
