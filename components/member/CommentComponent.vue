<template>
  <div class="container">
    <div class="flex justify-between pt-12 py-[72px]">
      <div class="lg:w-1/2">
        <input
          type="text"
          class="bg-white text-primary text-sm rounded-lg block w-full p-2.5"
          placeholder="Search"
        />
      </div>
      <div>
        <select
          id="small"
          class="block w-full py-2.5 pl-12 mb-6 text-sm text-primary rounded-lg bg-white"
        >
          <option value="1">依購買日期排序</option>
          <option value="2">依評論日期排序</option>
        </select>
      </div>
    </div>
    <article
      class="bg-section px-12 py-10 rounded-[30px] flex gap-x-14 mb-16"
      v-for="data in CommentList"
      :key="data.id"
    >
      <div class="flex flex-col items-center">
        <div class="w-[420px] h-[256px] text-center mb-4">
          <img class="object-cover w-full h-full mb-4" :src="data.imgUrl" />
        </div>
        <div
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
          class="float-right border border-secondary rounded-lg px-10 py-2 text-18"
          type="button"
          @click="showModal(data)"
        >
          修改評論
        </button>
        <h6 class="text-white font-bold text-24 clear-both">
          {{ data.title }}
        </h6>
        <div class="flex justify-between">
          <small>已遊玩了{{ data.playing_hours }}小時</small>
          <div class="">
            <small class="text-[#656369] block"
              >{{ data.recommend_count }}人覺得有幫助</small
            >
            <small class="text-[#656369] block"
              >{{ data.interested_count }}人覺得有趣</small
            >
          </div>
        </div>
        <div class="text-[#656369] text-14">{{ data.created_at }} 評論</div>
        <div class="mt-6 py-6" v-html="data.content"></div>
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
const CommentList = computed(() => {
  return [
    {
      id: 1,
      imgUrl: 'https://fakeimg.pl/300x200/200',
      title: 'Dave the Drive',
      playing_hours: 16,
      created_at: '2023-07-31 21:34',
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
      created_at: '2023-07-31 21:34',
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
      created_at: '2023-07-31 21:34',
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
</script>
