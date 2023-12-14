<template>
  <div class="container">
    <MemberUserComponent />
    <MemberListComponent v-if="switchType === 'list'"></MemberListComponent>
    <MemberWishListComponent v-else-if="switchType === 'wishList'"></MemberWishListComponent>
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
