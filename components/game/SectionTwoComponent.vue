<script setup>
import db from "@/db.json"
// const data = db.game[0]
const item = db.game[0]
const data = item[item.id].data
const score = data.metacritic.score / 10

</script>
<template>
  <section class="py-10 lg:py-14 bg-section text-light">
    <div class="container mx-auto">
      <div class="grid gap-x-14 lg:grid-cols-3">
        
          <div id="description" class="mb-10 lg:col-span-2">
            <div class="border border-labellight px-11 py-8 rounded-[20px] flex flex-wrap justify-between items-center gap-y-8 mb-5 lg:mb-10">
              <div class="order-1 w-full lg:w-5/6">
                <h2 class="mb-5">
                  <span class="mr-3 text-28">遊戲簡介</span>
                  <span class="font-medium text-24">description</span>
                </h2>
                <ul id="tags" class="flex flex-wrap text-[12px] text-white">
                  <li v-for="tagItem in data.categories" class="px-3 py-1 mr-2 mb-2 rounded bg-tab">{{ tagItem.description }}</li>
                  <li v-for="tagItem in data.genres" class="px-3 py-1 mr-2 mb-2 rounded bg-tab">{{ tagItem.description }}</li>
                </ul>
              </div>
              <div class="flex items-center justify-center order-3 w-16 h-16 bg-score-high lg:order-2 rounded-xl text-28 lg:text-40 lg:rounded-3xl lg:w-20 lg:h-20" :class="{'bg-score-high':score>=8, 'bg-score-mid':score<8 && score>=4, 'bg-score-low':score<4}">
                {{score}}
              </div>
                <ul class="order-2 lg:order-3 ">
                  <li>發行日期：{{ data.release_date.date }} </li>
                  <li>開發人員：{{data.developers.join("、")}}</li>
                  <li>發行商：{{data.publishers.join("、")}}</li>
                </ul>
                <button class="order-4 w-full py-3 border rounded-lg lg:w-64 text-secondary border-secondary md:rounded-xl text-20">評論此遊戲</button>
              </div>
              <p v-html="data.about_the_game"></p>
          </div>
          
          <div id="combo" class="lg:row-span-2 ">
            <h2 class="pb-1 mb-5 border-b border-secondary lg:border-transparent relative 
            after:absolute 
            after:w-full 
            after:top-full 
            after:right-full 
            after:h-[1px] 
            after:bg-secondary
            lg:after:bg-transparent">
              <span class="mr-3 text-28">超值組合包</span>
              <span class="font-medium text-24">Special</span>
            </h2>
            <ul>
              <li v-for="packageItem in data.package_groups" class="px-4 pt-6 pb-5 mb-7 border border-labellight  rounded-[20px]">
                <h3 class="mb-2 text-24">購買豪華禮包</h3>
                <p class="mb-4 text-18">包含PUNG:BATTLEGROUNDS 遊戲本體 + DLC</p>
                <div class="flex items-center mb-6">
                  <div class="[text-shadow:_16px_12px_0_rgb(255_255_255_/_5%),_0_5px_5px_#0004] text-32 font-bold text-labeldark">${{packageItem.subs[0].price_in_cents_with_discount / 100}}</div>
                  <div class="ml-6">
                    <div v-if="packageItem.subs.percent_savings" class="mb-0 font-bold leading-5 text-20 text-labellight">-{{packageItem.subs.percent_savings}}%</div>
                    <div v-if="packageItem.subs.percent_savings" class="leading-3 line-through text-12">1982</div>
                  </div>
                </div>
                <button class="w-full py-3 border rounded-lg border-secondary text-secondary">加入購物車</button>
              </li>
              <!-- <li class="px-4 pt-6 pb-5 mb-7 border border-labellight  rounded-[20px]">
                <h3 class="mb-2 text-24">購買豪華禮包</h3>
                <p class="mb-4 text-18">包含PUNG:BATTLEGROUNDS 遊戲本體 + DLC</p>
                <div class="flex items-center mb-6">
                  <div class="[text-shadow:_16px_12px_0_rgb(255_255_255_/_5%),_0_5px_5px_#0004] text-32 font-bold text-labeldark">$1982</div>
                  <div class="ml-6">
                    <div class="mb-0 font-bold leading-5 text-20 text-labellight">-42%</div>
                    <div class="leading-3 line-through text-12">1982</div>
                  </div>
                </div>
                <button class="w-full py-3 border rounded-lg border-secondary text-secondary">加入購物車</button>
              </li>
              <li class="px-4 pt-6 pb-5 mb-7 border border-labellight  rounded-[20px]">
                <h3 class="mb-2 text-24">購買豪華禮包</h3>
                <p class="mb-4 text-18">包含PUNG:BATTLEGROUNDS 遊戲本體 + DLC</p>
                <div class="flex items-center mb-6">
                  <div class="[text-shadow:_16px_12px_0_rgb(255_255_255_/_5%),_0_5px_5px_#0004] text-32 font-bold text-labeldark">$1982</div>
                  <div class="ml-6">
                    <div class="mb-0 font-bold leading-5 text-20 text-labellight">-42%</div>
                    <div class="leading-3 line-through text-12">1982</div>
                  </div>
                </div>
                <button class="w-full py-3 border rounded-lg border-secondary text-secondary">加入購物車</button>
              </li> -->

            </ul>
          </div>

          <div id="news" class="lg:col-span-2">
            <h2 class="pb-1 border-b border-secondary  mb-5 md:mb-6 md:w-1/2 relative 
            after:absolute 
            after:w-full 
            after:top-full 
            after:right-full 
            after:h-[1px] 
            after:bg-secondary">
              <span class="mr-3 text-28">新聞</span>
              <span class="font-medium text-24">News</span>
            </h2>
            <ul>
              <li class="mb-10">
                <div class="items-center md:flex">
                  <div class="h-[152px] md:h-[200px] md:w-1/2 md:mr-14 bg-red-400">圖</div>
                  <!-- <img src="" class="h-[152px] md:h-[200px]" alt=""> -->
                  <div class="md:w-1/2 ">
                    <h3 class="mt-8 mb-2 text-20 md:mt-0">A CRAZY JOURNEY - 10 MILLION UNITS SOLD!</h3>
                    <p class="ellipsis-3 ">It’s so amazing to see all the support for It Takes Two. Thank you to all the fans and community for going on this magical journey together with us!-Hazelight Studios
                      <!-- <span>more</span> -->
                    </p>
                  </div>
                </div>

              </li>
              <li class="mb-10">
                <div class="items-center md:flex">
                  <div class="h-[152px] md:h-[200px] md:w-1/2 md:mr-14 bg-red-400">圖</div>
                  <!-- <img src="" class="h-[152px] md:h-[200px]" alt=""> -->
                  <div class="md:w-1/2 ">
                    <h3 class="mt-8 mb-2 text-20 md:mt-0">A CRAZY JOURNEY - 10 MILLION UNITS SOLD!</h3>
                    <p class="ellipsis-3">It’s so amazing to see all the support for It Takes Two. Thank you to all the fans and community for going on this magical journey together with us!-Hazelight Studios</p>
                  </div>
                </div>

              </li>
            </ul>
            <button class="block py-3 mx-auto border rounded-lg w-52 border-light text-light">顯示更多</button>
          </div>


      </div>
    </div>
  </section>
</template>
<style scoped>
.bg-score-high {
background: linear-gradient(42deg, #145096 24.81%, #FF0006 100%);
}
.bg-score-mid {
background: linear-gradient(42deg, #145096 24.81%, #10D89F 100%);
}
.bg-score-low {
  background: linear-gradient(42deg, #14966F 24.81%, #FFB800 100%);
}
</style>