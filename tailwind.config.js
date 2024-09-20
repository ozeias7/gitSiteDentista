/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    container: {
      padding:{
        DEFAULT: '15px'
      }
    },
    screens: {
     sm: '640px',
     md: '768px',
     lg: '960px',
     xl: '1330px',     
    },
    extend: {
      colors:{
      primary: '242a2b',
      secondary: '#808080',
      accent: {
        DEGAULT: '#1cbccf',
        secondary: '#18abbc',
        tertiary: '#90c6cd',
      },
       grery: '#e8f0f1',
      },
      fontFamily:{
      primary: 'Poppins'
      },
      
    },
  },
  plugins: [],
};
