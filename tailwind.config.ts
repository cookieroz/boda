import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out',
      },
      fontFamily: {
        sans: ['Dosis', 'Verdana', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
