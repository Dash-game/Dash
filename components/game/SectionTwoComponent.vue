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
  "about_the_game": "狩獵本能躍動！<br>為狩獵掀起新風潮、無拘無束地躍動的動作；可隨心所欲地奔馳的新原野；帶來未知的興奮和驚喜的全新魔物。<br>在《MONSTER HUNTER RISE》中，前所未見的狩獵體驗正等候著獵人們！<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1446780/extras/01_マルチ_full.gif?t=1687140511\" /><br><br><strong>・掀起全新風潮的「翔蟲」動作</strong><br>翔蟲能飛往獵人指示的方向，並以特殊的「鐵蟲絲」把獵人拉到目的地。翔蟲為狩獵帶來進化，只要配合各武器種類的特色攻擊，便能誕生出新的狩獵動作！<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1446780/extras/02_翔蟲.gif?t=1687140511\" /><br><br><strong>・操縱魔物的豪邁動作「操龍」</strong><br>操縱兇猛暴虐的魔物，使出豪邁的動作！<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1446780/extras/03_操竜.gif?t=1687140511\" /><br><br><strong>・支援狩獵的隨從們</strong><br>除了老拍檔「隨從艾路」之外，還有可靠的「隨從加爾克」全新登場！<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1446780/extras/04_ガルク走り.gif?t=1687140511\" /><br><br><strong>・神火村的故事</strong><br>神火村因即將面臨時隔50年的災禍──「百龍夜行」而陷入窘境。<br>主角需一邊以成為頂尖獵人為目標而鍛鍊自身，一邊與村莊的同伴合力克服這場災禍。<br><strong><br>・魔物大舉侵襲的「百龍夜行」</strong><br>所謂「百龍夜行」，是指眾多魔物及由其帶領的「魔物群」進行的襲擊。<br>原野上滿佈著大型魔物……<br><br><strong>・擁有獨特生態的魔物</strong><br>以本作的象徵魔物──怨虎龍為首，擁有獨特生態的未知魔物及系列魔物將陸續登場！",
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
      "content":"Hey hunters, How’s the hunting? We hope Kamura and Elgado are treating you well! Following on from our Capcom Online Program at Tokyo Game Show this week, we’re humbled and excited to share with you that March 2024 will mark 20 years since the release of the very first Monster Hunter game in Japan. To you, our global community of hunters, thank you! As we begin to mark the occasion, the team have created a special Monster Hunter 20th anniversary logo featuring one of the key things that defines our identities as hunters, our weapons! To coincide with the logo reveal, we’ve also got our first piece in the 20th anniversary art series to share with you, putting a spotlight on hunters!"
      },
    {
      "news_id":3665415870869574919,
      "url":"https://store.steampowered.com/news/app/1446780/view/3665415870869574919",
      "title":"1 Year of Monster Hunter Rise: Sunbreak!",
       "image":"https://clan.cloudflare.steamstatic.com/images//41286238/285eb6af0f55c9f99a19e60b7595fdb72e029c3a.jpg",
      "timestamp":1688135100,
      "author":"Monster Hunter Community Team",
      "content":"Hey Hunters, We're pleased to share with you all that today marks 1 full year since the launch of Monster Hunter Rise: Sunbreak! Since then, Sunbreak has received 5 full free Title Updates, plus the recent free Bonus Update, which wrapped up Elgado's story and introduced the mighty Primordial Malzeno! So, here's to you, our glorious Hunters! Whether you've been with us since launch, or joined us more recently, it's awesome to have you with us! Thank you! What are your Sunbreak highlights? Let us know in the comments! We'll see you in the hunt! - Monster Hunter Community Team"
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
            after:h-[1px] 
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
                      after:h-[1px] 
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
            after:h-[1px] 
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