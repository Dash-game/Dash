<template>
  <article class="">
    <h3 class="mb-2 font-semibold">您是否推薦 {{ props.data?.title }} ?</h3>
    <ul
      class="items-center w-full text-sm font-medium text- rounded-lg sm:flex mb-7"
    >
      <li class="w-auto">
        <div class="flex items-center">
          <input
            :id="'recommend' + props.data.id"
            type="radio"
            value="1"
            name="list-radio"
            v-model.number="isRecommended"
            class="peer/recommend hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            :for="'recommend' + props.data.id"
            class="peer-checked/recommend:bg-labellight peer-checked/recommend:text-primary px-6 py-3 text-sm font-medium text-white rounded text-center"
          >
            <span class="flex items-center">
              <Icon
                class="mr-1 text-lg"
                name="icon-park-outline:good-one"
              />推薦</span
            >
          </label>
        </div>
      </li>
      <li class="w-auto">
        <div class="flex items-center">
          <input
            :id="'not_recommend' + props.data.id"
            type="radio"
            value="-1"
            name="list-radio"
            v-model.number="isRecommended"
            class="peer/not_recommend hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            :for="'not_recommend' + props.data.id"
            class="py-3 px-6 text-sm font-medium text-white peer-checked/not_recommend:bg-labellight peer-checked/not_recommend:text-primary rounded"
          >
            <span class="flex items-center">
              <Icon
                class="mr-1 text-lg"
                name="icon-park-outline:bad-one"
              />不推薦
            </span>
          </label>
        </div>
      </li>
    </ul>

    <label for="message" class="block mb-2 text-sm font-medium"
      >您{{ isRecommended == 1 ? '推薦' : '不推薦' }}
      {{ props.data?.title }} 的原因：</label
    >
    <textarea
      id="message"
      rows="8"
      class="block p-2.5 w-full text-sm text-primary bg-light rounded-lg"
      placeholder="請描述您對此款遊戲滿意或不滿意的地方..."
      v-model="content"
    ></textarea>
  </article>
</template>

<script setup>
const isRecommended = ref(1)
const content = ref('')
const props = defineProps({
  data: {
    type: Object
  }
})

const getValue = () => {
  return {
    ...props.data,
    is_recommend: isRecommended.value,
    content: content.value
  }
}

defineExpose({
  getValue
})

watch(
  () => props.data,
  (val) => {
    console.log(val)
    isRecommended.value = val.is_recommend
    content.value = val.content
  }
)
// const props = defineProps({})
</script>
