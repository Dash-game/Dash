<template>
  <!-- Same Game -->
  <section class="text-white bg-[url('/images/gameSame/wallpaper.png')] bg-center bg-no-repeat bg-blend-multiply bg-Cover">
    <div class="container py-16 space-y-12">
      <!-- 相似的遊戲 -->
      <div>
        <p class="text-28 text pb-6"><small class="text-20 text-light pr-2">與雙人成行</small>相似的遊戲</p>
        <ul class="grid lg:grid-cols-3 gap-14">
          <li v-for="(item, index) in sameData" :key="index" class="hover:text-secondary hover:opacity-80 hover:-translate-y-1 duration-300">
            <!-- 之後要改 <Nuxtlink> -->
            <a href="#">
              <figure>
                <img :src="item.image" :alt="item.title" class="mb-3 w-full">
                <div class="flex justify-between items-center">
                  <figcaption class="text-18 font-medium">{{ item.title }}</figcaption>
                  <span class="block text-24 bg-tab px-2 py-1 rounded-2xl">{{ item.point }}</span>
                </div>
              </figure>
            </a>
          </li>
        </ul>
      </div>
      <!-- 你可能會喜歡的遊戲 -->
      <div>
        <p class="text-28 pb-6">你可能會喜歡的遊戲</p>
        <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
          <li v-for="(item, index) in likeData" :key="index" class="hover:text-secondary hover:opacity-80 hover:-translate-y-1 duration-300">
            <!-- 之後要改 <Nuxtlink> -->
            <a href="#">
              <figure>
                <img :src="item.image" :alt="item.title" class="mb-2">
                <figcaption class="text-18 font-medium">{{ item.title }}</figcaption>
              </figure>
            </a>
          </li>
        </ul>
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
