<template>
  <section class="py-12">
    <div
      class="flex flex-row justify-between items-center flex-wrap space-y-10 lg:space-y-0 mb-[110px]"
    >
      <!-- search -->
      <form class="basis-full lg:basis-1/2">
        <label for="default-search" class="mb-2 text-primary text-24 sr-only"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-10 pointer-events-none"
          >
            <Icon
              name="material-symbols:search"
              class="text-primary"
              size="32"
            ></Icon>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-3 ps-20 text-24 text-primary border border-gray-300 rounded bg-white focus:ring-secondary focus:border-secondary"
            placeholder="search..."
            required
          />
        </div>
      </form>
      <memberDropDown :dropData="dropData"></memberDropDown>
    </div>
    <!-- item -->
    <ul class="grid gap-14">
      <li
        class="bg-section rounded-lg shadow hover:text-secondary hover:-translate-y-1 duration-300 group h-[234px]"
        v-for="(item, index) in listData"
        :key="index"
      >
        <a href="#" class="flex flex-row justify-between items-stretch h-full">
          <figure
            class="mr-7 lg:mr-14 filter grayscale group-hover:grayscale-0 flex-none"
          >
            <img
              class="object-cover rounded-t-lg w-[324px] h-[234px]"
              :src="item.image"
              :alt="item.title"
            />
          </figure>
          <div
            class="flex-1 w-0 h-full py-3 pr-3 text-light flex flex-col justify-between"
          >
            <p class="text-12 text-right mb-3.5">
              上次遊玩
              <span v-timeformat="item.last_play_time * 1000"></span>
            </p>
            <div>
              <p class="mb-7 text-20 font-semibold text-white truncate">
                {{ item.title }}
              </p>
              <ul class="space-y-2 mb-3">
                <li>發行商：{{ item.publishers.join('、') }}</li>
                <li>
                  發行日期：<span
                    v-timeformat="item.release_date * 1000"
                  ></span>
                </li>
                <li>已遊玩了 {{ item.playTime }} 小時</li>
              </ul>
            </div>
            <div class="text-right text-14">
              <p
                v-if="item.is_recommend === 1"
                class="text-labellight inline-flex items-center"
              >
                您推薦這款遊戲<Icon
                  name="bxs:like"
                  size="20"
                  class="ml-2"
                  @click.stop="showModal(item)"
                ></Icon>
              </p>
              <p
                v-else-if="item.is_recommend === -1"
                class="text-labeldark inline-flex items-center"
              >
                您不推薦這款遊戲<Icon
                  name="bxs:dislike"
                  size="20"
                  class="ml-2"
                  @click.stop="showModal(item)"
                ></Icon>
              </p>
              <p v-else>
                <Icon
                  name="bx:like"
                  size="20"
                  class="mr-2"
                  @click.stop="showModal({ ...item, is_recommend: 1 })"
                ></Icon>
                <Icon
                  name="bx:dislike"
                  size="20"
                  @click.stop="showModal({ ...item, is_recommend: 0 })"
                ></Icon>
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
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
          <div class="text-darkgray">{{ commentModalData?.title }}</div>
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
<script>
export default {
  setup() {
    const commentModalData = ref({})
    const commentModal = ref(null)

    const showModal = (data) => {
      commentModalData.value = { ...data }
      commentModal.value.show()
    }

    const modalbody = ref(null)
    const sendComment = () => {
      const commentValue = modalbody.value.getValue()
      console.log(commentValue)
    }

    return { modalbody, commentModal, commentModalData, sendComment, showModal }
  },
  data() {
    return {
      dropData: [
        { item: '依收藏日期排序' },
        { item: '篩選二' },
        { item: '篩選三' }
      ],
      listData: [
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          publishers: ['Frictional Games'],
          release_date: 1702736324,
          last_play_time: 1701000000,
          playTime: 1100,
          is_recommend: 0 // -1 = 不推薦,0 = 尚未評論,1 = 推薦
        },
        {
          image: '/images/member/memberGameImage001.png',
          title:
            'Dave the DiverDave the DiverDave the DiverDarDave the DiverDave the DiverDave the DiverDave theerDave the DiverDrDavet heDiverDave the DiverDave the DiverDavethe DiverDave thverDave the Diver',
          publishers: ['Frictional Games'],
          release_date: 1702736324,
          last_play_time: 1701000000,
          playTime: 1100,
          is_recommend: 1 // -1 = 不推薦,0 = 尚未評論,1 = 推薦
        },
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          publishers: ['Frictional Games'],
          release_date: 1702736324,
          last_play_time: 1701000000,
          playTime: 1100,
          is_recommend: -1 // -1 = 不推薦,0 = 尚未評論,1 = 推薦
        },
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          publishers: ['Frictional Games'],
          release_date: 1702736324,
          last_play_time: 1701000000,
          playTime: 1100,
          is_recommend: 0 // -1 = 不推薦,0 = 尚未評論,1 = 推薦
        },
        {
          image: '/images/member/memberGameImage001.png',
          title: 'Dave the Diver',
          publishers: ['Frictional Games'],
          release_date: 1702736324,
          last_play_time: 1701000000,
          playTime: 1100,
          is_recommend: 1 // -1 = 不推薦,0 = 尚未評論,1 = 推薦
        }
      ]
    }
  },
  methods: {
    // switchLike(isLike, index) {
    //   this.listData[index].isLike = isLike
    // }
  }
}
</script>
