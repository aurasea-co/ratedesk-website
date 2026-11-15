/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // W1 (16 Nov 2026): the themed colours are CSS variables (app/globals.css)
        // so the site follows the visitor's light/dark setting. Light values are
        // unchanged. Fixed colours (cream, sea.night, brand.deep, brand.blue) are
        // for surfaces that look the same in both themes.
        ink: {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)',
          soft: 'rgb(var(--c-ink-soft) / <alpha-value>)',
          muted: 'rgb(var(--c-ink-muted) / <alpha-value>)',
          subtle: 'rgb(var(--c-ink-subtle) / <alpha-value>)', // a11y (5 Nov 2026): was #6B7280, 4.3:1 on the cream background
        },
        paper: {
          DEFAULT: 'rgb(var(--c-paper) / <alpha-value>)',
          warm: 'rgb(var(--c-paper-warm) / <alpha-value>)',
          soft: 'rgb(var(--c-paper-soft) / <alpha-value>)',
        },
        cream: '#FBF9F4',
        cta: {
          DEFAULT: 'rgb(var(--c-cta) / <alpha-value>)',
          ink: 'rgb(var(--c-cta-ink) / <alpha-value>)',
          hover: 'rgb(var(--c-cta-hover) / <alpha-value>)',
        },
        sea: {
          deep: 'rgb(var(--c-sea-deep) / <alpha-value>)',
          night: '#0F2A3F',
          mid: 'rgb(var(--c-sea-mid) / <alpha-value>)',
          aura: '#3A7CA5',
          mist: '#A8C5DA',
          pale: 'rgb(var(--c-sea-pale) / <alpha-value>)',
        },
        gold: {
          DEFAULT: '#B8924A',
          soft: '#D4B776',
          pale: '#F0E5C8',
        },
        line: '#06C755',
        // Aurasea brand (WEB standing rules)
        brand: {
          navy: 'rgb(var(--c-navy) / <alpha-value>)', // text and accents; light blue in the dark theme
          deep: '#042C53', // the fixed navy, for surfaces
          forest: '#04342C',
          mint: '#5DCAA5',
          trust: 'rgb(var(--c-trust) / <alpha-value>)', // a11y (5 Nov 2026): was #378ADD, 2.8–3.6:1 as text and under white
          blue: '#1F5E9E', // the fixed trust blue, for buttons under white text
          sand: 'rgb(var(--c-sand) / <alpha-value>)',
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
