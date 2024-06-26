import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSingleMovieStore = defineStore('single-movie-store', () => {
  const singleMovie = ref(null);

  const setNewSingleMovie = (movie) => {
    singleMovie.value = movie;
  };

  return { singleMovie, setNewSingleMovie };
});