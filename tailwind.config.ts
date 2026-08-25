import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#121613',
          950: '#0d100e',
          900: '#121613',
          800: '#191f1b',
          700: '#212824',
          600: '#2b332e',
        },
        sand: {
          DEFAULT: '#f4f2ec',
          50: '#fbfaf6',
          100: '#f4f2ec',
          200: '#e8e5db',
        },
        sage: {
          DEFAULT: '#8a9b78',
          50: '#f2f4ee',
          100: '#e1e7d8',
          200: '#c4d0b3',
          300: '#a6b892',
          400: '#8a9b78',
          500: '#728261',
          600: '#5c6a4e',
          700: '#48533e',
        },
      },
      fontFamily: {
        heading: ['"Manrope"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(2.5rem, 4vw + 1.25rem, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.25rem, 3vw + 1rem, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        elevated: '0 24px 48px -12px rgba(18, 22, 19, 0.35)',
        soft: '0 8px 24px -8px rgba(18, 22, 19, 0.12)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(138,155,120,0.35)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
