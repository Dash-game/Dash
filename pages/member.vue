<template>
  <div class="container">
    <MemberUserComponent />
    <CommonTabPageComponent />
    <MemberListComponent v-if="switchType === 'list'"></MemberListComponent>
    <MemberWishListComponent v-else-if="switchType === 'wishList'"></MemberWishListComponent>
    <MemberCommentComponent />
  </div>
</template>
<script>
export default {
  data() {
    return {
      switchType: 'wishList'
    }
  }
}
</script>
