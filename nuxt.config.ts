// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/devtools',
    'nuxt-icon'
  ],
  "imports": {
    "dirs": ['stores']
  },
  css: ['~/assets/style/tailwind.css'],
  app: {
    baseURL: '/Dash/'
  },
  alias: { // 設定路徑別名
    'imgs': resolve(__dirname, './public/images'),
  }
})
