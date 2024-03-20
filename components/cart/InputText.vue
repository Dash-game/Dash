<template>
  <label :for="name" class="block mb-2 text-sm font-medium">{{ label }}</label>
  <input :id="name" v-model="value" :type="type || 'text'" />
  <div class="text-red-400">{{ errorMessage }}</div>
</template>

<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  name: String,
  type: String,
  label: String
})

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField(() => props.name)
</script>
