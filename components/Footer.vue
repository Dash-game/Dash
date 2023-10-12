<script setup>
  import { ref, onMounted } from 'vue'
   
</script>
<template>
   <footer class="footer pt-8">
      <div class="container py-4">
        <span class="lg:mr-8">COPYRIGHT © 2023</span>
        <span>此為多人協作練習作品，非營利用途</span>
      </div>
   </footer>
</template>
<style>
  .footer{
    width: 50%;
    margin: auto;
  }
  .container{
    border-radius: 40px 40px 0px 0px;
    background: #303141;
    text-align: center;
  }
  .container span{
    display: block;
    font-size: clamp(14px, 2.5vw, 18px);
    color: #D9D9D9;
  }
  @media screen and (min-width:1024px){
    .container span{
      display: inline;
    }
    
  }
</style>
