import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", ()=> {
  const loggedIn = ref(false)
  const id = ref('')

  const dashLogin = useCookie('dashLogin')

  if(dashLogin){
    loggedIn.value = true
    id.value = dashLogin.value.email
  }

  const logout = () => {
    dashLogin.value = {}
    loggedIn.value = false
  }

  return {loggedIn, id, logout}
});
