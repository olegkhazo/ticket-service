<script setup>
import { API_URL } from "@/utils/constants";
import { convertTimeSessionsToArr } from "@/utils";
const props = defineProps({
  movieData: {
    type: Object,
    required: true,
  },
});

const id = props.movieData.id;
const allSessions = ref([]);
console.log(id);
const { data: sessions, error } = await useFetch(API_URL + "/movieShows");

watchEffect(() => {
  if (sessions.value) {
    const parsedSessions = JSON.parse(sessions.value);
    allSessions.value = parsedSessions.data[id];
  }
});
</script>

<template>
  <aside>
    <div id="sessions" class="sessions" v-for="date in allSessions" :key="date.showdate">
      <p>{{ date.showdate }}</p>
      <span v-for="time in convertTimeSessionsToArr(date.daytime)" :key="time">{{ time }}</span>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
aside {
  background-color: $gray-1000;
  color: $white;
  padding: 20px 30px;

  .sessions {
    span {
      display: inline-block;
      cursor: pointer;
      font-weight: 600;
      margin: 3px 5px;
      color: $white;
      background-color: $yellow;
      padding: 5px;
      border-radius: 5px;

      &:hover {
        color: $gray-100;
      }
    }
  }
}
</style>
