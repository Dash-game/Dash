<template>
  <img class="w-10 h-10 rounded-full" :src="props.url" :alt="desc" />
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    default: 'avatar'
  }
})
</script>
