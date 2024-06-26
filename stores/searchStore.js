import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchDataStore = defineStore('search-data-store', () => {
  const searchData = ref(null);


  return { searchData };
});