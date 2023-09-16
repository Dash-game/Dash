<template>
  {{ isOverflowContent }}
  <div class="flex justify-between items-center mb-3">
    <div class="flex items-center">
      <GlobalAvatar url="https://picsum.photos/id/237/200/300" />
      <div class="ml-2">
        <div class="text-18">{{ data.name }}</div>
        <div class="text-darkgray text-12">
          寫了{{ data.commentCount }}條評論
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div
        class="rounded-lg text-18 min-w-[150px] text-center text-primary mb-1"
        :class="[data.isRecommend ? 'bg-labellight' : 'bg-labeldark']"
      >
        {{ data.isRecommend ? '推薦' : '不推薦' }}
      </div>
      <div class="text-14 text-labellight">
        遊玩時數 {{ data.gameTimes }} 小時
      </div>
    </div>
  </div>
  <div class="flex-grow border-b border-b-white flex flex-col">
    <div class="text-darkgray mb-2">發表於{{ data.createTime }}</div>
    <div
      class="relative"
      :class="{
        content: isOverflowContent
      }"
      ref="content"
    >
      <a
        class="readmore block w-full text-end text-white/40 absolute bottom-1 right-3 ease-in-out duration-300 opacity-0"
        :class="{ active: isOverflowContent }"
        href="#"
        >more</a
      >
      <p
        class="px-3 mb-6 leading-loose tracking-widest max-h-40 line-clamp-5 pointer-events-none readmore-cover"
        v-html="data.conent"
      ></p>
    </div>

    <div class="flex gap-9 mb-8 mt-auto">
      <div>
        <GlobalTooltops
          placement="bottom"
          :msg="`有${data.recommendCount}人推薦此評論`"
        >
          <template v-slot:button>
            <Icon name="icon-park-outline:good-one" color="white" />
            <span class="ml-1">{{ data.recommendCount }}</span>
          </template>
        </GlobalTooltops>
      </div>
      <div>
        <GlobalTooltops
          placement="bottom"
          :msg="`有${data.funCount}人覺得此評論有趣`"
        >
          <template v-slot:button>
            <Icon name="cil:mood-very-good" color="white" />
            <span class="ml-1">{{ data.funCount }}</span>
          </template>
        </GlobalTooltops>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = ref({})
const content = ref(null)
let isOverflowContent = ref(0)

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

watch(
  () => props.data,
  (newValue) => {
    data.value = newValue
  },
  {
    immediate: true
  }
)

onMounted(() => {
  isOverflowContent.value = content.value.offsetHeight - 24 >= 160
})
</script>

<style scoped>
.content .readmore-cover::after {
  content: '';
  @apply block absolute top-0 left-0  w-full h-full bg-gradient-to-b from-5%  to-80% from-transparent to-[#13131399];
}

.content .readmore:hover + .readmore-cover::after {
  @apply to-black/40;
}

.content .active {
  @apply hover:opacity-100 z-10 visible;
}
</style>
