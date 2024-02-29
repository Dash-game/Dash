<script setup>
  const cartList = ref([])
  const getItem = () => {
    if(process.client){
      cartList.value = JSON.parse(localStorage.getItem("dash"))
    }
  }
  const addItem = (id)=>{
    if(process.client){
      if(!cartList.value){
        localStorage.setItem("dash", `${[id]}`)
        cartList.value = JSON.parse(localStorage.getItem("dash"))
      }else{
        cartList.value.push(id)
        localStorage.setItem("dash",JSON.stringify(cartList.value))
      }
    }
  }
  getItem()
</script>
<template>
  <div class="h-80">
    help
    <button class="bg-red-300" @click="addItem('A123')">add</button>
    {{ cartList }}
  </div>

</template>