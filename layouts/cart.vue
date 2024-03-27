<script setup>
let hide = ref(false);


</script>
<template>
  <!-- pb 讓 footer 不要擋住內容 -->
  <div class="h-[100vh] pb-24 flex flex-col">
    <Navbar :hide="hide"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    />
    <div class="  grow shrink">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>
<style scoped></style>
