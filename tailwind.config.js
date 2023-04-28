/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}",
  ],
  theme: {
    colors:{
'blue':'#d5d5f0',
'blue-300':'#1a73e8',
'blue-200':'#297cea',
'orange-700':'#FF731D',
'orange-600':'#FF7E2E',
'orange-500':"#FA6000",
'orange-10':'#FFC7A5',
'orange-5':"#FFBD94",
'dark-blue':"#23448b",
'blue-full':'#1746A2',
'blue-800':'#194CB1',
'blue-500':"#0c5adb",
'blue-300':'#1D59CF',
'blue-200':'#2D6AE1',
'blue-100':'#1F60DE',
'blue-50':'#2D6AE1',
'blue-20':'#A4BEF2',
'blue-10':'#C2D3F6',
'white':'#ffffff',
'black':'#000000',
'black-50':"#091125",
'silver':'#999EB7',
'yellow':'#F3CD00',
'red':"#FF0000",
'cyan':"#55cbcd",
'pink':"#f1ccde",
'purple-50':"#f44bca",
'yellow-100':"#faefe1",
'purple':"#d3ddf7",
'green-50':"#d5f4c8",
'green-10':'#e0f7d6',
'green-500':"#309826",
'blue':"#d4f0f0",
'gray':"#c9c9c9",
'orange':"#ecc6bc",
'gray-200':"#282828",
'node':"#f1d5bd",
'grey-5':"#e6e6e6",
'grey-15':"#DCDCDC",
'grey-10':"#a2a2a2",
'grey-8':"#F6F6F6",
'grey-0' :"#f7f7f7",
'yellow-5':"#FFC727"

    },
    screens: {
      'mobile': '320px',
      'mobilem':'375px',
      'mobilel':'425px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1440px',

    },
    extend: {
      fontFamily:{
        Nunito:['Nunito', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Quicksand:['Quicksand', 'sans-serif'],
        Kanit:['Kanit,sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
 
  ],
}
