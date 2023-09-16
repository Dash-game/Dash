<template>
  <div class="container">
    <h1 class="text-48">首頁 index</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const newsStore = useNewsStore();
</script>
