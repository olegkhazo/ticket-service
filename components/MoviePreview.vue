<script setup>
import { extractMoviesReleaseYear, extractMoviesAgeRestriction } from "@/utils";
import { useSingleMovieStore } from "@/stores/movieStore";

const { setNewSingleMovie } = useSingleMovieStore();

const props = defineProps({
  movieData: {
    type: Object,
    required: true,
  },
});

const additionalMovieInfo = props.movieData.additional;

const movieReleaseYear = extractMoviesReleaseYear(additionalMovieInfo);
const ageRestriction = extractMoviesAgeRestriction(additionalMovieInfo);
</script>

<template>
  <article @click="setNewSingleMovie(props.movieData)">
    <NuxtLink :to="'/movie-page/' + props.movieData.id">
      <NuxtImg :src="props.movieData.image" title="img" />
      <div class="peview-data">
        <span class="movie-name">{{ props.movieData.name }}</span>
        <ul>
          <li class="release">{{ movieReleaseYear }}</li>
          <li class="restriction">{{ ageRestriction }}</li>
        </ul>
      </div>
    </NuxtLink>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

article {
  width: 200px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: $gray-100;

  &:hover {
    background-color: $white;
  }

  a {
    width: inherit;

    img {
      width: inherit;
    }

    .peview-data {
      padding: 0 5px;

      .movie-name {
        display: block;
        text-align: center;
        font-weight: 600;
        height: 40px;
      }

      ul {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
      }
    }
  }
}
</style>
