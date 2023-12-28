<template>
  <div class="container">
    <!-- <div
      class="flex flex-wrap justify-between gap-x-3 pt-0 lg:pt-12 py-[24px] lg:py-[72px] gap-y-2"
    >
      <div class="w-full lg:w-1/2">
        <input
          type="text"
          class="bg-white text-primary text-sm rounded-lg block w-full p-2.5"
          placeholder="Search"
        />
      </div>
      <div class="w-full lg:w-1/2">
        <select
          id="small"
          class="block w-full py-2.5 pl-12 mb-6 text-sm text-primary rounded-lg bg-white"
        >
          <option value="1">依購買日期排序</option>
          <option value="2">依評論日期排序</option>
        </select>
      </div>
    </div> -->

    <div
      class="flex flex-row justify-between items-center flex-wrap space-y-10 lg:space-y-0 mb-[110px]"
    >
      <!-- search -->
      <memberSearch v-model="searchValue" @update:searchValue="updateSearchValue"></memberSearch>
      <memberDropDown :dropData="dropData" @dropdown-sort="dropdownSort"></memberDropDown>
    </div>
    <article
      class="bg-section px-6 lg:px-12 py-5 lg:py-10 rounded-[30px] flex flex-col lg:flex-row gap-x-14 mb-4 lg:mb-16"
      v-for="data in NewCommentList"
      :key="data.id"
    >
      <div class="flex flex-col items-center">
        <div
          class="w-[220px] h-[128px] lg:w-[420px] lg:h-[256px] text-center mb-4"
        >
          <img class="object-cover w-full h-full mb-4" :src="data.imgUrl" />
        </div>
        <div
          class="mb-4 lg:mb-0"
          :class="{
            'text-labeldark': data.is_recommend === -1,
            'text-labellight': data.is_recommend === 1
          }"
        >
          <span v-if="data.is_recommend === -1">
            <Icon
              class="mr-1"
              name="icon-park-outline:bad-one"
            />您不推薦這款遊戲</span
          >
          <span v-else>
            <Icon
              class="mr-1"
              name="icon-park-outline:good-one"
            />您推薦這款遊戲</span
          >
        </div>
      </div>
      <div class="flex-grow">
        <button
          class="hidden lg:inline-block float-right border border-secondary rounded-lg px-10 py-2 text-18 mb-2 lg:mb-0"
          type="button"
          @click="showModal(data)"
        >
          修改評論
        </button>
        <h6 class="text-white font-bold text-24 clear-both mb-2 lg:mb-0">
          {{ data.title }}
        </h6>
        <div class="flex justify-between">
          <small>已遊玩了{{ data.playing_hours }}小時</small>
          <div class="text-right lg:text-left">
            <small class="text-[#656369] block"
              >{{ data.recommend_count }}人覺得有幫助</small
            >
            <small class="text-[#656369] block"
              >{{ data.interested_count }}人覺得有趣</small
            >
          </div>
        </div>
        <div
          class="text-[#656369] text-14 text-right lg:text-left"
          v-timeformat="{
            timestamp: data.created_at,
            format: 'YYYY-MM-DD HH:mm 評論'
          }"
        ></div>
        <button
          class="lg:hidden float-right border border-secondary rounded-lg px-10 py-2 my-2 text-18 mb-2 lg:mb-0"
          type="button"
          @click="showModal(data)"
        >
          修改評論
        </button>
        <div class="mt-6 py-6 clear-both" v-html="data.content"></div>
      </div>
    </article>
  </div>

  <commonModal
    ref="commentModal"
    class="CommentModal"
    :cancleBtn="false"
    :data="commentModalData"
    :submitHandler="sendComment"
  >
    <template #modalHeader>
      <div class="flex justify-between items-center mb-3 w-full pr-[17px]">
        <div
          class="flex justify-between items-center mb-3 w-full pr-[17px] text-28"
        >
          <h6 class="text-white">遊戲評論</h6>
          <div class="text-darkgray">{{ commentModalData.title }}</div>
        </div>
      </div>
    </template>
    <template #modalBody>
      <commentMemberCommentItem
        ref="modalbody"
        :data="commentModalData"
      ></commentMemberCommentItem>
    </template>
  </commonModal>
</template>

<script setup>
const dropData = ref([{ item: '依購買日期排序' }, { item: '依評論日期排序' }])

const CommentList = computed(() => {
  return [
    {
      id: 1,
      imgUrl: 'https://fakeimg.pl/300x200/200',
      title: 'ABC the Drive',
      playing_hours: 16,
      created_at: 1703507627000,
      recommend_count: 30,
      interested_count: 0,
      is_recommend: -1,
      content:
        '沒有一款 PlayStation 的遊戲上PC評價差的 因為個個都是佳作啊 ! ! ! ! ( 除了某款10/10 那個不上PC沒關係 )索尼 做的好繼續把作品上PC 就對了 你們賺爽爽 我們玩爽爽這樣大家都能 好蒿爽爽wwww'
    },
    {
      id: 2,
      imgUrl: 'https://fakeimg.pl/300x200/200',
      title: 'Dave the Drive',
      playing_hours: 16,
      created_at: 1703508654000,
      recommend_count: 30,
      interested_count: 0,
      is_recommend: -1,
      content:
        '沒有一款 PlayStation 的遊戲上PC評價差的 因為個個都是佳作啊 ! ! ! ! ( 除了某款10/10 那個不上PC沒關係 )索尼 做的好繼續把作品上PC 就對了 你們賺爽爽 我們玩爽爽這樣大家都能 好蒿爽爽wwww'
    },
    {
      id: 3,
      imgUrl: 'https://fakeimg.pl/300x200/200',
      title: 'Dave the Drive',
      playing_hours: 16,
      created_at: 1703509676000,
      recommend_count: 30,
      interested_count: 0,
      is_recommend: 1,
      content:
        '沒有一款 PlayStation 的遊戲上PC評價差的 因為個個都是佳作啊 ! ! ! ! ( 除了某款10/10 那個不上PC沒關係 )索尼 做的好繼續把作品上PC 就對了 你們賺爽爽 我們玩爽爽這樣大家都能 好蒿爽爽wwww'
    }
  ]
})

const commentModal = ref(null)
const commentModalData = ref({})
const showModal = (data) => {
  commentModalData.value = { ...data }
  commentModal.value.show()
}
const modalbody = ref(null)
const sendComment = () => {
  const commentValue = modalbody.value.getValue()
  console.log(commentValue)
}
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
const NewCommentList = computed(() => {
  let result = [...CommentList.value];
  // feature sort
  if(selectedSort.value) {
    switch (selectedSort.value.code) {
      case 'date':
        result = result.sort((x, y) => y.created_at - x.created_at);
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
