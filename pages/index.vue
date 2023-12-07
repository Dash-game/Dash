<template>
  <div class="container lg:pt-[114px]">
    <h1 class="text-48">首頁 index</h1>
    <router-link to="/member">
      <button class="button-md px-10">前往會員中心</button>
    </router-link>

  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

</script>
