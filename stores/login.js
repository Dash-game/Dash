import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", ()=> {
  const loggedIn = ref(false)
  return {loggedIn}
});
