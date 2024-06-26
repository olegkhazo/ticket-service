<script setup>
import { API_URL } from "@/utils/constants";
import { useMovieGenreDataStore } from "@/stores/genreStore";
import { useSearchDataStore } from "@/stores/searchStore";

const { searchData } = storeToRefs(useSearchDataStore());
const { choosenMovieGenre } = storeToRefs(useMovieGenreDataStore());

const { data: allMovies, error } = await useFetch(API_URL + "/movies");
let movies = ref([]);

watchEffect(() => {
  if (allMovies.value) {
    const parsedMovies = JSON.parse(allMovies.value);
    movies.value = parsedMovies.data;
  }
});

const filteredMovies = computed(() => {
  let filtered = movies.value;

  if (choosenMovieGenre.value !== 6) {
    filtered = filtered.filter((movie) => movie.genre === choosenMovieGenre.value);
  }

  if (searchData.value) {
    const searchQuery = searchData.value.toLowerCase();
    filtered = filtered.filter((movie) => movie.name.toLowerCase().includes(searchQuery));
  }

  return filtered;
});
</script>

<template>
  <main>
    <div class="mains-header">
      <h1>Tickets for movies</h1>
      <!-- <TheSearchInput /> -->
    </div>
    <div class="main-content">
      <MoviePreview v-for="movie in filteredMovies" :key="movie.id" :movieData="movie" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

main {
  width: 68%;
  background-color: $gray-300;

  .mains-header {
    background-color: $gray-800;
    padding-left: 15px;

    h1 {
      color: $white;
    }
  }

  .main-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 990px) {
      justify-content: space-around;
    }
  }
}
</style>
