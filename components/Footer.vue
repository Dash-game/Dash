<script setup>
  import { ref, onMounted } from 'vue'
   
</script>
<template>
   <footer class="footer w-2/4 m-auto pt-8">
      <div class="container bg-section py-4 text-center">
        <span class="block lg:inline lg:mr-8 decoration-light">COPYRIGHT © 2023</span>
        <span class="block lg:inline">此為多人協作練習作品，非營利用途</span>
      </div>
   </footer>
</template>
<style>
  .footer{
    /* width: 50%;
    margin: auto; */
  }
  .container{
    border-radius: 40px 40px 0px 0px;
    /* background: #303141; */
    /* text-align: center; */
  }
  .container span{
    font-size: clamp(14px, 2.5vw, 18px);
    /* color: #D9D9D9; */
  }
</style>
