/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './node_modules/flowbite/**/*.{js,ts}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0.75rem'
      },
      center: true
    },
    extend: {
      colors: {
        primary: '#222434', // 底色、主色
        section: '#303141', // 高亮提示色(黑)
        light: '#D9D9D9', // 淺灰
        darkgray: '#8C8C8C', // 區塊顏色
        secondary: '#10D89F', // 字體顏色 - 亮綠
        labeldark: '#FD5A5A', // 字體顏色 - 紅
        labellight: '#FFB800', // 字體顏色 - 橘
        tab: '#145096' // 標籤 - 藍色
      },
      fontSize: {
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
        36: '2.25rem',
        40: '2.5rem',
        48: '3rem'
      },
      backgroundImage: {
        'sec-banner': "url('/images/sec-background.jpg')"
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
