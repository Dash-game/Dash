<template>
  <div class="bg-sec-banner bg-cover overflow-hidden">
    <div class="container py-8 md:py-12 lg:py-16 xl:py-18 relative">
      <hr
        class="mb-2 border-secondary md:absolute -right-1/2 md:w-[645px] lg:w-[860px] xl:w-[1070px] 2xl:w-[1280px]  md:top-[70px] lg:top-[90px] xl:top-[100px] "
      />
      <h1 class="text-20 md:text-32 xl:text-40 font-bold mb-4 text-white">
        PUBG: BATTLEGROUNDS
      </h1>
      <!-- 中間區塊 -->
      <div class="md:grid grid-cols-12 md:gap-5 xl:gap-14">
        <!-- 左 手機隱藏 -->
        <div class="md:col-span-8 md:block hidden">
          <div class="lg:flex lg:flex-col lg:justify-between lg:h-full">
            <img
              src="/images/sec1-banner.jpg"
              class="lg:h-full object-cover 2xl:h-auto"
              alt=""
            />

            <div class="grid grid-cols-12 md:mt-3 lg:mt-22">
              <img
                class="md:col-span-6 lg:col-span-3"
                src="/images/sec1-img4.jpg"
                alt=""
              />
              <img
                class="md:col-span-6 lg:col-span-3"
                src="/images/sec1-img3.jpg"
                alt=""
              />
              <img
                class="md:col-span-6 lg:col-span-3 md:mt-3 lg:mt-0"
                src="/images/sec1-img2.jpg"
                alt=""
              />
              <img
                class="md:col-span-6 lg:col-span-3 md:mt-3 lg:mt-0"
                src="/images/sec1-img1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- 右 -->
        <div class="col-span-4 h-full">
          <div class="flex flex-col h-full">
            <!-- tittle -->
            <div class="flex-1 mb-2 relative ">
              <img src="/images/sec1-img5.jpg" alt="" class="w-full mb-8 lg:mb-4" />
              <p class="font-bold text-28 hidden xl:block mt-3">
                PUBG: BATTLEGROUNDS
              </p>
              <!-- 定位線 -->
              <hr class="border-secondary md:absolute top-36 lg:top-[185px] xl:top-[260px] 2xl:top-[305px] lg:w-[490px] xl:w-[600px] -right-1/2 md:w-[360px] 2xl:w-[730px]" />
              <p class=" mt-3">
                在《雙人成行》中踏上人生中最瘋狂的旅程，利用好友通行證*邀請好友免費遊玩。
              </p>
            </div>
            <!-- price -->
            <div
              class="flex md:block lg:flex justify-between items-center mb-7 md:mb-4"
            >
              <div
                class="flex items-center font-medium relative md:justify-between"
              >
                <p class="text-36 text-labeldark mr-6">$ 1,982</p>
                <p
                  class="text-36 opacity-5 mr-4 absolute translate-x-6 translate-y-4"
                >
                  $ 1,982
                </p>
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

              <div class="flex md:mt-2 md:justify-end">
                <Icon name="mdi:microsoft-windows" class="mr-1 text-24" />
                <Icon name="mdi:linux" class="mr-1 text-24" />
                <Icon name="mdi:laptop-mac" class="text-24" />
              </div>
            </div>
            <button
              class="w-full button-sm xl:button-xl button-hover mb-3 md:mb-5 flex"
            >
              <p class="w-10 ml-6 absolute opacity-40">BUY</p>
              <p class="flex-1">立即購買</p>

              <p></p>
            </button>
            <button
              class="w-full button-outline-sm button-outline-hover xl:button-outline-xl mb-3 md:mb-5"
            >
              <p class="w-10 ml-6 absolute opacity-40">Cart</p>
              <p class="flex-1">加入購物車</p>
            </button>
            <button
              class="w-full button-outline-sm button-outline-hover xl:button-outline-xl"
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
