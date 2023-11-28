<template>
  <div>
    <!-- Breadcrumb -->
    <div class="bg-Breadcrumb hidden md:block">
      <nav class="flex container xl:text-20 py-3" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">首頁</li>
          <li>
            <div class="flex items-center">
              <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <p>會員中心</p>
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
    <p class="text-28">我的資料</p>
    <!-- usertitle -->
    <div class="bg-section rounded-2xl py-10 px-12 flex justify-between items-center">
      <div class="flex items-center">
        <img :src="data.userPhotoUrl" alt="" width="100px" height="100px" />
        <p class="ml-20 text-24">您好，{{ data.userName }}( {{ data.userId }} )</p>
      </div>
      <div v-if="userToggle">
        <button @click="toggleUser()">
          <Icon name="fa6-solid:square-pen" class="text-40" />
          <p>修改帳號</p>
        </button>
      </div>
      <div v-else>
        <button @click="toggleUser()">修改</button>
        <button @click="toggleUser()">返回</button>
      </div>
    </div>
    <!-- usercontent -->
    <div v-if="!userToggle" class="rounded-2xl bg-section h-[500px] mt-12 flex justify-between items-center">
      <div>
        <img :src="data.userPhotoUrl" alt="" width="250px" height="250px" />
        <button>上傳圖片</button>
      </div>
      <div>
        <div class="flex items-center">
          <p>帳號</p>
          <p>{{ data.userId }}</p>
        </div>
        <label for="userName" >暱稱</label>
        <input type="text" id="userName" name="userName" placeholder="請輸入您的暱稱">
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
  userPhotoUrl: "https://i.imgur.com/JfkeyjH.png",
};

function toggleUser() {
  userToggle.value = !userToggle.value;
  console.log(userToggle);
}
</script>
