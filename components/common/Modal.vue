<template>
  <div
    ref="modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-primary rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 rounded-t">
          <slot name="modalHeader"></slot>
          <button
            type="button"
            ref="CloseModal"
            class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            @click="hide"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <slot name="modalBody"></slot>
        </div>
        <!-- Modal footer -->
        <template v-if="$slots.modalFooter">
          <slot name="modalFooter"></slot>
        </template>
        <template v-else>
          <div
            v-if="footer"
            class="flex items-center justify-end p-6 pt-0 space-x-2 rounded-b"
          >
            <button
              type="button"
              class="text-labeldark bg-transparent border-labeldark focus:outline-none rounded-lg border text-sm font-medium px-14 py-2.5 focus:z-10"
              @click="hide"
            >
              取消
            </button>
            <button
              @click="submitHandler"
              type="button"
              class="text-primary bg-secondary focus:outline-none rounded-lg text-sm px-14 py-2.5 text-center"
            >
              送出
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Modal } from 'flowbite'

const props = defineProps({
  data: {
    type: Object
  },
  footer: {
    type: Boolean,
    default: true
  },
  submitHandler: {
    type: Function
  }
})

const modal = ref(null)
const CloseModal = ref(null)
const $modal = ref(null)

const show = () => {
  $modal.value.show()
}

const hide = () => {
  $modal.value.hide()
}

defineExpose({
  show,
  hide
})

onMounted(() => {
  const options = {
    placement: 'center',
    backdrop: 'dynamic',
    backdropClasses:
      'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    closable: true,
    onHide: () => {
      console.log('modal is hidden')
    },
    onShow: () => {
      console.log('modal is shown')
    },
    onToggle: () => {
      console.log('modal has been toggled')
    }
  }
  if (modal) {
    $modal.value = new Modal(modal.value, options)
  }
})
</script>
