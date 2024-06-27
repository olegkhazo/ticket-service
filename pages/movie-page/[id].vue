<script setup>
import { useSingleMovieStore } from "@/stores/movieStore";

const { singleMovie } = storeToRefs(useSingleMovieStore());

function scrollToTopOfTheTableBody() {
  document.getElementById("sessions").scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="content-wrapper" v-if="singleMovie">
    <h1>{{ singleMovie.name }}</h1>
    <div class="single-movie-wrapper">
      <div class="main-info">
        <span>
          <NuxtImg :src="singleMovie.image" title="img" />
          <button @click="scrollToTopOfTheTableBody">Find tickets</button>
        </span>
        <div class="movie-params">
          <span v-html="singleMovie.additional"></span>
        </div>
      </div>
      <div class="movie-description">{{ singleMovie.description }}</div>
      <MovieSessions :movie-data="singleMovie" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.content-wrapper {
  display: flex;
  flex-direction: column;

  .main-info {
    display: flex;
    justify-content: space-between;

    img {
      width: 200px;
    }

    button {
      margin-top: 20px;
      background-color: green;
      border: none;
      border-radius: 5px;
      padding: 10px 63px;
      cursor: pointer;
      color: white;
      font-weight: 600;

      &:hover {
        opacity: 0.9;
      }
    }

    .movie-params {
      width: 700px;
    }
  }

  .movie-description {
    font-weight: 500;
    margin: 10px 0 50px 0;
  }
}
</style>
