<script setup>
let menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
const closeMenu = () => {
  menuOpen.value = false
}

const categoryOpen = ref(false)
const toggleCategory = () => {
  categoryOpen.value = !categoryOpen.value
}


const props = defineProps({
  hide: false
})
const hide = ref({})

watch(
  () => props.hide,
  (newValue) => {
    hide.value = newValue
  },
  {
    immediate: true
  }
)


// teleport overflow hidden
</script>

<template>
<div>
  <!-- 購物車 -->
    <CartBtnComponent class="fixed bottom-10 right-0 xl:hidden z-10"/>

    <!-- 毛玻璃 -->
  <div class="fixed top-0 left-0 right-0 w-full h-full backdrop-blur-lg z-20 xl:hidden duration-300 " :class="{'hidden':!menuOpen}" @click="toggleMenu" 
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
  ></div>

  <!-- Navbar -->
  <div id="navbar" class="fixed top-0 left-0 right-0 z-[1000] duration-300" :class="{'xl:-translate-y-full':hide}">
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
        <NuxtLink to="/" class="w-auto mx-auto xl:mr-8 xl:ml-0 z-30" @click="closeMenu">
          <img src="../assets/images/logo.png" alt="Logo" class="h-12 xl:h-auto">      
        </NuxtLink>



        <!-- MENU -->
        <div class="absolute left-0 flex flex-col xl:flex-row items-center w-full text-2xl text-center top-full xl:relative bg-primary xl:bg-transparent z-20 duration-300" :class="{'-translate-y-full xl:translate-y-0 ':!menuOpen}">

          <!-- 電腦版 -->
          <ul class="hidden xl:flex py-0">
            <li class="mb-0 mr-5">
              <NuxtLink to="/game/1" class="block text-light navlink active" @click="closeMenu">
                <span class="pseudo">遊戲商店</span>
                <span data-text="遊戲商店" class="part"></span>
                <span data-text="遊戲商店" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-0 mr-5">
              <NuxtLink to="/" class="block  text-light navlink" >
                <span class="pseudo">遊戲類別</span>
                <span data-text="遊戲類別" class="part"></span>
                <span data-text="遊戲類別" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-0 mr-5">
              <NuxtLink to="/" class="block  text-light navlink" @click="closeMenu">
                <span class="pseudo">遊戲新聞</span>
                <span data-text="遊戲新聞" class="part"></span>
                <span data-text="遊戲新聞" class="part"></span>
              </NuxtLink>
            </li>
            <li class="mb-0 mr-5">
              <NuxtLink to="/" class="block  text-light navlink" @click="closeMenu">
                <span class="pseudo">客服中心</span>
                <span data-text="客服中心" class="part"></span>
                <span data-text="客服中心" class="part"></span>
              </NuxtLink>
            </li>
          </ul>
          
          <!-- 手機版 -->
          <div class="flex xl:hidden duration-300 w-[300vw] " >
            <div class="duration-300" :class="{'w-[100vw]':!categoryOpen, 'w-0':categoryOpen}"></div>
            <ul class="xl:hidden pt-10 pb-8  w-[100vw] duration-300">
              <li class="mb-5">
                <NuxtLink to="/game/1" class="block text-light navlink " @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">遊戲商店</span>
                    <span data-text="遊戲商店" class="part"></span>
                    <span data-text="遊戲商店" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <button type="button" class="block w-full text-light active navlink relative" @click="toggleCategory">
                  <div class="nav-design">
                    <span class="pseudo">遊戲類別</span>
                    <span data-text="遊戲類別" class="part"></span>
                    <span data-text="遊戲類別" class="part"></span>
                  </div>

                  <div class="absolute right-3 top-0">...</div>
                </button>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block w-full text-light navlink" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">遊戲新聞</span>
                    <span data-text="遊戲新聞" class="part"></span>
                    <span data-text="遊戲新聞" class="part"></span>                  
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block w-full text-light navlink" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">客服中心</span>
                    <span data-text="客服中心" class="part"></span>
                    <span data-text="客服中心" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
            </ul>

            <!-- 類別清單 -->
            <ul class="pt-10 pb-8 w-[100vw] overflow-y-auto duration-300 category-scrollbar" :class="{'h-0':!categoryOpen, 'h-[calc(100vh-174px)]':categoryOpen}">
              <li class="mb-5">
                <button class="w-full navlink relative" @click="toggleCategory">
                  <div class="nav-design">
                    <span class="pseudo">返回目錄</span>
                    <span data-text="返回目錄" class="part"></span>
                    <span data-text="返回目錄" class="part"></span>                    
                  </div>
                  <div class="absolute left-3 top-0">...</div>
                </button>
              </li>
              <li class="mb-5">
                <NuxtLink to="#" class="block navlink w-full">
                  <div class="nav-design">
                    <span class="pseudo">類別1</span>
                    <span data-text="類別1" class="part"></span>
                    <span data-text="類別1" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="#" class="block navlink w-full">
                  <div class="nav-design">
                    <span class="pseudo">類別2</span>
                    <span data-text="類別2" class="part"></span>
                    <span data-text="類別2" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="#" class="block navlink w-full">
                  <div class="nav-design">
                    <span class="pseudo">類別3</span>
                    <span data-text="類別3" class="part"></span>
                    <span data-text="類別3" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="#" class="block navlink w-full">
                  <div class="nav-design">
                    <span class="pseudo">類別4</span>
                    <span data-text="類別4" class="part"></span>
                    <span data-text="類別4" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="#" class="block navlink w-full">
                  <div class="nav-design">
                    <span class="pseudo">類別5</span>
                    <span data-text="類別5" class="part"></span>
                    <span data-text="類別5" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="#" class="block navlink w-full">
                  <div class="nav-design">
                    <span class="pseudo">類別6</span>
                    <span data-text="類別6" class="part"></span>
                    <span data-text="類別6" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="#" class="block navlink w-full">
                  <div class="nav-design">
                    <span class="pseudo">類別7</span>
                    <span data-text="類別7" class="part"></span>
                    <span data-text="類別7" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
             
            </ul>

          </div>

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

