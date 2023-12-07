// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/devtools',
    'nuxt-icon',
    '@vee-validate/nuxt',
  ],
  "imports": {
    "dirs": ['stores']
  },
  css: ["~/assets/style/main.css"],
  app: {
    baseURL: "/Dash/",
  },

  alias: { // 設定路徑別名
    'imgs': resolve(__dirname, './public/images'),
  },
  veeValidate: {
    // 啟用 auto imports
    autoImports: true,
    // 更換 components 名稱
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    }

  }
});
