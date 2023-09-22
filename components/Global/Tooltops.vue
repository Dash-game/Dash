<template>
  <button ref="triggerEl" type="button">
    <slot name="button"></slot>
  </button>
  <div
    v-show="props.msg"
    ref="targetEl"
    role="tooltip"
    class="absolute z-10 invisible inline-block py-1 px-2 text-14 font-medium text-white bg-tab rounded shadow-sm opacity-0 tooltip"
  >
    {{ props.msg }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tooltip } from 'flowbite'

const triggerEl = ref(null)
const targetEl = ref(null)

onMounted(() => {
  const options = {
    placement: props.placement,
    triggerType: 'hover',
    onHide: () => {
      console.log('tooltip is shown')
    },
    onShow: () => {
      console.log('tooltip is hidden')
    },
    onToggle: () => {
      console.log('tooltip is toggled')
    }
  }
  new Tooltip(targetEl.value, triggerEl.value, options)
})

const show = () => {
  // show the tooltip
  tooltip.show()
}

const hide = () => {
  // hide the tooltip
  tooltip.hide()
}

const toggle = () => {
  // toggle the tooltip
  tooltip.toggle()
}

const props = defineProps({
  msg: {
    type: String,
    default: ''
  },
  placement: {
    type: String,
    default: 'top'
  }
})
</script>
