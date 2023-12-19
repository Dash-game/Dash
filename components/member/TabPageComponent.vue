<script setup>

    const tabStore = useTabStore()

    // const selectedPage = ref('listPage');
    // interface IApiRes {
    //     message: string;
    //     code: string;
    // }

    // export interface ITab extends IApiRes {
    //     tabName: string;
    // }
</script>
<template>
    <!-- <h2>分頁列表</h2> -->
    <div class="mb-12 border-b border-light flex">
        <!-- 收藏庫 -->
        <input v-model="tabStore.selectedPage" class="hidden"  type="radio" name="listPage" id="listPage" value="listPage" checked>
        <label class="px-4 md:px-6 py-4 lg:px-20 lg:py-4 border border-secondary rounded-t-lg bg-primary text-light cursor-pointer" :class="tabStore.selectedPage === 'listPage' ? 'bg-secondary text-primary':''" for="listPage">
            <span class="block md:inline md:mr-4 lg:mr-6 text-18 md:text-24 lg:text-28">收藏庫</span>
            <span class="block md:inline text-center text-22 md:text-28 lg:text-32">93</span> 
        </label>
        <!-- 願望清單 -->
        <input v-model="tabStore.selectedPage" class="hidden" type="radio" name="wishListPage" id="wishListPage" value="wishListPage">
        <label class="px-4 md:px-6 py-4 lg:px-20 lg:py-4 border border-secondary rounded-t-lg bg-primary text-light cursor-pointer"  :class="tabStore.selectedPage === 'wishListPage' ? 'bg-secondary text-primary':''" for="wishListPage">
            <span class="block md:inline md:mr-4 lg:mr-6 text-18 md:text-24 lg:text-28">願望清單</span>
            <span class="block md:inline text-center text-22 md:text-28 lg:text-32">16</span> 
        </label>
        <!-- 遊戲評論 -->
        <input v-model="tabStore.selectedPage" class="hidden"  type="radio" name="commentPage" id="commentPage" value="commentPage">
        <label class="px-4 md:px-6 py-4 lg:px-20 lg:py-4 border border-secondary rounded-t-lg bg-primary text-light cursor-pointer"  :class="tabStore.selectedPage === 'commentPage' ? 'bg-secondary text-primary':''" for="commentPage">
            <span class="block md:inline md:mr-4 lg:mr-6 text-18 md:text-24 lg:text-28">遊戲評論</span>
            <span class="block md:inline text-center text-22 md:text-28 lg:text-32">12</span> 
        </label>
    </div>
    <div v-show="tabStore.selectedPage === 'listPage'">
        <MemberListComponent />
    </div>
    <div v-show="tabStore.selectedPage === 'wishListPage'">
        <MemberWishListComponent />
    </div>
    <div v-show="tabStore.selectedPage === 'commentPage'">
        <MemberCommentComponent />
    </div>
</template>
<style>
  
</style>