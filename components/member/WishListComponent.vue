<template>
  <section class="py-12">
    <div class="flex flex-row justify-between items-center flex-wrap space-y-10 lg:space-y-0 mb-[110px]">
      <!-- search -->
      <form class="basis-full lg:basis-1/2">
        <label for="default-search" class="mb-2 text-primary text-24 sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-10 pointer-events-none">
              <Icon name="material-symbols:search" class="text-primary" size="32"></Icon>
            </div>
            <input type="search" id="default-search" class="block w-full p-3 ps-20 text-24 text-primary border border-gray-300 rounded bg-white focus:ring-secondary focus:border-secondary" placeholder="search..." required>
        </div>
      </form>
      <!-- Dropdown -->
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-primary bg-white hover:bg-secondary/80 focus:ring-2 focus:outline-none focus:ring-secondary rounded text-24 px-7 py-3 text-center inline-flex items-center justify-center basis-full lg:basis-1/4 w-full" type="button">
        <span class="inline-block">篩選條件</span>
        <Icon name="material-symbols:arrow-drop-down-rounded" class="ms-3" size="32"></Icon>
      </button>
      <!-- Dropdown menu -->
      <!-- hidden -->
      <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow basis-full lg:basis-1/4">
          <ul class="py-2 text-24 text-primary" aria-labelledby="dropdownDefaultButton">
            <li v-for="(item, index) in dropData" :key="index">
              <a href="#" class="block px-7 py-3 hover:bg-secondary">{{ item.item }}</a>
            </li>
          </ul>
      </div>
    </div>
    <!-- item -->
    <ul class="grid xl:grid-cols-2 gap-14">
      <li class="bg-section rounded-lg shadow hover:text-secondary hover:-translate-y-1 duration-300 group min-w-[740px] h-[230px] relative" v-for="(item, index) in wishListData" :key="index">
        <a href="#" class="flex flex-row justify-between items-stretch h-full">
          <!-- 遊戲圖片預覽 -->
          <figure class="filter grayscale group-hover:grayscale-0 flex-none">
            <img class="object-cover rounded-t-lg w-[205px] h-[230px]" :src="item.image" :alt="item.title">
          </figure>
          <div class="flex-1 w-0 h-full p-6 text-light flex justify-between items-end">
            <!-- 遊戲資訊 -->
            <div class="text-light">
              <p class="mb-6 text-24 font-semibold text-white truncate">{{ item.title }}</p>
              <ul class="mb-5 text-18">
                <li>發行商：{{ item.supplier }}</li>
                <li>發行日期：{{ item.issuingDate }}</li>
                <li class="text-16">
                  <p v-if="item.isLike === 'like'" class="text-labellight inline-flex items-center">整體評論：好評<Icon name="bxs:like" size="20" class="ml-2"></Icon></p>
                  <p v-else-if="item.isLike === 'dislike'" class="text-labeldark inline-flex items-center">整體評論：不好評<Icon name="bxs:dislike" size="20" class="ml-2"></Icon></p>
                  <p v-else>整體評論：尚未有人評論</p>
                </li>
              </ul>
              <p class="text-16">{{ item.addDate }} 加入</p>
            </div>
            <!-- 遊戲價格 -->
            <div>
              <!-- price -->
              <div class="flex gap-4 justify-between items-center">
                <span class="block text-labeldark text-48 font-semibold">${{ item.price.toLocaleString("en")}}</span>
                <div class=" text-center">
                  <span class="block text-labellight text-20 font-bold">{{ item.discount }}%</span>
                  <span class="block text-light text-12 font-semibold line-through">{{ item.basePrice.toLocaleString("en") }}</span>
                </div>
              </div>
              <!-- button -->
              <div class="button-outline-sm button-outline-hover  text-center w-full">
                加入購物車
              </div>
            </div>
            <!-- 刪除按鈕 -->
            <div class="absolute top-6 right-6 text-secondary text-24 leading-none hover:font-bold">X</div>
          </div>
        </a>
      </li>
  </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dropData: [
        { item: '依收藏日期排序' },
        { item: '篩選二' },
        { item: '篩選三' },
      ],
      wishListData: [
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          supplier: 'Frictional Games',
          issuingDate: '2020-09-10',
          addDate: '2023-07-28 18:26',
          isLike: 'like', // like|dislike|null or true|false|null
          discount: -42,
          price: 1982,
          basePrice: 1982
        },
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          supplier: 'Frictional Games',
          issuingDate: '2020-09-10',
          addDate: '2023-07-28 18:26',
          isLike: 'dislike', // like|dislike|null or true|false|null
          discount: -42,
          price: 1982,
          basePrice: 1982
        },
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          supplier: 'Frictional Games',
          issuingDate: '2020-09-10',
          addDate: '2023-07-28 18:26',
          isLike: null, // like|dislike|null or true|false|null
          discount: -42,
          price: 1982,
          basePrice: 1982
        },
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          supplier: 'Frictional Games',
          issuingDate: '2020-09-10',
          addDate: '2023-07-28 18:26',
          isLike: 'like', // like|dislike|null or true|false|null
          discount: -42,
          price: 1982,
          basePrice: 1982
        },
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          supplier: 'Frictional Games',
          issuingDate: '2020-09-10',
          addDate: '2023-07-28 18:26',
          isLike: 'like', // like|dislike|null or true|false|null
          discount: -42,
          price: 1982,
          basePrice: 1982
        },

      ],
    }
  },
  methods: {
    switchLike(isLike, index) {
      this.listData[index].isLike = isLike;
    },
  }
}
</script>
