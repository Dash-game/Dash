<template>

<SectiononeComponent></SectiononeComponent>

<!-- section 2 -->
<section class="px-3 bg-section text-light">
  <div class="container mx-auto">

    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <div id="description">
          <div class="border border-labellight px-11 py-8">
            <h2>
              <span>遊戲簡介</span>
              <span>description</span>
            </h2>
            <ul id="tags" class="flex">
              <li>tag1</li>
              <li>tag1</li>
              <li>tag1</li>
              <li>tag1</li>
              <li>tag1</li>
            </ul>


          </div>
          <ul>
            <li>發行日期：2021/03/26 </li>
            <li>開發人員：Hazelight</li>
            <li>發行商：Electronic Arts</li>
          </ul>

          <div class="bg-tab w-16 h-16 flex justify-center items-center">9.2</div>

          <p>
            在《雙人成行》這款專為雙人合作遊玩打造，跨越類型界線的橫向捲軸冒險遊戲中，踏上人生中最瘋狂的旅程。利用好友通行證*邀請好友免費遊玩。遊玩一對經常起爭執的夫妻科迪與小梅，兩人因為魔法而變成了玩偶。這兩個人被困在一個充滿驚喜的奇幻世界中，並且不得不挽救他們之間的感情。在每個新關卡中掌握獨特且有關連的角色技能。幫助彼此跨越各種令人意外的障礙與爆笑的時刻。踹向流氓松鼠毛茸茸的尾巴、駕駛一條內褲、在擁擠的夜店中成為 DJ，並在魔法雪景球中搭乘雪橇。體驗一段溫馨且爆笑  ...  


            <a href="#">閱讀更多</a>
          </p>
        </div>
        <div id="special" class="md:hidden">
          <h2>
            <span>超值組合包</span>
            <span>Special</span>
          </h2>
          <ul>
            <li class="border border-labellight px-4 pt-6 pb-5">
              <h3 class="text-24">購買豪華禮包</h3>
              <p class="text-18">包含PUNG:BATTLEGROUNDS 遊戲本體 + DLC</p>
              <div class="flex align-middle">
                <div class="[text-shadow:_16px_12px_0_rgb(255_255_255_/_5%)] text-32 font-bold">$1982</div>
                <div class="ml-6">
                  <div class="text-20">-42%</div>
                  <div class="line-through text-12">1982</div>
                </div>
              </div>
              <button class="border border-secondary text-secondary">加入購物車</button>
            </li>
            
            
          </ul>
        </div>

        <div id="news">
          <h2>
            <span>新聞</span>
            <span>News</span>
          </h2>
          <ul>
            <li>
              <div class="flex">
                <div>圖</div>
                <div>
                  <h3>A CRAZY JOURNEY - 10 MILLION UNITS SOLD!</h3>
                  <p>It’s so amazing to see all the support for It Takes Two. Thank you to all the fans and community for going on this magical journey together with us!-Hazelight Studios</p>
                </div>
              </div>

            </li>
          </ul>
          <button class="border border-light text-light">顯示更多</button>
        </div>
      </div>
      <div>
      <!-- slot for special -->
      <div id="special" class="hidden md:block">
          <h2>
            <span>超值組合包</span>
            <span>Special</span>
          </h2>
          <ul>
            <li class="border border-labellight px-4 pt-6 pb-5">
              <h3 class="text-24">購買豪華禮包</h3>
              <p class="text-18">包含PUNG:BATTLEGROUNDS 遊戲本體 + DLC</p>
              <div class="flex align-middle">
                <div class="[text-shadow:_16px_12px_0_rgb(255_255_255_/_5%)] text-32 font-bold">$1982</div>
                <div class="ml-6">
                  <div class="text-20">-42%</div>
                  <div class="line-through text-12">1982</div>
                </div>
              </div>
              <button class="border border-secondary text-secondary">加入購物車</button>
            </li>
            
            
          </ul>
        </div>
      </div>

    </div>


  

  </div>
  
</section>

</template>