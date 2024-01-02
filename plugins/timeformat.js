import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .directive('dateformat', {
      mounted(el, binding) {
        let date
        if (typeof binding.value === 'object') {
          const { value, format } = binding.value
          date = dayjs(value).format(format)
        } else {
          date = dayjs(binding.value).format('YYYY-MM-DD')
        }
        el.innerText = date
      }
    })
    .directive('timeformat', {
      mounted(el, binding) {
        let date
        if (typeof binding.value === 'object') {
          const { timestamp, format } = binding.value
          date = dayjs(timestamp).format(format)
        } else {
          date = dayjs(binding.value).format('YYYY-MM-DD HH:mm')
        }
        // console.log(binding.value)
        // console.log(date)
        el.innerText = date
      },
      updated(el, binding) {
        let date
        if (typeof binding.value === 'object') {
          const { timestamp, format } = binding.value
          date = dayjs(timestamp).format(format)
        } else {
          date = dayjs(binding.value).format('YYYY-MM-DD HH:mm')
        }
        // console.log(binding.value)
        // console.log(date)
        el.innerText = date
      }
    })
})
