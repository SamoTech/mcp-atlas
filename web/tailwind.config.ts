import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          50:  '#E8EEF4',
          100: '#C5D3DF',
          200: '#9FB5C8',
          300: '#7897B1',
          400: '#547FA0',
          500: '#3A6B8F',
          600: '#2D5470',
          700: '#1E3D52',
          800: '#152C3C',
          900: '#0D1B2A',
        },
        cyan: {
          DEFAULT: '#00D4FF',
          50:  '#E0FBFF',
          100: '#B3F5FF',
          200: '#80EEFF',
          300: '#4DE6FF',
          400: '#1ADFFF',
          500: '#00D4FF',
          600: '#00AACB',
          700: '#007F97',
          800: '#005464',
          900: '#002A32',
        },
        teal: '#0A9396',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
