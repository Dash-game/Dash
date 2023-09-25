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
        <NuxtLink to="/" class="w-auto mx-auto xl:mr-8 xl:ml-0">
          <img src="../assets/images/logo.png" alt="Logo" class="h-12 xl:h-auto">      
        </NuxtLink>
        <div class="absolute left-0 flex flex-col xl:flex-row items-center w-full text-2xl text-center top-full xl:relative bg-darkgray">
          <ul class="xl:flex pt-10 pb-8">
            <li class="mb-5 xl:mb-0 xl:mr-5">
              <NuxtLink to="/" class=" navlink text-light active">
                <span class="pseudo">遊戲商店</span>
                <span data-text="遊戲商店" class="part"></span>
                <span data-text="遊戲商店" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-5 xl:mb-0 xl:mr-5">
              <NuxtLink to="/" class="block navlink  text-light">
                <span class="pseudo">遊戲類別</span>
                <span data-text="遊戲類別" class="part"></span>
                <span data-text="遊戲類別" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-5 xl:mb-0 xl:mr-5">
              <NuxtLink to="/" class="block navlink  text-light">
                <span class="pseudo">遊戲新聞</span>
                <span data-text="遊戲新聞" class="part"></span>
                <span data-text="遊戲新聞" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-5 xl:mb-0 xl:mr-5">
              <NuxtLink to="/" class="block navlink  text-light">
                <span class="pseudo">收藏庫</span>
                <span data-text="收藏庫" class="part"></span>
                <span data-text="收藏庫" class="part"></span>
              </NuxtLink>
            </li>
          </ul>
          
          
          
         
          
          <div class="w-full xl:w-[364px] h-[44px] xl:rounded-full border border-secondary ml-auto xl:mr-6 xl:px-5 flex xl:hidden 2xl:flex justify-between items-center order-first xl:order-none">
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
  // outline: 1px solid #F00
}
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
    // background-color: #FAA5;
}

.navlink .part {
    width: 100%;
    position: absolute;
    height: 50%;
    overflow: hidden;
    top: 0;
    left: 20px;
    // transition-duration: .3s;

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