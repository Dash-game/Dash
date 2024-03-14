<script setup>
  const { cartList,setItem }=useCart()
  const cartData = ref({})
  const getCart = () => {
    cartData.value = {
      total:3960,
      data: [
        {
          id:"A1",
          name:"PUBG: BATTLEGROUNDS",
          image:"https://s3-alpha-sig.figma.com/img/96ca/b8d5/8a4278ad8a0da7338d49abea4a759fd5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F8N4pFfP4XjNw1Ev3pOZRfQco61g-gPD9uVARSV4rUx71cl-Pzm3Esz6lvuSYWckvUWuJqpJmQhy2obrj2Ntuf6oYbVAic5lYYnz3P1NZvBsduczpMzmR454srgcXZBcMIwcB8VgSe8Hjas3iEE9EOKtGF2QIj5lV5~6sxSnZBlDhE1aYaBl1L1xHivPspFt1GuS3or9YyrUr1X5Sc0dlwV0jYBXpCao5BsDwakPSc1CeDbkqFhFIUgOig3s~oun-IyRHiuPZgo288yIKlX-9S857geSJkeDxMi7gWAOyKaxipYBDu-ySNOcckM2lbQuYqQps5jDNJYnguuR73GOUw__",
          release_date:1707494400,
          price:{
            price:2000,
            sale_price:1680
          },
          platforms:["windows", "playstation","xbox"]
        },
        {
          id:"A1",
          name:"Double Dragon Gaiden: Rise Of The Dragons",
          image:"https://s3-alpha-sig.figma.com/img/a3f6/5de7/a84adc56e2b9b778aa31f08498804267?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OOpJyYDU-dAB6O5KbbSSDIPjYxEJRl9QtFd8-chh1uunB4xI7ROd6aNcmbdmGLUojFhbtqmV2DTY-qkbrFzMG3JxfLpgSMvpUi1qN00OefF2N0i7zIc3RYcmTOtiIBDexx-45Epb44bWl6WBztf9p3mFcZSAD4T~La9cVxIVSTgxTNtR-1qmaf1haMtbQD9n~gSixh-WkmTsutYQiM19d4wBr48SaXplU89cXX1Jhkis53YYr0BwnJZMtfTbkFuAYjU6p4SposGRjCnP3vlvfUZ5YGpumciRyvIEX5h~JFjfKedBUAV8OFXIxvViU10wILLQC7NaxZ08Bu37tO6WNg__",
          release_date:1723219200,
          price:{
            price:1500,
            sale_price:1080
          },
          platforms:["windows", "playstation","xbox"]
        },
        {
          id:"A3",
          name:"Double Dragon Gaiden: Rise Of The Dragons",
          image:"https://s3-alpha-sig.figma.com/img/a3f6/5de7/a84adc56e2b9b778aa31f08498804267?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OOpJyYDU-dAB6O5KbbSSDIPjYxEJRl9QtFd8-chh1uunB4xI7ROd6aNcmbdmGLUojFhbtqmV2DTY-qkbrFzMG3JxfLpgSMvpUi1qN00OefF2N0i7zIc3RYcmTOtiIBDexx-45Epb44bWl6WBztf9p3mFcZSAD4T~La9cVxIVSTgxTNtR-1qmaf1haMtbQD9n~gSixh-WkmTsutYQiM19d4wBr48SaXplU89cXX1Jhkis53YYr0BwnJZMtfTbkFuAYjU6p4SposGRjCnP3vlvfUZ5YGpumciRyvIEX5h~JFjfKedBUAV8OFXIxvViU10wILLQC7NaxZ08Bu37tO6WNg__",
          release_date:1723219200,
          price:{
            price:1200,
            sale_price:1200
          },
          platforms:["mac", "linux"]
        },
        {
          id:"A4",
          name:"Double Dragon Gaiden: Rise Of The Dragons, Double Dragon Gaiden: Rise Of The Dragons",
          image:"https://s3-alpha-sig.figma.com/img/a3f6/5de7/a84adc56e2b9b778aa31f08498804267?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OOpJyYDU-dAB6O5KbbSSDIPjYxEJRl9QtFd8-chh1uunB4xI7ROd6aNcmbdmGLUojFhbtqmV2DTY-qkbrFzMG3JxfLpgSMvpUi1qN00OefF2N0i7zIc3RYcmTOtiIBDexx-45Epb44bWl6WBztf9p3mFcZSAD4T~La9cVxIVSTgxTNtR-1qmaf1haMtbQD9n~gSixh-WkmTsutYQiM19d4wBr48SaXplU89cXX1Jhkis53YYr0BwnJZMtfTbkFuAYjU6p4SposGRjCnP3vlvfUZ5YGpumciRyvIEX5h~JFjfKedBUAV8OFXIxvViU10wILLQC7NaxZ08Bu37tO6WNg__",
          release_date:1723219200,
          price:{
            price:1200,
            sale_price:1200
          },
          platforms:["mac", "linux"]
        }
      ]
    }
  }

  const platformList = {
    playstation:"sony-playstation",
    xbox:"microsoft-xbox",
    windows:"microsoft-windows",
    mac: "apple",
    linux:  "linux"
  }
  
  getCart()

