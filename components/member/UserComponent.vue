<template>
  <div class="relative">
    <!-- Breadcrumb -->
    <div class="bg-Breadcrumb hidden md:block">
      <nav class="flex container xl:text-20 py-3" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link to="/">首頁</router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <router-link to="/member">會員中心</router-link>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span class="ml-1 text-gray-400 md:ml-2">收藏庫</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <!-- background -->
    <div class="bg-gradient-member top-0 absolute h-[120px] w-full -z-10"></div>
    <!-- user -->
    <div class="container pt-10">
      <div class="relative mb-10">
        <p class="text-28 ml-12 xl:ml-10">我的資料</p>
        <hr class="absolute -left-[240px] top-1/2 w-[260px] xl:w-[250px] h-1" />
      </div>
      <!-- usertitle -->
      <div class="bg-section rounded-2xl py-4 px-6 md:py-6 xl:py-10 xl:px-12 flex justify-between items-center">
        <div class="flex items-center">
          <img :src="data.userPhotoUrl" class="rounded-xl xl:rounded-3xl w-[50px] h-[50px] xl:w-[100px] xl:h-[100px]" alt="" />
          <p class="ml-10 xl:ml-20 xl:text-24">
            您好，{{ data.userName }}<span class="block xl:inline">( {{ data.userId }} )</span>
          </p>
        </div>
        <div v-if="userToggle">
          <button @click="toggleUser()">
            <Icon name="fa6-solid:square-pen" class="text-24 xl:text-40" />
            <p>修改帳號</p>
          </button>
        </div>
        <div v-else>
          <button class="block md:inline md:px-6 button-sm xl:button-md button-hover px-4 py-2 xl:px-20 xl:mr-10" @click="onSubmit()">修改</button>
          <button class="button-outline-sm md:ml-3 md:px-6 px-4 mt-2 py-2 xl:py-4 outline-labeldark text-labeldark xl:px-20 button-hover-labeldark" @click="toggleUser()">返回</button>
        </div>
      </div>

      <div class="user-open-0fr" :class="{ 'user-open-1fr': !userToggle }">
        <!-- usercontent -->
        <div id="hidden" class="">
          <div class="z-10 rounded-2xl bg-section mt-5 xl:mt-12 lg:flex justify-between items-center px-8 py-10 lg:px-24 lg:py-12 xl:px-28 xl:py-20">
            <!-- 上傳圖片 -->
            <div class="text-center xl:w-1/3">
              <img :src="data.userPhotoUrl" class="rounded-[50px] mb-5 xl:mb-10 w-[200px] mx-auto" alt="" />
              <button class="button-outline-sm md:button-outline-md button-outline-hover px-16 xl:px-20">上傳圖片</button>
            </div>

            <div class="mt-5 border-t pt-7 lg:border-0 lg:pt-0 xl:w-1/2">
              <!-- 帳號 -->
              <div class="flex items-center mb-2 xl:mb-7">
                <p class="text-18 xl:text-24 w-1/3">帳號</p>
                <p class="text-20 text-center w-full">{{ data.userId }}</p>
              </div>
              <!-- 暱稱 -->
              <div class="flex justify-between items-center mb-2 lg:mb-0">
                <label for="userName" class="text-18 xl:text-24 w-1/3">暱稱</label>
                <input
                  required
                  type="text"
                  id="userName"
                  name="userName"
                  v-model.lazy="data.userName"
                  placeholder="請輸入您的暱稱"
                  class="focus:border-white focus:ring-0 lg:py-3 xl:px-6 bg-section rounded-2xl w-full lg:w-[450px]"
                />
              </div>
              <hr class="my-10 hidden lg:block" />
              <!-- 舊密碼 -->
              <div class="flex justify-between items-center mb-2 xl:mb-7">
                <label for="oldPassWord" class="text-18 xl:text-24 w-1/3">舊密碼</label>
                <input
                  type="password"
                  v-model="tempData.oldPassWord"
                  id="oldPassWord"
                  name="oldPassWord"
                  placeholder="請輸入舊的密碼"
                  class="focus:border-white focus:ring-0 lg:py-3 xl:px-6 bg-section rounded-2xl w-full lg:w-[450px]"
                />
              </div>
              <!-- 新密碼 -->
              <div class="flex justify-between items-center mb-2 xl:mb-7">
                <label for="newPassWord" class="text-18 xl:text-24 w-1/3">新密碼</label>
                <input
                  v-model="tempData.newPassWord"
                  type="passWord"
                  id="newPassWord"
                  name="newPassWord"
                  placeholder="請輸入新的密碼"
                  class="focus:border-white focus:ring-0 lg:py-3 xl:px-6 bg-section rounded-2xl w-full lg:w-[450px]"
                />
              </div>

              <!-- 再次輸入密碼 -->
              <div class="flex justify-between items-center mb-2 xl:mb-7">
                <label for="checkPassWord" class="text-18 xl:text-24 w-1/3">再次輸入</label>
                <input
                  v-model="tempData.checkPassWord"
                  type="passWord"
                  id="checkPassWord"
                  name="checkPassWord"
                  placeholder="再次輸入新密碼"
                  class="focus:border-white focus:ring-0 lg:py-3 xl:px-6 bg-section rounded-2xl w-full lg:w-[450px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IUserData } from "./member.d";
let userToggle = ref(true);
let data = ref<IUserData>({
  userId: "Mouse3153",
  userName: "黃鼠鼠",
  password: "12345",
  userPhotoUrl: "https://i.imgur.com/8kOmLw9.jpg",
});

let tempData = ref({
  oldPassWord: "",
  newPassWord: "",
  checkPassWord: "",
});

function toggleUser() {
  userToggle.value = !userToggle.value;
}

// function checkPassWord(){
//   tempData.checkPassWord == tempData.newPassWord
// }

function onSubmit() {
  console.log("送出", data);
}
</script>

<style scoped>
.bg-gradient-member {
  background: linear-gradient(0deg, rgba(33, 36, 51, 0) 0%, #38405c 100%);
}

.user-open-0fr {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms ease-in;
  overflow: hidden;

  #hidden {
    overflow: hidden;
  }
}

.user-open-1fr {
  grid-template-rows: 1fr;
}
</style>
