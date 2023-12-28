<template>
  <form class="basis-full lg:basis-1/2">
    <label for="default-search" class="mb-2 text-primary text-24 sr-only"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-10 pointer-events-none"
      >
        <Icon
          name="material-symbols:search"
          class="text-primary"
          size="32"
        ></Icon>
      </div>
      <input
        :searchValue="searchValue"
        @input="onInput"
        type="search"
        id="default-search"
        class="block w-full p-3 ps-20 text-24 text-primary border border-gray-300 rounded bg-white focus:ring-secondary focus:border-secondary"
        placeholder="search..."
        required
      />
    </div>
  </form>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  searchValue: {
    type: String,
  }
})
const emit = defineEmits();

/**
 * enter search input value
 * @param { string } value
 */
const onInput = event => emit('update:searchValue', event.target.value);
</script>
