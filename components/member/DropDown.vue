<template>
  <!-- Dropdown -->
  <button
    ref="triggerEl"
    class="text-primary bg-white hover:bg-secondary/80 focus:ring-2 focus:outline-none focus:ring-secondary rounded text-24 px-7 py-3 text-center inline-flex items-center justify-center basis-full lg:basis-1/4 w-full"
    type="button"
  >
    <span class="inline-block">篩選條件</span>
    <Icon
      name="material-symbols:arrow-drop-down-rounded"
      class="ms-3"
      size="32"
    ></Icon>
  </button>
  <!-- Dropdown menu -->
  <!-- hidden -->
  <div
    ref="targetEl"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow basis-full lg:basis-1/4"
  >
    <ul class="py-2 text-24 text-primary">
      <li v-for="(item, index) in dropData" :key="index">
        <a href="#" class="block px-7 py-3 hover:bg-secondary">{{
          item.item
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Dropdown } from 'flowbite'

const triggerEl = ref(null)
const targetEl = ref(null)
const dropdown = ref(null)

onMounted(() => {
  const options = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: false,
    onHide: () => {
      console.log('dropdown has been hidden')
    },
    onShow: () => {
      console.log('dropdown has been shown')
    },
    onToggle: () => {
      console.log('dropdown has been toggled')
    }
  }
  dropdown.value = new Dropdown(targetEl.value, triggerEl.value, options)
})

const show = () => {
  dropdown.show()
}

const hide = () => {
  dropdown.hide()
}

const toggle = () => {
  dropdown.toggle()
}

const props = defineProps({
  dropData: {
    type: Object,
    required: true
  }
})
</script>
