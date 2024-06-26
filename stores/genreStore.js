import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMovieGenreDataStore = defineStore('genre-data', () => {
  const choosenMovieGenre = ref(6);
  
  const chooseMovieGenre = (genreIndex) => {
    choosenMovieGenre.value = genreIndex;
  };

  return { choosenMovieGenre, chooseMovieGenre };
});