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
const allSeats = ref([]);
let showSeats = ref(false);

onMounted(async () => {
  try {
    const response = await $fetch(`${API_URL}/movieShows`);
    const parsedSessions = JSON.parse(response);
    allSessions.value = parsedSessions.data[id];
  } catch (error) {
    console.error(error);
  }
});

const timeCreds = ref([]);
async function checkFreePlaces(date, time) {
  timeCreds.value = [date, time];
  showSeats.value = false;
  try {
    const response = await $fetch(`${API_URL}/showPlaces?movie_id=${id}&daytime=${time}&showdate=${date}`);
    const parsedSeatsInfo = JSON.parse(response);
    allSeats.value = parsedSeatsInfo.data;
    showSeats.value = true;
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <aside>
    <div id="sessions" class="sessions" v-for="date in allSessions" :key="date.showdate">
      <p>
        {{ date.showdate }}
        <span
          v-for="time in convertTimeSessionsToArr(date.daytime)"
          :key="time"
          @click="checkFreePlaces(date.showdate, time)"
          >{{ time }}</span
        >
      </p>
    </div>
    <CinemaSeatsView v-if="showSeats" :all-seats="allSeats" :time-creds="timeCreds" />
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
