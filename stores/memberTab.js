import { defineStore } from "pinia";

export const useTabStore = defineStore("tab", ()=> {
  const selectedPage = ref('listPage');

  return { selectedPage }

})