<script setup>

</script>
<template>
  <div class="h-[100vh] ">
    <div class="container h-full flex justify-center items-centerpy-20 ">
      <div class="w-full grid xl:grid-cols-2 items-center">
        <div class="grid md:grid-cols-6 border-b xl:border-r xl:border-b-0 border-light">
          <div class="md:col-start-2 md:col-span-4 py-16 xl:py-5">
            <h1 class="text-center text-2xl xl:text-3xl mb-16">登入Dash徜徉遊戲世界</h1>
            <div class="mb-10">
              <input type="email" class="w-full h-16 bg-transparent text-2xl font-medium border border-light rounded-xl" placeholder="Email">
            </div>
            <div class="mb-16">
              <input type="password" class="w-full h-16 bg-transparent text-2xl font-medium border border-light rounded-xl" placeholder="Password">
            </div>
            <button class="w-full h-16 rounded-xl text-2xl bg-secondary text-primary">登入</button>
            <div class=" text-center mt-4">
              <a href="#" class=" text-darkgray">忘記密碼</a>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-6">
          <div class="md:col-start-2 md:col-span-4 py-16 xl:py-5">
            <button class="w-full h-16 rounded-xl flex items-center justify-center bg-light text-primary text-2xl mb-10">
              <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-7">
                <Icon name="flat-color-icons:google" class="text-[28px]" />
              </div>
              <span>
                以 Google 帳號登入
              </span>
            </button>
            <button class="w-full h-16 rounded-xl flex items-center justify-center bg-light text-primary text-2xl">
              <div class="w-10 h-10 rounded-xl bg-[#06C755] flex items-center justify-center mr-7">
                <Icon name="ri:line-fill" class="text-[32px] text-white" />
              </div>
              <span>
                以 Line 帳號登入
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<style scoped>
/* *{
  outline: 1px solid #A00
} */
</style>