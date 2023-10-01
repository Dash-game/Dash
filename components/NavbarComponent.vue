<script setup>
let menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// 上滑顯示

// teleport overflow hidden

</script>

<template>
  <CartBtnComponent class="fixed bottom-10 right-0 xl:hidden z-10"/>

  <div class="fixed top-0 left-0 right-0 w-full h-full backdrop-blur-lg z-20 xl:hidden duration-300 " :class="{'hidden':!menuOpen}" @click="toggleMenu"></div>
  <div id="navbar" class="fixed top-0 left-0 right-0 z-[1000]">
    <div class=" z-80 w-full  bg-primary bg-opacity-80 
      after:absolute 
      after:inset-0 
      after:bg-section
      after:z-20
      after:xl:hidden
      ">
      <!-- MENU 鍵 -->
      <button type="button" class="absolute top-[50%] -translate-y-[50%] xl:hidden p-3 z-30" @click="toggleMenu">
        <div class="w-6 h-5">
          <ul class="flex flex-col justify-between h-full">
            <li class="bg-white h-1 w-full origin-top-left duration-300" :class="{'rotate-45 translate-x-1':menuOpen}"></li>
            <li class="bg-white h-1 w-full duration-200" :class="{'opacity-0':menuOpen}"></li>
            <li class="bg-white h-1 w-full origin-bottom-left duration-300" :class="{'-rotate-45 translate-x-1':menuOpen}"></li>
          </ul>
        </div>
      </button>
      <div class="px-3 z-20 flex items-center justify-between py-2 mx-auto xl:py-6 ">
        <NuxtLink to="/" class="w-auto mx-auto xl:mr-8 xl:ml-0 z-30">
          <img src="../assets/images/logo.png" alt="Logo" class="h-12 xl:h-auto">      
        </NuxtLink>
        <div class="absolute left-0 flex flex-col xl:flex-row items-center w-full text-2xl text-center top-full xl:relative bg-primary xl:bg-transparent z-20 duration-300" :class="{'-translate-y-full xl:translate-y-0 ':!menuOpen}">
          <ul class="xl:flex pt-10 pb-8 xl:py-0">
            <li class="mb-5 xl:mb-0 xl:mr-5">
              <NuxtLink to="/" class="block text-light navlink active">
                <span class="pseudo">遊戲商店</span>
                <span data-text="遊戲商店" class="part"></span>
                <span data-text="遊戲商店" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-5 xl:mb-0 xl:mr-5">
              <NuxtLink to="/" class="block  text-light navlink">
                <span class="pseudo">遊戲類別</span>
                <span data-text="遊戲類別" class="part"></span>
                <span data-text="遊戲類別" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-5 xl:mb-0 xl:mr-5">
              <NuxtLink to="/" class="block  text-light navlink">
                <span class="pseudo">遊戲新聞</span>
                <span data-text="遊戲新聞" class="part"></span>
                <span data-text="遊戲新聞" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-5 xl:mb-0 xl:mr-5">
              <NuxtLink to="/" class="block  text-light navlink">
                <span class="pseudo">客服中心</span>
                <span data-text="客服中心" class="part"></span>
                <span data-text="客服中心" class="part"></span>
              </NuxtLink>
            </li>
          </ul>
          
          <div class="w-full xl:w-[364px] h-[44px] xl:rounded-full border-y xl:border border-secondary ml-auto xl:mr-6 pr-5 xl:pl-5 flex xl:hidden 2xl:flex justify-between items-center order-first xl:order-none">
            <input type="text" class="bg-transparent shadow-none border-none outline-none h-[44px] text-2xl w-full">
            <button type="button" class="duration-150 text-white hover:text-secondary">
              <Icon name="uil:search" />
            </button>
          </div>
          <button class="w-[50px] h-[50px] rounded-full border  xl:ml-auto 2xl:ml-0 mr-4 hidden xl:flex justify-center items-center text-white hover:text-secondary hover:border-secondary">
            <Icon name="uil:search" />
          </button>
          <CartBtnComponent class="relative hidden xl:block"/>
          <button class="block h-[68px] xl:h-[42px] xl:rounded-[20px/21px] xl:py-[6px] xl:px-2 xl:border-l-4 xl:border-r-4 xl:border-secondary w-full xl:w-auto xl:bg-transparent bg-section hover:bg-secondary text-secondary hover:text-primary duration-300">
            <div class="h-[32px] flex justify-center items-center xl:rounded-[14px/16px] xl:px-4 xl:border-l-4 xl:border-r-4 xl:border-secondary ">
              <Icon name="majesticons:login-line" />
              <span class="ml-2 text-xl  whitespace-nowrap">登入</span>
            </div>
          </button>
        </div>
      </div>
    </div>
   
  </div>

</template>

<style lang="scss" scoped>
// *{
//   outline: 1px solid #FAA
// }
.navlink{
  position: relative;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;

  transition: 0.2s;

  &.active{
    color: rgb(16 216 159 / var(--tw-text-opacity));

    &::before {
    background-color: rgb(16 216 159 / var(--tw-text-opacity));
    }
  }

  &::before{
    content:'';
    display: block;
    position: absolute;
    background-color: #c8c8c8;
    height: 1px;
    z-index: 50;
    top: 50%;
    right: 0;
    width: 0;

    transition: width 0.2s;
  }
  &:hover
  {
    &::before {
      width: 100%;
      left:0;
      transition: width position 0.2s
    }
  }
}


.navlink .pseudo {
  padding-left: 2px;
  padding-right: 2px;
  opacity: 0;
}

.navlink .part {
  width: 100%;
  position: absolute;
  height: 50%;
  overflow: hidden;
  top: 0;
  left: 20px;
}

.navlink .part:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0px;
}

.navlink .part + .part {
  top: 50%;
}

.navlink .part + .part:after {
  top: -100%;
  transition: .3s;
}

.navlink:hover .part + .part:after {
  left: 4px;
}
.navlink:hover {
  transform: translateX(-2px)
}
</style>