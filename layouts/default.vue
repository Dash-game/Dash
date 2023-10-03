<script setup>
  let hide = ref(false)

onMounted(()=>{
  if(process.client){
    window.addEventListener("scroll", handleScroll);
  }
})

  let scrollPosition = ref(0)
  const handleScroll = ()=>{
    if(window.scrollY > scrollPosition.value){
      hide.value = true
    } else {
      hide.value = false
    }

    scrollPosition.value = window.scrollY
  }

</script>
<template>
  <div>
    <NavbarComponent :hide="hide"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    />
    <slot />
  </div>
</template>
<style scoped>

</style>