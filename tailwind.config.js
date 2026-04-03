/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ── Brand Colors ── */
      colors: {
        navy: '#1B2A4A',
        gold: '#B9924F',
        cta: {
          primary: '#1B2A4A',
          highlight: '#2E4A7A',
        },
      },

      /* ── Semantic Spacing ── */
      spacing: {
        'hero-card-x': '4rem',     /* 64px — Figma Padding/Hero-Card-X */
        'hero-card-y': '3.5rem',   /* 56px — Figma Padding/Hero-Card-Y */
        'section-x': '2rem',       /* 32px — Figma Padding/Section-X */
        'section-y': '6rem',       /* 96px — Figma Padding/Section-Y */
        'button-y': '0.75rem',     /* 12px — Figma Padding/Button-Y */
        'footer-y': '4rem',        /* 64px — Figma Padding/Footer-Y */
      },

      /* ── Border Radius (semantic aliases) ── */
      borderRadius: {
        'x-large': '1.5rem',  /* 24px — Figma Radius/XLarge */
        'large': '1rem',       /* 16px — Figma Radius/Large */
        'medium': '0.75rem',   /* 12px — Figma Radius/Medium */
      },

      /* ── Font Family ── */
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
