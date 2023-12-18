<script setup>
  // 目前頁碼
  const currentPage = ref(1);
  // 一頁幾筆資料
  const COUNT_OF_PAGE = 20;
  // 頁碼固定顯示
  const PAGINATION_MAX = 6;

  // export interface IPage extends IApiRes {
  //     pages: Ipage[];
  // }
  // export interface Ipage {
  //     tabPage_Name: string;
  //     tabPage_length: Number;
  //     currentPage: Number;
  // }
  const tabPage_Name = ref(1200);
  // 分頁後呈現資料
  
  // 總頁數
  const totalPage = computed(() => {
    return Math.ceil(tabPage_Name.value / COUNT_OF_PAGE);
  });

  // 分頁尾端
  const pageEnd = computed(() => {
    return totalPage.value <= PAGINATION_MAX 
      ? totalPage.value
      : PAGINATION_MAX;
  });

  // 分頁位移，固定當前頁碼在中間
  const pageAddAmount = computed(() => {
    const tmp = 
      totalPage.value <= PAGINATION_MAX
        ? 0
        : currentPage.value + 4 - pageEnd.value;
    return tmp <= 0
      ? 0
      : totalPage.value - (PAGINATION_MAX + tmp) < 0
        ? totalPage.value - PAGINATION_MAX
        : tmp;
  });

  // 換頁
  const changePage = page => {
    if(page < 1 || page > totalPage) return;
    currentPage.value = page;
  }
</script>
<template>
  <nav v-if="pageEnd > 0">
    <ul class="flex justify-center items-center">
      <li class=""  @click.prevent="changePage(1)">
        <a class="block px-3 py-1 mr-2 border border-primary rounded-full text-light text-sm hover:bg-secondary hover:text-primary" href>1</a>
      </li>
      <li class="" @click.prevent="changePage(currentPage - 1)" :class="{'disabled': currentPage === 1}">
        <a class="block px-3 py-1 border border-primary rounded-full text-light text-sm hover:bg-secondary hover:text-primary" href>
          <img class="w-full align-top" src="/images/caret-left.png" alt="往前一頁">
        </a>
      </li>
      <li class="px-3" v-for="i in pageEnd" :key="i" @click.prevent="changePage(i + pageAddAmount)">
        <a class="block px-3 py-1 border border-primary rounded-full text-light text-sm hover:bg-secondary hover:text-primary" href>{{ i + pageAddAmount }}</a>
      </li>
      <li @click.prevent="changePage(currentPage + 1)" :class="{'disabled': currentPage === totalPage}">
        <a class="block px-3 py-1 border border-primary rounded-full text-light text-sm hover:bg-secondary hover:text-primary" href>
          <img class="w-full align-top" src="/images/caret-right.png" alt="往後一頁">
        </a>
      </li>
      <li @click.prevent="changePage(totalPage)">
        <a class="block px-3 py-1 ml-2 border border-primary rounded-full text-light text-sm hover:bg-secondary hover:text-primary" href>{{ totalPage }}</a>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
  .disabled{
    opacity: 0;
  }
</style>