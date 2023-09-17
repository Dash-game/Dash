<template>
  <div class="bg-sec-banner bg-cover">
    <div class="container py-8 md:py-20">
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
          <div class="flex flex-col h-full">
            <!-- tittle -->
            <div class="flex-1 mb-2">
              <img src="/images/sec1-img5.jpg" alt="" />
              <hr class="mb-3 mt-6 border-secondary" />
              <p class="font-bold text-28 hidden xl:block">
                PUBG: BATTLEGROUNDS
              </p>
              <p>
                在《雙人成行》中踏上人生中最瘋狂的旅程，利用好友通行證*邀請好友免費遊玩。
              </p>
            </div>
            <!-- price -->
            <div class="flex justify-between items-center mb-7">
              <div class="flex items-center font-medium relative">
                <p class="text-36 text-labeldark mr-6">$ 1,982</p>
                <p class="text-36 opacity-5  mr-4 absolute translate-x-6 translate-y-4">$ 1,982</p>
                <div>
                  <p class="text-labellight leading-none text-32">- 42%</p>
                  <div class="relative text-center">
                    <!-- 定位刪除線 -->
                    <div
                      class="h-[1px] w-full bg-white absolute -left-0 top-1/2"
                    ></div>
                    <p class="text-18 leading-none">$ 1,982</p>
                  </div>
                </div>
              </div>

              <div class="flex">
                <Icon name="mdi:microsoft-windows" class="mr-1 text-24" />
                <Icon name="mdi:linux" class="mr-1 text-24" />
                <Icon name="mdi:laptop-mac" class="text-24" />
              </div>
            </div>
            <button
              class="w-full button-sm md:button-xl button-hover mb-3 md:mb-5 flex"
            >
              <p class="w-10 ml-6 absolute opacity-40">BUY</p>
              <p class="flex-1">立即購買</p>

              <p></p>
            </button>
            <button
              class="w-full button-outline-sm button-outline-hover md:button-outline-xl mb-3 md:mb-5"
            >
              <p class="w-10 ml-6 absolute opacity-40">Cart</p>
              <p class="flex-1">加入購物車</p>
            </button>
            <button
              class="w-full button-outline-sm button-outline-hover md:button-outline-xl"
            >
              <p class="w-10 ml-6 absolute opacity-40">Add</p>
              <p class="flex-1">加入願望清單</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
