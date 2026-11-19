/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        // "code editor / memory" design tokens, shared with MemoryHero
        code: {
          bg: '#0d1117',
          panel: '#161b22',
          border: '#30363d',
          muted: '#6e7681',
          dim: '#8b949e',
          text: '#c9d1d9',
          bright: '#e6edf3',
          blue: '#58a6ff',
          green: '#00ff88',
          purple: '#d2a8ff',
          red: '#ff7b72',
          string: '#a5d6ff',
          yellow: '#e3b341',
        },
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
    },
  },
  plugins: [],
};
