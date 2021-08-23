const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: false, 
  purge: [ 
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {

    // Fonts      
    fontFamily: {
      'sans': ['"Josefin Sans"', 'ui-sans-serif', 'system-ui'],
      'serif': ['"Butler"', 'ui-serif', 'Georgia'],
    },

    // Colors
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,

      primary: {
        light: '#A2DBE8',
        DEFAULT: '#73C5D8',
        dark: '#379BB2',
      },
    },

    // Fill
    fill: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,

      primary: {
        light: '#A2DBE8',
        DEFAULT: '#73C5D8',
        dark: '#379BB2',
      },
    },

    // Min width
    minWidth: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    }

  },
  variants: {
    extend: {

    },
  },
  plugins: [

  ],
}
