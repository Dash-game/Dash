<script setup>
// import db from "@/db1.json"

// const data = ref(db)
const data = {
  "categories": [
      { "id": 2, "description": "單人" },
      { "id": 1, "description": "多人" },
      { "id": 9, "description": "合作" },
      { "id": 38, "description": "線上合作" },
      { "id": 22, "description": "Steam 成就" },
      { "id": 28, "description": "完全支援控制器" },
      { "id": 29, "description": "Steam 交換卡片" },
      { "id": 23, "description": "Steam 雲端" }
  ],
  "genres": [{ "id": "1", "description": "動作" }],
  "coming_soon": false,
  "release_date":"2022 年 1 月 13 日",
  "score": 8.9,
  "developers": ["CAPCOM Co., Ltd."],
  "publishers": ["CAPCOM Co., Ltd."],
  "about_the_game": "",
  "packages":[
    {
      "packageid": 692569,
      "title": "MONSTER HUNTER RISE + SUNBREAK 組合包",
      "price":1850,
      "sale_price":925,
      "discont_percentage":10,
      "description":""
    },
    {
      "packageid": 692570,
      "title": "MONSTER HUNTER RISE + SUNBREAK 雙重豪華組合包",
      "price":2150,
      "sale_price":1225,
      "discont_percentage":43,
      "description":""
    },
  ],
  "news":[
    {
      "news_id":3720592576617111430,
      "url":"https://store.steampowered.com/news/app/1446780/view/3720592576617111430",
      "title":"20 Years of Monster Hunter!",
       "image":"https://clan.cloudflare.steamstatic.com/images//41286238/a4f7352c89d8d088f31f3a66aa6f93f9d19bcad2.jpg",
      "timestamp":1695307980,
      "author":"The Monster Hunter Community Team",
      "content":""
      },
    {
      "news_id":3665415870869574919,
      "url":"https://store.steampowered.com/news/app/1446780/view/3665415870869574919",
      "title":"1 Year of Monster Hunter Rise: Sunbreak!",
       "image":"https://clan.cloudflare.steamstatic.com/images//41286238/285eb6af0f55c9f99a19e60b7595fdb72e029c3a.jpg",
      "timestamp":1688135100,
      "author":"Monster Hunter Community Team",
      "content":""
      },
   ]
}

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
                  <li v-for="tagItem in data.categories" class="px-3 py-1 mb-2 mr-2 rounded bg-tab" :key="tagItem">{{ tagItem.description }}</li>
                  <li v-for="tagItem in data.genres" class="px-3 py-1 mb-2 mr-2 rounded bg-tab" :key="tagItem">{{ tagItem.description }}</li>
                </ul>
              </div>
              <div class="flex items-center justify-center order-3 w-16 h-16 bg-score-high lg:order-2 rounded-xl text-28 lg:text-40 lg:rounded-3xl lg:w-20 lg:h-20" :class="{'bg-score-high':data.score>=8, 'bg-score-mid':data.score<8 && data.score>=4, 'bg-score-low':data.score<4}">
                {{data.score}}
              </div>
              <ul class="order-2 lg:order-3 ">
                <li>發行日期：{{ data.release_date }} </li>
                <li>開發人員：{{data.developers.join("、")}}</li>
                <li>發行商：{{data.publishers.join("、")}}</li>
              </ul>
              <button class="order-4 w-full lg:w-auto px-20 button-outline-md button-outline-hover">評論此遊戲</button>
            </div>
            <p v-html="data.about_the_game"></p>
          </div>
          
          <div id="combo" class="lg:row-span-2 " v-if="data.packages">
            <h2 class="pb-1 mb-5 border-b border-secondary lg:border-transparent relative 
            after:absolute 
            after:w-full 
            after:top-full 
            after:right-full 
            after:h-px
            after:bg-secondary
            lg:after:bg-transparent">
              <span class="mr-3 text-28">超值組合包</span>
              <span class="font-medium text-24">Special</span>
            </h2>
            <ul>
              <li v-for="packageItem in data.packages" class="px-4 py-6 py mb-7 border border-labellight  rounded-[20px]" :key="packageItem.packageid">
                <h3 class="mb-2 text-24">購買 {{ packageItem.title }}</h3>
                <p class="mb-4 text-18">{{packageItem.description}}</p>
                <div class="xl:flex items-center">
                  <div class="flex items-center mr-4 mb-3 xl:mb-0">
                    <div class="[text-shadow:_16px_12px_0_rgb(255_255_255_/_5%),_0_5px_5px_#0004] text-32 font-semibold text-labeldark">$ {{ packageItem.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
                    <div class="ml-6">
                      <div v-if="true" class="mb-0 font-semibold leading-5 text-20 text-labellight">-{{packageItem.discont_percentage}}%</div>
                      <span v-if="true" class="relative leading-3 text-12 px-1 
                      after:w-full 
                      after:absolute 
                      after:h-px
                      after:bg-light 
                      after:left-0 
                      after:top-1/2">${{ packageItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
                    </div>
                  </div>
                  <button class="w-full xl:w-auto py-3 rounded-lg button-outline-hover grow">加入購物車</button>
                </div>
              </li>
              
            </ul>
          </div>

          <div id="news" class="lg:col-span-2">
            <h2 class="pb-1 border-b border-secondary  mb-5 md:mb-6 md:w-1/2 relative 
            after:absolute 
            after:w-full 
            after:top-full 
            after:right-full 
            after:h-px
            after:bg-secondary">
              <span class="mr-3 text-28">新聞</span>
              <span class="font-medium text-24">News</span>
            </h2>
            <ul>
              <li class="mb-10" v-for="news in data.news" :key="news.news_id">
                <a :href="news.url" target="_blank" class="items-center md:flex">
                  <div  class="w-full md:w-1/2  md:mr-14">
                    <img class=" object-cover w-full h-[152px] md:h-[200px]" :src="news.image" alt="">
                  </div>
                  <div class="md:w-1/2 ">
                    <h3 class="mt-8 mb-2 text-20 md:mt-0">{{ news.title }}</h3>
                    <p class="ellipsis-3 ">{{ news.content }}</p>
                  </div>
                </a>
              </li>

            </ul>
            <button class="block py-3 mx-auto rounded-lg w-52 text-secondary button-outline-hover">顯示更多</button>
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