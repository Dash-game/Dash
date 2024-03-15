<script setup>
  const { cartList,setItem }=useCart()
  const cartStore = useCartStore()

  const cart = computed(()=>cartStore.cart)
</script>
<template>
  <div class="h-80">
    {{ cart }}

  <div>
    <button class="bg-red-600 p-2 m-2" @click="setItem(true, 'A1')">A1</button>
    <button class="bg-red-600 p-2 m-2" @click="setItem(false, 'A1')">Delete A1</button>
  </div>
  <div>
    <button class="bg-red-600 p-2 m-2" @click="setItem(true, 'A2')">A2</button>
    <button class="bg-red-600 p-2 m-2" @click="setItem(false, 'A2')">Delete A2</button>
  </div>
  </div>


</template>