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
  <div class=" relative">
    <NavbarComponent :hide="hide" />
    <slot />
    <FooterComponent />
  </div>
</template>
<style scoped></style>
