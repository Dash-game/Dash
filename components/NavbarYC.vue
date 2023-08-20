<template>
  <div id="navbar" class="flex justify-center items-center bg-[#222434] text-[#D9D9D9] py-6 px-10">
    <NuxtLink to="/" class="hover:text-black mr-8">
      <img src="../assets/images/logo.png" alt="Logo" class="">      
    </NuxtLink>
    <div class="flex text-2xl">
      <NuxtLink to="/games" class="navlink hover:text-[#10D89F] mr-5">
        <span class="">遊戲商店</span>
        </NuxtLink>
      <NuxtLink to="/games" class="navlink hover:text-[#10D89F] mr-5">
        <span>遊戲類別</span>
      </NuxtLink>
      <NuxtLink to="/news" class="navlink hover:text-[#10D89F] mr-5">
        <span>遊戲新聞</span>
      </NuxtLink>
      <NuxtLink to="/member" class="navlink hover:text-[#10D89F] mr-5">
        <span class="">收藏庫</span>
      </NuxtLink>
    </div>


    <div class="w-[364px] h-[44px] rounded-full border border-[#10D89F] ml-auto mr-6 px-5 flex justify-between items-center">
      <input type="text" class="bg-transparent outline-none h-[44px] text-2xl">
      <span class="hover:translate-x-1 duration-150">
        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.0508 6.96032C21.3437 6.66743 21.3437 6.19256 21.0508 5.89966L16.2779 1.12669C15.985 0.833798 15.5101 0.833798 15.2172 1.12669C14.9243 1.41959 14.9243 1.89446 15.2172 2.18735L19.4598 6.42999L15.2172 10.6726C14.9243 10.9655 14.9243 11.4404 15.2172 11.7333C15.5101 12.0262 15.985 12.0262 16.2779 11.7333L21.0508 6.96032ZM0.520508 7.17999H20.5205V5.67999H0.520508V7.17999Z" fill="#D9D9D9"/>
        </svg>
      </span>
    </div>
    <button class="w-[50px] h-[50px] rounded-full border mr-4 flex justify-center items-center">
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3368 23.783C19.3283 23.783 24.1853 18.9361 24.1853 12.9571C24.1853 6.9781 19.3283 2.13116 13.3368 2.13116C7.34533 2.13116 2.48828 6.9781 2.48828 12.9571C2.48828 18.9361 7.34533 23.783 13.3368 23.783Z" stroke="#D9D9D9" stroke-width="3.04478" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.896 26.4894L20.9971 20.6028" stroke="#D9D9D9" stroke-width="3.04478" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="relative w-[50px] h-[50px] rounded-full border mr-[30px] flex justify-center items-center">
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3959 24.339C10.9997 24.339 11.4891 23.8506 11.4891 23.2481C11.4891 22.6456 10.9997 22.1572 10.3959 22.1572C9.79217 22.1572 9.30273 22.6456 9.30273 23.2481C9.30273 23.8506 9.79217 24.339 10.3959 24.339Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.4213 24.339C23.0251 24.339 23.5145 23.8506 23.5145 23.2481C23.5145 22.6456 23.0251 22.1572 22.4213 22.1572C21.8176 22.1572 21.3281 22.6456 21.3281 23.2481C21.3281 23.8506 21.8176 24.339 22.4213 24.339Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.65039 1.42999H6.02314L8.95288 16.0373C9.05284 16.5395 9.32665 16.9907 9.72636 17.3118C10.1261 17.6329 10.6262 17.8034 11.1392 17.7936H21.765C22.2781 17.8034 22.7782 17.6329 23.1779 17.3118C23.5776 16.9907 23.8514 16.5395 23.9514 16.0373L25.7005 6.88454H7.11632" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="absolute top-[-6px] right-[-6px] w-[20px] h-[20] rounded-full bg-[#10D89F] flex justify-center items-center">
        <span>1</span>
      </div>
    </button>
    <button class="h-[42px] rounded-[20px/21px] py-[6px] px-2 border-l-4 border-r-4 border-[#10D89F]">
      <div class="h-[32px] flex justify-between items-center rounded-[14px/16px] px-4 border-l-4 border-r-4 border-[#10D89F]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.457 1.58856H14.7313C15.1655 1.58856 15.5819 1.76105 15.8889 2.06807C16.196 2.37509 16.3685 2.79151 16.3685 3.2257V14.6857C16.3685 15.1199 16.196 15.5363 15.8889 15.8433C15.5819 16.1504 15.1655 16.3228 14.7313 16.3228H11.457" stroke="#10D89F" stroke-width="1.84178" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.36426 13.0486L11.4571 8.95577L7.36426 4.86292" stroke="#10D89F" stroke-width="1.84178" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.4576 8.95569H1.63477" stroke="#10D89F" stroke-width="1.84178" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-xl text-[#10D89F] ml-2">登入</span>
      </div>
    </button>

  </div>

</template>

<style lang="scss" scoped>
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