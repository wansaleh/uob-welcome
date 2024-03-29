const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');

const brand = tailwindColorPalette('#002265', {
  name: 'brand',
  greyscale: false,
  ui: false
});
const brandAlt = tailwindColorPalette('#ed1c2b', {
  name: 'brandAlt',
  greyscale: false,
  ui: false
});

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        ...brand,
        ...brandAlt
      },
      fontFamily: {
        sans: ['Agenda', ...defaultTheme.fontFamily.sans],
        head: ['Agenda', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.sans],
        mono: ['Nanum Gothic Coding', 'monospace']
      }
    }
  },
  variants: {},
  plugins: []
};
