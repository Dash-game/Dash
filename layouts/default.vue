<script setup>
let hide = ref(false);

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

let scrollPosition = ref(0);
const handleScroll = () => {
  if (window.scrollY > scrollPosition.value) {
    hide.value = true;
  } else {
    hide.value = false;
  }

  scrollPosition.value = window.scrollY;
};
</script>
<template>
  <!-- pb 讓 footer 不要擋住內容 -->
  <div class="relative pb-24">
    <NavbarComponent :hide="hide"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    />
    <slot />
    <FooterComponent />
  </div>
</template>
<style scoped></style>
