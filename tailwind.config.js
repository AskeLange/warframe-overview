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
      'primary': ['"Josefin Sans"', 'ui-sans-serif', 'system-ui'],
      'secondary': ['"Butler"', 'ui-serif', 'Georgia'],
    },

    // Colors
    color: {
      white: { DEFAULT: '#ffffff' },
      black: { DEFAULT: '#000000' },
      gray: { light: '#f8f8f8', DEFAULT: '#999999' },

      primary: {
        light: '#A2DBE8',
        DEFAULT: '#73C5D8',
        dark: '#379BB2',
      },

      secondary: {
        light: '',
        DEFAULT: '',
        dark: '',
      }
    },
 
  },
  variants: {
    extend: {

    },
  },
  plugins: [

  ],
}
