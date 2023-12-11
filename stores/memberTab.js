import { defineStore } from "pinia";

export const useTabStore = defineStore("tab", ()=> {
  const selectedPage = ref('collectPage');

  return { selectedPage }

})