/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontSize: {
        '2xs': '.6875rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-mona-sans)',
      },
      opacity: {
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '0%, 100%': {
            borderColor: 'white',
          },
          '50%': {
            borderColor: 'transparent',
          },
        },
        disappear: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        typing: 'typing 2s steps(20) 1 forwards, blink .7s step-end infinite',
        disappear: 'disappear 0.5s ease-out 2.5s forwards',
      },
    },
  },
  plugins: [],
};
