<script setup>
import { ref, onMounted } from "vue";

// 判斷是不是登入頁
const isLogin = ref(true)
const route = useRoute()
watch(
  ()=>route.path, 
  () => {
  isLogin.value = route.path == '/login' ? true : false
}, {deep: true, immediate: true})


</script>
<template>
  <footer class="footer  lg:w-1/2 m-auto pt-8 absolute bottom-0  left-0 right-0 " :class="{'hidden': isLogin}">
    <div class="   lg:rounded-t-[40px] bg-section py-4 text-center">
      <span class="block lg:inline lg:mr-8 decoration-light">COPYRIGHT © 2023</span>
      <span class="block lg:inline">此為多人協作練習作品，非營利用途</span>
    </div>
  </footer>
</template>
<style scoped>
/* .container {
  border-radius: 40px 40px 0px 0px;
} */
.container span {
  font-size: clamp(14px, 2.5vw, 18px);
}
</style>
