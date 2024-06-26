<script setup>
import { MOVIE_GENRES } from "@/utils/constants";
import { useMovieGenreDataStore } from "@/stores/genreStore";

const { chooseMovieGenre } = useMovieGenreDataStore();
const { choosenMovieGenre } = storeToRefs(useMovieGenreDataStore());
</script>

<template>
  <aside>
    <div class="aside-header">
      <h2>GENRES</h2>
    </div>
    <div class="genres-container">
      <span
        v-for="(genre, index) in MOVIE_GENRES"
        :key="index"
        @click="chooseMovieGenre(index)"
        :class="{ active: choosenMovieGenre === index }"
      >
        {{ genre }}
      </span>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

aside {
  width: 30%;
  text-wrap: wrap;
  background-color: $gray-300;

  .aside-header {
    padding-left: 15px;
    background-color: $purple;

    h2 {
      color: $white;
    }
  }

  .genres-container {
    span {
      display: inline-block;
      cursor: pointer;
      margin: 3px;
      color: $white;
      background-color: $gray-1000;
      padding: 5px;
      border-radius: 5px;

      &:hover {
        color: $gray-100;
      }

      &.active {
        background-color: green;
      }
    }
  }
}
</style>
