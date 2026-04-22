import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './contexts/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#049F82',
          gold: '#F4CA44',
          black: '#000000',
          white: '#FFFFFF',
          bg: '#F7FAF9',
          dark: '#071512'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(4, 159, 130, 0.08)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    }
  },
  plugins: []
};

export default config;