</div>

</template>

<style lang="scss" scoped>
// *{
//   outline: 1px solid #FAA
// }
.navlink {

  &.active{
    color: rgb(16 216 159 / var(--tw-text-opacity));

    & .nav-design::before {
    background-color: rgb(16 216 159 / var(--tw-text-opacity));
    }
  }
.nav-design {

    position: relative;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;

    transition: 0.2s;







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


}

  &:hover .nav-design{
    &::before {
      width: 100%;
      left:0;
      transition: width position 0.2s
    }
  }


}




.nav-design  .pseudo {
  padding-left: 2px;
  padding-right: 2px;
  opacity: 0;
}

.nav-design  .part {
  width: 100%;
  position: absolute;
  height: 50%;
  overflow: hidden;
  top: 0;
  left: 20px;
}

.nav-design  .part:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0px;
}

.nav-design  .part + .part {
  top: 50%;
}

.nav-design  .part + .part:after {
  top: -100%;
  transition: .3s;
}

.navlink:hover .nav-design  .part + .part:after {
  left: 4px;
}
.navlink:hover .nav-design{
  transform: translateX(-2px)
}




.category-scrollbar::-webkit-scrollbar {
    width: 8px; /*滚动条的宽度*/
}
.category-scrollbar::-webkit-scrollbar-track{
    background-color: rgb(34 36 52 / var(--tw-text-opacity));
    -webkit-border-radius: 5px;

}
.category-scrollbar::-webkit-scrollbar-thumb { /*垂直滚动条的样式*/
    background-color: #FFB800;
    -webkit-border-radius: 5px;
  border: 2px solid rgb(34 36 52 / var(--tw-text-opacity));
}
.category-scrollbar::-webkit-scrollbar-thumb:hover { /*滚动条的hover样式*/
    background-color: #9f9f9f;
}

</style>