<template>
  <div class="bg-sec-banner bg-cover">
    <div class="container py-10 md:py-20">
      <hr class="mb-2 border-secondary" />
      <h1 class="text-20 xl:text-40 font-bold mb-4 text-white">
        PUBG: BATTLEGROUNDS
      </h1>
      <!-- 中間區塊 -->
      <div class="md:grid grid-cols-12 gap-14">
        <!-- 左 手機隱藏 -->
        <div class="md:col-span-8 md:block hidden">
          <img src="/images/sec1-banner.jpg" alt="" />

          <div class="grid grid-cols-12 mt-10">
            <img class="col-span-3" src="/images/sec1-img4.jpg" alt="" />
            <img class="col-span-3" src="/images/sec1-img3.jpg" alt="" />
            <img class="col-span-3" src="/images/sec1-img2.jpg" alt="" />
            <img class="col-span-3" src="/images/sec1-img1.jpg" alt="" />
          </div>
        </div>

        <!-- 右 -->
        <div class="md:col-span-4 h-full">
          <div class="flex flex-col h-full ">
            <!-- tittle -->
            <div class="flex-1">
              <img src="/images/sec1-img5.jpg" alt="" />
              <hr class="mb-2 mt-6 border-secondary" />
              <p class="font-bold text-28 hidden xl:block">
                PUBG: BATTLEGROUNDS
              </p>
              <p>
                《雙人成行》中踏上人生中最瘋狂的旅程。利用好友通行證*邀請好友免費遊玩。
              </p>
            </div>
            <!-- price -->
            <div class="flex justify-between items-center mb-7 ">
              <div class="flex items-center">
                <p class="text-36 text-labeldark font-medium mr-6">$ 1,982</p>
                <div>
                  <p class="text-labellight leading-none text-32">-42%</p>
                  <p class="text-18 leading-none line-through"> $ 1,982 </p>
                </div>
              </div>

              <div class="flex">
                <img class="mr-1" src="/icons/pc.png" alt="" />
                <img class="mr-1" src="/icons/ps4.png" alt="" />
                <img  src="/icons/xbox.png" alt="" />
              </div>
            </div>
            <button class="w-full mb-2 buttonPrimary text-20">立即購買</button>
            <button class="w-full  mb-2 buttonOutline text-20">加入購物車</button>
            <button class="w-full  button text-20  buttonOutline">加入願望清單</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .buttonPrimary{
    @apply bg-secondary py-3 rounded-xl  text-primary 
  }
  .buttonOutline{
    @apply outline-secondary outline-1 outline py-3 rounded-xl  text-secondary
  }

</style>
