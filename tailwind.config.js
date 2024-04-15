/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#004D9F',
        'primary-black': '#000000',
        'primary-blue-dark': '#002650',
        'primary-green': '#0EC8C8',
        'primary-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: ['46px', { lineHeight: '120%', letterSpacing: '-0.01em' }],
        h2: ['38px', { lineHeight: '120%', letterSpacing: '-0.01em' }],
        h3: ['28px', { lineHeight: '120%', letterSpacing: '-0.01em' }],
        h4: ['24px', { lineHeight: '120%' }],
        h5: ['18px', { lineHeight: '120%', letterSpacing: '0.08em' }],
        'p-xl-light': ['24px', { lineHeight: '140%' }],
        'p-l-light': ['18px', { lineHeight: '120%', letterSpacing: '0.01em' }],
        'p-m-light': ['16px', { lineHeight: '120%', letterSpacing: '0.01em' }],
        'p-s-link': ['15px', { lineHeight: '140%', letterSpacing: '0.01em' }],
        'p-s-light': ['14px', { lineHeight: '140%', letterSpacing: '0.01em' }],
        'p-xs-light': ['12px', { lineHeight: '120%', letterSpacing: '0.01em' }],
      },
      fontWeight: {
        medium: '500',
      }
    },
  },
  plugins: [],
}

