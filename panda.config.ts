import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  html: {
    fontSize: '16px',
    background: '#000',
  },
  body: {
    margin: 'auto',
    padding: '1rem',
    maxWidth: '1024px',
    minHeight: '100dvh',
    background: '#d8d8d8',
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss,
});
