/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0F14',
          soft: '#1A2230',
          muted: '#4A5568',
          subtle: '#5A606B', // a11y (5 Nov 2026): was #6B7280, 4.3:1 on the cream background
        },
        paper: {
          DEFAULT: '#FBF9F4',
          warm: '#F5F1E8',
          soft: '#FFFFFF',
        },
        sea: {
          deep: '#0F2A3F',
          mid: '#1F4E6F',
          aura: '#3A7CA5',
          mist: '#A8C5DA',
          pale: '#E6EEF5',
        },
        gold: {
          DEFAULT: '#B8924A',
          soft: '#D4B776',
          pale: '#F0E5C8',
        },
        line: '#06C755',
        // Aurasea brand (WEB standing rules)
        brand: {
          navy: '#042C53',
          forest: '#04342C',
          mint: '#5DCAA5',
          trust: '#1F5E9E', // a11y (5 Nov 2026): was #378ADD, 2.8–3.6:1 as text and under white
          sand: '#F1EFE8',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        thai: ['var(--font-thai)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'wide-soft': '0.08em',
      },
      maxWidth: {
        'prose-narrow': '38rem',
        'reading': '42rem',
      },
    },
  },
  plugins: [],
};
