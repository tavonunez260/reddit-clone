/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#FF5414',
        secondaryColor: '#0079D3',
        blackColor: '#000000',
        whiteColor: '#FFFFFF',
        grayColor1: '#F6F7F8',
        grayColor2: '#878A8C',
        grayColor3: '#878A8C',
        grayColor4: '#1A1A1B',
        grayColor5: '#DAE0E6',
        grayColor6: '#272729',
        grayColor7: '#030303',
        grayColor8: '#EDEDED',
        grayColor9: '#D3D4D5',
        grayColor10: '#D7DADC',
        grayColor11: '#818384',
        grayColor12: '#29292A',
        authorColorLight: '#787C7E',
        authorColorDark: '#818384',
        titleColorLight: '#1A1A1B',
        titleColorDark: '#D7DADC',
        tagColorLight: '#1A1A1B',
        tagColorDark: '#FFFFFF',
        bgTagColorLight: '#EDEFF1',
        bgTagColorDark: '#343536',
        textColorLight: '#1C1C1C',
        textColorDark: '#D7DADC',
        linkColorLight: '#005BA1',
        linkColorDark: '#4FBCFF'
      }
    }
  },
  plugins: []
}
