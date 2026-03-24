import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

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
          950: '#070E15',
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
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#CBD5E1',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#00D4FF',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-code': '#00D4FF',
            '--tw-prose-pre-bg': '#0D1B2A',
            '--tw-prose-th-borders': '#1E3D52',
            '--tw-prose-td-borders': '#152C3C',
            table: {
              width: '100%',
              tableLayout: 'auto',
              borderCollapse: 'collapse',
            },
            'thead th': {
              backgroundColor: '#0D1B2A',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0.625rem 0.875rem',
              borderBottom: '1px solid #1E3D52',
              whiteSpace: 'nowrap',
            },
            'tbody tr': {
              borderBottom: '1px solid #152C3C',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: 'rgba(13,27,42,0.4)',
            },
            'tbody td': {
              padding: '0.5rem 0.875rem',
              color: '#CBD5E1',
              fontSize: '0.8125rem',
              verticalAlign: 'top',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}

export default config
