import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", ()=>{

  const localStorageData = ref([])
  const setLocalStorage = (add, id)=>{
    if(add){
      localStorageData.value.push(id)
    } else {
      const index = localStorageData.value.findIndex(id)
      localStorageData.value.splice(index,1)
    }
  }

  return { localStorageData, setLocalStorage }
})