import { defineRule } from 'vee-validate';
import * as allRules from '@vee-validate/rules';

import { configure } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';


// 迴圈依序加入規則
Object.keys(allRules).forEach(rule => {
  defineRule(rule, allRules[rule]);
});

// extend('uppercase', {
//   validate: value => {
//     const hasUpperCase = /[A-Z]/;
//     return hasUpperCase.test(value);
//   },
//   message: 'The password must contain at least one uppercase letter.',
// });




// 配置訊息
configure({
  generateMessage: localize({ zh_TW: zhTW })
});

setLocale('zh_TW');

// 必須定義，用來封裝 plugin
export default defineNuxtPlugin(_nuxtApp => {});