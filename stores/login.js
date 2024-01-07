import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", ()=> {
  const loggedIn = ref(false)
  const id = ref('')
  const name = ref('')
  const image = ref('')


  loggedIn.value = true
  id.value = 'Mouse3153'
  image.value = 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


  const logout = () => {

    loggedIn.value = false
    id.value =''
    name.value = ''
    image.value =''
  }

  return {loggedIn, id, name, image, logout}
});