</script>
<template>
<div class="container px-3 flex flex-col justify-between  py-6">
  <!-- steps -->
  <div>steps</div>
  <ul class="max-h-[526px] overflow-y-auto border-t border-light">
    <li class="border-b border-light" v-for="item in cartData.data" :key="item.id">
      <div class="flex py-3 sm:py-5 px-2 sm:pl-3 sm:pr-6 relative">
        <a href="#" class="hidden sm:block bg-cover bg-center w-20 sm:w-[180px] lg:w-[252px] shrink-0 rounded-2xl" :style="`background-image:url(${item.image})`"></a>
        <div class="grow shrink sm:ml-4 truncate">
          <!-- 名稱 -->
          <a href="#" class=""><h3 class="lg:text-28 font-bold hover:text-secondary truncate mr-5" :title="item.name">{{item.name}}</h3></a>
          <div class="flex">
            <div>
              <!-- 日期 -->
              <div class="mt-1 mb-2 sm:mt-3 sm:mb-6 text-sm lg:text-xl" >
                <span v-if="item.release_date*1000 < (new Date).getTime()"
                v-timeformat="{
                  timestamp: item.release_date*1000,
                  format: '發行日期：YYYY-MM-DD'
                }"
                ></span>
                <span v-else
                v-timeformat="{
                  timestamp: item.release_date*1000,
                  format: '預購中，將於 YYYY-MM-DD 發行'
                }"
                ></span>
              </div>
              
              <!-- platform -->
              <div class="flex h-7">
                <div v-for="platform in item.platforms" :key="platform" :title="platform">
                  <Icon :name="`mdi:${platformList[platform]}`" class="mr-1 sm:mr-3 text-16 sm:text-24"  />
                </div>
              </div>
            </div >

            <!-- 價格 -->
            <div class="flex items-end lg:mr-3 shrink-0 ms-auto">
              <div class="flex items-center">
                <div class="text-labeldark font-bold lg:text-40 mr-2">$ {{ item.price.sale_price }}</div>
                <div class="font-bold" v-if="item.price.sale_price!=item.price.price">
                  <div class="text-labellight text-sm lg:text-28 leading-none text-center">-{{ (item.price.sale_price/item.price.price)*100 }}%</div>
                  <div class="text-sm lg:text-xl leading-none px-1 sm:px-4 relative
                    after:w-full 
                    after:h-[1px] 
                    after:bg-light 
                    after:absolute
                    after:top-1/2
                    after:left-0
                    ">${{ item.price.price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-auto sm:relative absolute top-0 right-0">
          <button class="m-1 sm:m-0 sm:p-1 rounded hover:bg-light hover:text-primary active:text-secondary">
            <Icon name="mdi:close" class="text-24 " />
          </button>
        </div>
      </div>
    </li>
  </ul>
  <div class="flex justify-between border-t border-light font-bold sm:text-32 py-3 sm:pt-5 px-2 sm:px-5">
    <div>Total 總金額</div>
    <div class="text-labeldark">NT $ {{ cartData.total }}</div>
  </div>

  <!-- navigation -->
  <div>
    <a href="#">navigation</a>
    </div>
</div>


</template>

<style>
/* *{
  outline: 1px solid #AFA3
} */
</style>