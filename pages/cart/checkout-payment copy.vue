<template>
  <div class="container mx-auto">
    <form @submit="onSubmit" class="md:grid grid-cols-12">
      <Field name="field" rules="between:1,10" />
      <div class="col-span-5">
        <h5 class="text-32 text-white pb-7">訂購明細</h5>
        <div
          class="flex gap-4 w-full border-b border-b-white"
          v-for="(item, index) in data"
          :key="index"
        >
          <img
            class="w-[159px] h-[95px] object-cover"
            src="https://fakeimg.pl/300x200/200"
          />
          <div class="w-full">
            <div class="">
              <h6>{{ item.name }}</h6>
              <div>發行日期：{{ item.release_date.date }}</div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex md:mt-2 md:justify-end">
                <Icon
                  v-if="item.platforms.windows"
                  name="mdi:microsoft-windows"
                  class="mr-1 text-24"
                />
                <Icon
                  v-if="item.platforms.linux"
                  name="mdi:linux"
                  class="mr-1 text-24"
                />
                <Icon
                  v-if="item.platforms.mac"
                  name="mdi:laptop-mac"
                  class="text-24"
                />
              </div>
              <div
                class="flex items-center font-medium relative md:justify-between"
              >
                <p class="text-28 text-labeldark mr-1">$ 1,982</p>
                <div>
                  <p class="text-labellight leading-none text-18 text-center">
                    - 42%
                  </p>
                  <div class="relative text-center px-2">
                    <div
                      class="h-px w-full bg-white absolute -left-0 top-1/2"
                    ></div>
                    <p class="text-18 leading-none">$ 1,982</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-start-7 col-span-5">
        <div class="bg-slate-300 rounded-xl mb-2"></div>

        <div class="credit-card">
          <div class="chip"></div>
          <div class="card-number">1234 5678 9012 3456</div>
          <div class="card-holder">John Doe</div>
          <div class="expiry-date">12/24</div>
        </div>

        <div class="mb-3">
          <label for="CardName" class="block mb-2 text-sm font-medium"
            >持卡人姓名</label
          >
          <input
            type="text"
            id="CardName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full p-2.5"
            placeholder="John"
            required
            v-model="holder"
          />
          <ErrorMessage :name="holder" />
        </div>
        <div class="mb-3">
          <label class="block mb-2 text-sm font-medium">信用卡號碼</label>
          <div
            class="flex gap-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
          >
            <input
              type="text"
              class="bg-transparent border-none text-gray-900 text-sm rounded-lg focus:ring-transparent block w-full p-2.5"
              v-model="cardNum1"
            />
            <input
              type="text"
              class="bg-transparent border-none text-gray-900 text-sm rounded-lg focus:ring-transparent block w-full p-2.5"
              v-model="cardNum2"
            />
            <input
              type="text"
              class="bg-transparent border-none text-gray-900 text-sm rounded-lg focus:ring-transparent block w-full p-2.5"
              v-model="cardNum3"
            />
            <input
              type="text"
              class="bg-transparent border-none text-gray-900 text-sm rounded-lg focus:ring-transparent block w-full p-2.5"
              v-model="cardNum4"
            />
          </div>
        </div>
        <div class="flex justify-between gap-3">
          <div class="mb-2 w-1/2">
            <label class="block mb-2 text-sm font-medium">到期日</label>
            <div
              class="flex gap-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            >
              <input
                type="text"
                class="bg-transparent border-none text-gray-900 text-sm rounded-lg focus:ring-transparent block w-full p-2.5 text-center"
                placeholder="月份"
                v-model="expireMonth"
              />
              <div class="px-2 flex justify-center items-center">/</div>
              <input
                type="text"
                class="bg-transparent border-none text-gray-900 text-sm rounded-lg focus:ring-transparent block w-full p-2.5 text-center"
                placeholder="西元"
                v-model="expireYear"
              />
            </div>
          </div>
          <div class="mb-2 w-1/2">
            <label for="SafetyNumber" class="block mb-2 text-sm font-medium"
              >安全碼</label
            >
            <input
              type="text"
              id="SafetyNumber"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full p-2.5"
              v-model="safetyNum"
            />
          </div>
        </div>
      </div>
      <!-- <button>Submit</button> -->
    </form>
  </div>
  <button type="button" @click="handleSubmitForm">Submit</button>
</template>

<script setup>
import { useForm, useField, ErrorMessage } from 'vee-validate'
import { required, min, max, numeric } from '@vee-validate/rules'
const { handleSubmit } = useForm()

const holder = useField('holder', required)
const cardNum1 = useField('cardNum1')
const cardNum2 = useField('cardNum2')
const cardNum3 = useField('cardNum3')
const cardNum4 = useField('cardNum4')
const expireMonth = useField('expireMonth')
const expireYear = useField('expireYear')
const safetyNum = useField('safetyNum')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

const handleSubmitForm = () => {
  handleSubmit(onSubmit)()
}

const data = ref([
  {
    name: 'PUBG:BATTLEGROUNDES',
    release_date: {
      coming_soon: false,
      date: '2021-03-26'
    },
    price_overview: {
      initial: '1,982',
      final: '1,982',
      discount_percent: 42
    },
    platforms: { windows: true, mac: false, linux: false }
  },
  {
    name: 'PUBG:BATTLEGROUNDES',
    release_date: {
      coming_soon: false,
      date: '2021-03-26'
    },
    price_overview: {
      initial: '1,982',
      final: '1,982',
      discount_percent: 42
    },
    platforms: { windows: true, mac: false, linux: false }
  },
  {
    name: 'PUBG:BATTLEGROUNDES',
    release_date: {
      coming_soon: false,
      date: '2021-03-26'
    },
    price_overview: {
      initial: '1,982',
      final: '1,982',
      discount_percent: 42
    },
    platforms: { windows: true, mac: false, linux: false }
  }
])
</script>

<style scoped>
.credit-card {
  width: 85.6mm;
  height: 53.98mm;
  background-color: #333;
  border-radius: 15px;
  padding: 10mm;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  position: relative;
}
.chip {
  width: 15mm;
  height: 10mm;
  background: #b3b3b3;
  border-radius: 2mm;
  position: absolute;
  top: 5mm;
  left: 5mm;
}

.card-number {
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.card-holder,
.expiry-date {
  color: #fff;
  font-size: 14px;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.expiry-date {
  bottom: 50px;
}
</style>
