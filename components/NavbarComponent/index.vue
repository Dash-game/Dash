<script setup>

// 判斷是不是首頁
const isHome = ref(true)
const route = useRoute()
watch(
  ()=>route.path, 
  () => {
  isHome.value = route.path == '/' || route.path == '/login' ? true : false
}, {deep: true, immediate: true})


// menu開闔
let menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if(!menuOpen.value){
    categoryOpen.value = false
  }
}
const closeMenu = () => {
  menuOpen.value = false
  categoryOpen.value = false
}

const categoryOpen = ref(false)
const toggleCategory = () => {
  categoryOpen.value = !categoryOpen.value
}

// 是否已登入
const loginStore = useLoginStore()


// 上下滑 menu 開闔
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

// category menu 是否有scrollbar
const categoryMenu = ref(null)
const checkScrollbar = (e) =>{
  if(categoryMenu.value.clientHeight==categoryMenu.value.scrollHeight){
    e.preventDefault();
  }
}
</script>

<template>
<div class="sticky top-0 z-[1000]" >
  <!-- 購物車 -->
    <CartBtnComponent class="fixed bottom-10 right-0 xl:hidden z-10"/>

    <!-- 毛玻璃 -->
  <div class="fixed top-0 left-0 right-0 w-full h-full backdrop-blur-lg z-20 xl:hidden duration-300 " :class="{'hidden':!menuOpen}" @click="toggleMenu" ></div>

  <!-- Navbar -->
  <div id="navbar" class="sticky top-0 z-[1000] duration-300" :class="{'xl:fixed left-0 right-0':isHome,'xl:-translate-y-full':hide}">
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
      <div class="px-3 z-20 flex items-center py-2 mx-auto" :class="{'xl:py-0':loginStore.loggedIn}">
        <!-- logo -->
        <NuxtLink to="/" class="block xl:h-[76px] w-auto mx-auto xl:mr-8 xl:ml-0 z-30" @click="closeMenu">
          <img src="@/assets/images/logo.png" alt="Logo" class="h-12 xl:h-[76px]">      
        </NuxtLink>

        <!-- MENU -->
        <div class="absolute left-0 flex flex-col xl:flex-row items-center w-full xl:w-auto grow text-2xl text-center top-full xl:relative bg-primary xl:bg-transparent z-20 duration-300 overflow-x-hidden" :class="{'-translate-y-full xl:translate-y-0 ':!menuOpen}">

          <!-- 電腦版 -->
          <ul class="hidden xl:flex py-0 whitespace-nowrap">
            <li class="mr-2">
              <NuxtLink to="/game/1" class="block text-light navlink active" @click="closeMenu">
                <div class="nav-design">
                  <span class="pseudo">遊戲商店</span>
                  <span data-text="遊戲商店" class="part"></span>
                  <span data-text="遊戲商店" class="part"></span>
                </div>
              </NuxtLink>
            </li>
            <li class="mr-2">
              <NuxtLink to="/" class="block  text-light navlink" >
                <div class="nav-design">
                  <span class="pseudo">遊戲類別</span>
                  <span data-text="遊戲類別" class="part"></span>
                  <span data-text="遊戲類別" class="part"></span>
                </div>
              </NuxtLink>
            </li>
            <li class="mr-2">
              <NuxtLink to="/news" class="block  text-light navlink" @click="closeMenu">
                <div class="nav-design">
                  <span class="pseudo">遊戲新聞</span>
                  <span data-text="遊戲新聞" class="part"></span>
                  <span data-text="遊戲新聞" class="part"></span>
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/help" class="block  text-light navlink" @click="closeMenu">
                <div class="nav-design">
                  <span class="pseudo">客服中心</span>
                  <span data-text="客服中心" class="part"></span>
                  <span data-text="客服中心" class="part"></span>
                </div>
              </NuxtLink>
            </li>
          </ul>
          
          <!-- 手機版 -->
          <div class="flex xl:hidden duration-300 w-[300%]" >
            <div class="duration-300" :class="{'w-[33.33%]':!categoryOpen, 'w-0':categoryOpen}"></div>
            <ul class="xl:hidden pt-10 pb-8  w-[33.33%] duration-300 "
            >
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

                  <div class="absolute right-6 top-0">
                    <Icon name="mdi:dots-horizontal" />
                  </div>
                </button>
              </li>
              <li class="mb-5">
                <NuxtLink to="/news" class="block w-full text-light navlink" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">遊戲新聞</span>
                    <span data-text="遊戲新聞" class="part"></span>
                    <span data-text="遊戲新聞" class="part"></span>                  
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/help" class="block w-full text-light navlink" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">客服中心</span>
                    <span data-text="客服中心" class="part"></span>
                    <span data-text="客服中心" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
            </ul>

            <!-- 類別清單 -->
            <ul ref="categoryMenu" class="pt-10 pb-8 w-[33.33%] overflow-y-scroll overscroll-contain duration-300 category-scrollbar relative" :class="{'h-0':!categoryOpen, 'h-[calc(100vh-132px)]':categoryOpen}"
            @wheel.stop="checkScrollbar"
            @touchmove.stop="checkScrollbar"
            @scroll.stop="checkScrollbar"
            >
              <li class="mb-5">
                <button class="w-full navlink relative" @click="toggleCategory">
                  <div class="nav-design">
                    <span class="pseudo">返回目錄</span>
                    <span data-text="返回目錄" class="part"></span>
                    <span data-text="返回目錄" class="part"></span>                    
                  </div>
                  <div class="absolute left-6 top-0">
                    <Icon name="mdi:dots-horizontal" />
                  </div>
                </button>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block navlink w-full" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">類別1</span>
                    <span data-text="類別1" class="part"></span>
                    <span data-text="類別1" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block navlink w-full" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">類別2</span>
                    <span data-text="類別2" class="part"></span>
                    <span data-text="類別2" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block navlink w-full" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">類別3</span>
                    <span data-text="類別3" class="part"></span>
                    <span data-text="類別3" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block navlink w-full" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">類別4</span>
                    <span data-text="類別4" class="part"></span>
                    <span data-text="類別4" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block navlink w-full" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">類別5</span>
                    <span data-text="類別5" class="part"></span>
                    <span data-text="類別5" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block navlink w-full" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">類別6</span>
                    <span data-text="類別6" class="part"></span>
                    <span data-text="類別6" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/" class="block navlink w-full" @click="closeMenu">
                  <div class="nav-design">
                    <span class="pseudo">類別7</span>
                    <span data-text="類別7" class="part"></span>
                    <span data-text="類別7" class="part"></span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- 搜尋欄 -->
          <div v-if="!isHome" class="w-full xl:max-w-[364px] h-[44px] xl:rounded-full border-y xl:border border-secondary ml-auto xl:mr-6 pr-5 xl:pl-5 flex 2xl:flex justify-between items-center order-first xl:order-none">
            <input type="text" class="bg-transparent shadow-none border-none outline-none h-[44px] text-2xl w-full">
            <button type="button" class="duration-150 text-white hover:text-secondary flex items-center">
              <Icon name="uil:search" />
            </button>
          </div>
          <!-- 搜尋按鈕 -->
          <button v-else class="w-[50px] h-[50px] rounded-full border ml-auto mr-4 hidden xl:flex justify-center items-center text-white hover:text-secondary hover:border-secondary">
            <Icon name="uil:search" />
          </button>
          <!-- 購物車 -->
          <CartBtnComponent class="relative hidden xl:block my-2"/>
          <!-- 登入按鈕 -->
          <nuxt-link to="/login" class="block w-full xl:w-auto"  @click="closeMenu" :class="{'hidden':loginStore.loggedIn}">
            <button class="block w-full h-[68px] xl:h-[42px] xl:rounded-[20px/21px] xl:py-[6px] xl:px-2 xl:border-l-4 xl:border-r-4 xl:border-secondary xl:bg-transparent bg-section hover:bg-secondary text-secondary hover:text-primary duration-300" >
              <div class="h-[32px] flex justify-center items-center xl:rounded-[14px/16px] xl:px-4 xl:border-l-4 xl:border-r-4 xl:border-secondary ">
                <Icon name="majesticons:login-line" />
                <span class="ml-2 text-xl  whitespace-nowrap">登入</span>
              </div>
            </button>            
          </nuxt-link>
        </div>

        <!-- 會員中心 -->
        <div class="absolute top-0 right-0 xl:relative w-[122px] h-16 xl:h-[92px] flex flex-col items-center justify-center group " :class="{'hidden':!loginStore.loggedIn}">
          <a href="#" class="absolute top-0 flex flex-col items-center justify-center w-full h-full xl:bg-primary z-40">
            <img src="https://s3-alpha-sig.figma.com/img/cfbf/8e85/c101d9ee509ebd1615efb93f1332b8d2?Expires=1701648000&Signature=BS6nVO7d6q6c03Ihi0h2zyaSAbTnNJMWK1y2Q5axpUmNrJO4d~p0eSFMcSm7snivW2lwcCmBPBQIqDLDK1BZeZ7awwmLanq78qjyMG~VzKoF11Wq8TcWPx~8yudJli6heuM8ShKKLTA-QB1BoH0aJEwofJSuq4LRKDSJXGa-BXQEZ5JnJEuta9sLrU20wjARSMjC8JJxeLhnfyrTs1pA9zwPVjSaTIgsEJ~W7NGB1Ovu9l3K9QiVui3qjDRq-6KA14usvOhMD02Z-XiN9QkKBnOih9gZWE5Q7XWxahlJEu2GbMv6MjczvbdZxaqBOvfocahyG-Fsd5zoB~-gao2org__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" class="block w-[52px] h-[52px] rounded-xl object-cover">
            <div class="text-base">Mouse3153</div>
          </a>
          <div class="absolute top-full w-full  -translate-y-full group-hover:-translate-y-0 transition-transform duration-300">
            <ul class="rounded-b-xl shadow border border-primary text-center ">
              <li class="hover:text-secondary bg-section border border-primary">
                <NuxtLink to="/" class="block py-2">收藏庫</NuxtLink>
              </li>
              <li class="hover:text-secondary bg-section border border-primary">
                <NuxtLink to="/" class="block py-2">願望清單</NuxtLink>
              </li>
              <li class="hover:text-secondary bg-section border border-primary">
                <NuxtLink to="/" class="block py-2">遊戲評論</NuxtLink>
              </li>
              <li class="hover:text-secondary bg-section border border-primary rounded-b-xl">
                <button type="button" class="w-full py-2" @click="loginStore.loggedIn = false">登出</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
  @import url("./style.css");
  *{
    outline: 1px solid #A00
  }
</style>