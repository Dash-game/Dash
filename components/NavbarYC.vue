<script setup>
// let menuOpen = ref(false)
// const toggleMenu = () => {
//   menuOpen.value = !menuOpen.value
// }
</script>

<template>
  <div id="navbar" class="relative ">
    <div class="sticky z-20 w-full t-0 bg-darkgray bg-opacity-80">
      <button type="button" class="absolute top-[50%] -translate-y-[50%] xl:hidden p-3" >
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 11.9996H18V9.99963H0V11.9996ZM0 6.99963H18V4.99963H0V6.99963ZM0 -0.000366211V1.99963H18V-0.000366211H0Z" fill="white"/>
        </svg>
      </button>
      <div class="container z-20 flex items-center justify-between py-2 mx-auto xl:py-6 ">
        <NuxtLink to="/" class="w-auto mx-auto xl:mr-8 xl:ml-0 bg-secondary">
          <img src="../assets/images/logo.png" alt="Logo" class="h-12 xl:h-auto">      
        </NuxtLink>
        <div class="absolute left-0 flex flex-col xl:flex-row items-center w-full text-2xl text-center top-full xl:relative bg-darkgray">
          <NuxtLink to="/" class="block mr-5 navlink text-maintext hover:text-secondary">
            <div>遊戲商店</div>
            </NuxtLink>
          <NuxtLink to="/" class="block mr-5 navlink text-maintext hover:text-secondary">
            <div>遊戲類別</div>
          </NuxtLink>
          <NuxtLink to="/" class="block mr-5 navlink text-maintext hover:text-secondary">
            <div>遊戲新聞</div>
          </NuxtLink>
          <NuxtLink to="/" class="block mr-5 navlink text-maintext hover:text-secondary">
            <div>收藏庫</div>
          </NuxtLink>
          
          <div class="xl:w-[364px] h-[44px] xl:rounded-full border border-secondary ml-auto xl:mr-6 xl:px-5 flex xl:hidden 2xl:flex justify-between items-center order-first xl:order-none">
            <input type="text" class="bg-transparent shadow-none border-none outline-none h-[44px] text-2xl w-full">
            <button type="button" class="duration-150 hover:translate-x-1">
              →
            </button>
          </div>


          <button class="w-[50px] h-[50px] rounded-full border  xl:ml-auto 2xl:ml-0 mr-4 hidden xl:flex justify-center items-center">
            Ｑ
          </button>
          <button class="relative w-[50px] h-[50px] rounded-full border mr-[30px] hidden xl:flex justify-center items-center">
            Ｒ
            <div class="absolute top-[-6px] right-[-6px] w-[20px] h-[20] rounded-full bg-secondary flex justify-center items-center">
              <span>1</span>
            </div>
          </button>
          <button class="block h-[42px] xl:rounded-[20px/21px] py-[6px] xl:px-2 xl:border-l-4 xl:border-r-4 xl:border-secondary w-full xl:w-auto">
            <div class="h-[32px] flex justify-center items-center xl:rounded-[14px/16px] xl:px-4 xl:border-l-4 xl:border-r-4 xl:border-secondary">
              →
              <span class="ml-2 text-xl text-secondary whitespace-nowrap">登入</span>
            </div>
          </button>

          
        </div>
        
        
      </div>
    </div>
    


  </div>

</template>

<style lang="scss" scoped>
*{
  outline: 1px solid #F00
}
.navlink{
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  &::before{
    content:'';
    position: absolute;
    top: 50%;
    left:0;
    background-color: #10D89F;
    height: 1px;
    width: 0%;
    transition: .3s ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }
}


</style>