<template>
  <section class="py-12">
    <div
      class="flex flex-row justify-between items-center flex-wrap space-y-10 lg:space-y-0 mb-[110px]"
    >
      <!-- search -->
      <memberSearch v-model="searchValue" @update:searchValue="updateSearchValue"></memberSearch>
      <memberDropDown :dropData="dropData" @dropdown-sort="dropdownSort"></memberDropDown>
    </div>
    <!-- item -->
    <ul class="grid gap-14">
      <li
        class="bg-section rounded-lg shadow hover:text-secondary hover:-translate-y-1 duration-300 group min-w-[740px] h-[230px] relative"
        v-for="(item, index) in newWishListData"
        :key="index"
      >
        <a href="#" class="flex flex-row justify-between items-stretch h-full">
          <!-- 遊戲圖片預覽 -->
          <figure class="filter grayscale group-hover:grayscale-0 flex-none">
            <img
              class="object-cover rounded-t-lg w-[205px] h-[230px]"
              :src="item.image"
              :alt="item.title"
            />
          </figure>
          <div
            class="flex-1 w-0 h-full p-6 text-light flex justify-between items-end"
          >
            <!-- 遊戲資訊 -->
            <div class="text-light">
              <p class="mb-6 text-24 font-semibold text-white truncate">
                {{ item.title }}
              </p>
              <ul class="mb-5 text-18">
                <li>發行商：{{ item.supplier }}</li>
                <li>
                  發行日期：
                  <span v-dateformat="item.release_date * 1000"></span>
                </li>
                <li class="text-16">
                  <p v-if="item.like == 0 && item.dislike == 0">
                    整體評論：尚未有人評論
                  </p>
                  <p
                    v-else-if="
                      item.like > item.dislike &&
                      (item.like - item.dislike) / item.dislike > 0.1
                    "
                    class="text-labellight inline-flex items-center"
                  >
                    整體評論：推薦<Icon
                      name="bxs:like"
                      size="20"
                      class="ml-2"
                    ></Icon>
                  </p>
                  <p
                    v-else-if="
                      item.like < item.dislike &&
                      (item.dislike - item.like) / item.like > 0.1
                    "
                    class="text-labeldark inline-flex items-center"
                  >
                    整體評論：不推薦<Icon
                      name="bxs:dislike"
                      size="20"
                      class="ml-2"
                    ></Icon>
                  </p>
                  <p v-else class="text-white">整體評論：褒貶不一</p>
                </li>
              </ul>
              <p class="text-16">
                <span v-timeformat="item.add_date * 1000"></span> 加入
              </p>
            </div>
            <!-- 遊戲價格 -->
            <div>
              <!-- price -->
              <div class="flex gap-4 justify-between items-center">
                <span class="block text-labeldark text-48 font-semibold"
                  >${{ item.sale_price.toLocaleString('en') }}</span
                >
                <div class="text-center" v-if="item.price !== item.sale_price">
                  <span class="block text-labellight text-20 font-bold"
                    >{{
                      (
                        ((item.sale_price - item.price) / item.price) *
                        100
                      ).toFixed(0)
                    }}%</span
                  >
                  <span
                    class="block text-light text-12 font-semibold line-through"
                    >{{ item.price.toLocaleString('en') }}</span
                  >
                </div>
              </div>
              <!-- button -->
              <div
                class="button-outline-sm button-outline-hover text-center w-full"
              >
                加入購物車
              </div>
            </div>
            <!-- 刪除按鈕 -->
            <div
              class="absolute top-6 right-6 text-secondary text-24 leading-none hover:font-bold"
            >
              X
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>
<script setup>
  const dropData = ref([
    { item: '依收藏日期排序', code: 'date' },
    { item: '篩選二', code: '' },
    { item: '篩選三', code: '' }
  ]);
  const wishListData = ref([
    {
      image: '/images/member/memberGameImage001.png',
      title: 'abc the Diver',
      supplier: 'Frictional Games',
      release_date: 1702736324,
      add_date: 1702780324,
      like: 300,
      dislike: 20,
      price: 1982,
      sale_price: 1882
    },
    {
      image: '/images/member/memberGameImage001.png',
      title: 'Dave the Diver',
      supplier: 'Frictional Games',
      release_date: 1702736324,
      add_date: 1702780324,
      like: 60,
      dislike: 170,
      price: 1982,
      sale_price: 1982
    },
    {
      image: '/images/member/memberGameImage001.png',
      title: 'Dave the Diver',
      supplier: 'Frictional Games',
      release_date: 1702736324,
      add_date: 1702780324,
      like: 10,
      dislike: 9,
      price: 1982,
      sale_price: 1200
    },
    {
      image: '/images/member/memberGameImage001.png',
      title: 'Dave the Diver',
      supplier: 'Frictional Games',
      release_date: 1702736324,
      add_date: 1702780324,
      like: 1000,
      dislike: 999,
      price: 1982,
      sale_price: 1982
    },
    {
      image: '/images/member/memberGameImage001.png',
      title: 'Dave the Diver',
      supplier: 'Frictional Games',
      release_date: 1702736324,
      add_date: 1702780324,
      like: 0,
      dislike: 0,
      price: 1982,
      sale_price: 1982
    }
  ]);
  /**
   * selected dropdown value
   * @param { string } selected
   */
  const selectedSort = ref(null);
  const dropdownSort = (selected) => {
    selectedSort.value = selected;
    newListData.value;
  }
  /**
   * feature search
   */
  const searchValue = ref('');
  const updateSearchValue = value => searchValue.value = value;
  /**
   * Vue computed
   */
  const newWishListData = computed(() => {
    let result = [...wishListData.value];
    // feature sort
    if(selectedSort.value) {
      switch (selectedSort.value.code) {
        case 'date':
          result = result.sort((x, y) => y.add_date - x.add_date);
          break;
        default:
          break;
      }
    }
    // feature search
    result = result.filter(item => item.title.toLowerCase().match(searchValue.value.toLowerCase()));

    console.log('result:', result);
    return result;
  })
</script>
