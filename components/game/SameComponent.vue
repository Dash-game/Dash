<template>
  <!-- Same Game -->
  <section>
    <div class="container py-16 space-y-12">
      <!-- 相似的遊戲 -->
      <div>
        <!-- 400 -->
        <p class="text-20 text-white pb-6">與雙人成行<span class="pl-2 text-28">相似的遊戲</span></p>
        <div class="flex justify-between items-center gap-14">
          <figure v-for="(item, index) in sameData" :key="index">
            <img :src="item.image" :alt="item.title">
            <div class="flex justify-between items-center">
              <figcaption>{{ item.title }}</figcaption>
              <span>{{ item.point }}</span>
            </div>
          </figure>
        </div>
      </div>
      <!-- 你可能會喜歡的遊戲 -->
      <div>
        <p class="text-20 text-white pb-6">你可能會喜歡的遊戲</p>
        <div class="flex justify-between items-center gap-14">
          <figure v-for="(item, index) in likeData" :key="index">
            <img :src="item.image" :alt="item.title">
            <figcaption>{{ item.title }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default{
  data() {
    return {
      sameData: [
        {
          image: '/images/gameSame/sameGameImage001.jpg',
          title: 'Human: Fall Flat',
          point: 9.2,
        },
        {
          image: '/images/gameSame/sameGameImage002.jpeg',
          title: 'Super Bunny Man',
          point: 9.2,
        },
        {
          image: '/images/gameSame/sameGameImage003.jpeg',
          title: 'Super Bunny Man',
          point: 9.2,
        },
      ],
      likeData: [
        {
          image: '/images/gameSame/likeGameImage001.jpeg',
          title: 'Double Dragon Gaiden: Rise Of The Dragons'
        },
        {
          image: '/images/gameSame/likeGameImage002.jpeg',
          title: 'ONE PIECE: PIRATE WARRIORS 4'
        },
        {
          image: '/images/gameSame/likeGameImage003.jpeg',
          title: 'Pummel Party'
        },
        {
          image: '/images/gameSame/likeGameImage004.jpeg',
          title: 'Overcooked! 2'
        },
      ]
    }
  }
}
</script>
<style>
</style>
