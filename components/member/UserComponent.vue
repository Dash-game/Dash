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
        <p class="text-28 ml-10">我的資料</p>
        <hr class="absolute -left-[240px] top-1/2 w-[250px] h-1" />
      </div>
      <!-- usertitle -->
      <div class="bg-section rounded-2xl py-2 px-6 xl:py-10 xl:px-12 flex justify-between items-center">
        <div class="flex items-center">
          <img :src="data.userPhotoUrl" class=" rounded-xl xl:rounded-3xl  w-[50px] h-[50px] xl:w-[100px] xl:h-[100px]" alt=""  />
          <p class="ml-10 xl:ml-20 xl:text-24">您好，{{ data.userName }}<span class="block xl:inline">( {{ data.userId }} )</span></p>
        </div>
        <div v-if="userToggle">
          <button @click="toggleUser()">
            <Icon name="fa6-solid:square-pen" class="text-40" />
            <p>修改帳號</p>
          </button>
        </div>
        <div v-else>
          <button class="button-sm xl:button-md button-hover px-4 py-2 xl:px-20 mr-2 xl:mr-10" @click="toggleUser()">修改</button>
          <button class="button-outline-sm xl:button-outline-md px-4 py-2  outline-labeldark text-labeldark xl:px-20 button-hover-labeldark" @click="toggleUser()">返回</button>
        </div>
      </div>
      <!-- usercontent -->
      <div v-if="!userToggle" class="rounded-2xl bg-section h-[500px] mt-12 xl:flex justify-between items-center px-28 py-20">
        <!-- 上傳圖片 -->
        <div>
          <img :src="data.userPhotoUrl" class="rounded-[50px] mb-10 w-[200px] mx-auto "  alt="">
          <button class="button-outline-md button-outline-hover px-20">上傳圖片</button>
        </div>

        <div>
          <!-- 帳號 -->
          <div class="flex items-center mb-7">
            <p class="text-24 mr-20">帳號</p>
            <p class="text-20 mx-auto">{{ data.userId }}</p>
          </div>
          <!-- 暱稱 -->
          <div class="flex justify-between">
            <label for="userName" class="text-24 ">暱稱</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="請輸入您的暱稱"
              class="focus:border-white focus:ring-0 py-3 px-6 bg-section rounded-2xl w-[450px]"
            />
          </div>
          <hr class="my-10" />
          <!-- 舊密碼 -->
          <div class="mb-6">
            <label for="password" class="text-24 mr-20">舊密碼</label>
            <input
              type="password"
              id="userName"
              name="userName"
              placeholder="請輸入舊的密碼"
              class="focus:border-white focus:ring-0 py-3 px-6 bg-section rounded-2xl w-[450px]"
            />
          </div>
          <!-- 新密碼 -->
          <div class="mb-6">
            <label for="newPassWord" class="text-24 mr-20">新密碼</label>
            <input
              type="password"
              id="newPassWord"
              name="newPassWord"
              placeholder="請輸入新的密碼"
              class="focus:border-white focus:ring-0 py-3 px-6 bg-section rounded-2xl w-[450px]"
            />
          </div>
          <!-- 再次輸入密碼 -->
          <div class="flex justify-between">
            <label for="checkPassWord" class="text-24 ">再次輸入</label>
            <input
              type="password"
              id="checkPassWord"
              name="checkPassWord"
              placeholder="再次輸入新密碼"
              class="focus:border-white focus:ring-0 py-3 px-6  bg-section rounded-2xl w-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IUserData } from "./member.d";
let userToggle = ref(true);
//引入範例
let data: IUserData = {
  userId: "Mouse3153",
  userName: "黃鼠鼠",
  password: "12345",
  userPhotoUrl: "https://i.imgur.com/8kOmLw9.jpg",
};

function toggleUser() {
  userToggle.value = !userToggle.value;
  console.log(userToggle);
}
</script>

<style scoped>
.bg-gradient-member {
  background: linear-gradient(0deg, rgba(33, 36, 51, 0) 0%, #38405c 100%);
}
</style>
