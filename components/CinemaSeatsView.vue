<script setup>
import { defineProps } from "vue";
import { useSingleMovieStore } from "@/stores/movieStore";

const { singleMovie } = storeToRefs(useSingleMovieStore());
const props = defineProps({
  allSeats: {
    type: Array,
    required: true,
  },
  timeCreds: {
    type: Array,
    required: true,
  },
});

const bookingStatus = ref(false);
const bookingCreds = ref({});

function flattenSeats(seatsArray) {
  return seatsArray.flatMap((row) => row[1]);
}

async function bookPlace(seat, row) {
  const payload = {
    movie_id: singleMovie.value.id,
    row: row,
    seat: seat,
    showdate: props.timeCreds[0],
    daytime: props.timeCreds[1],
  };

  try {
    const response = await $fetch(`${API_URL}/bookPlace`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response && response.success) {
      bookingStatus.value = true;
      bookingCreds.value = response.data;
    } else {
      console.error("Booking failed:", response);
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="cinema">
    <span
      v-for="(seatInfo, row) in flattenSeats(allSeats)"
      :key="seatInfo.seat"
      class="chair"
      :class="{ free: seatInfo.is_free }"
      @click="bookPlace(seatInfo.seat, row)"
    >
      {{ seatInfo.seat }}
    </span>
  </div>
  <div v-if="bookingStatus">
    <p>We will go to watch the movie!</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.cinema {
  span {
    color: white;
    padding: 2px;
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 2px;
  }
  .chair {
    background-color: $red;
  }
  .free {
    background-color: $green;
  }
}
</style>
