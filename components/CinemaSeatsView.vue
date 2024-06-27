<script setup>
import { defineProps } from "vue";

const props = defineProps({
  allSeats: {
    type: Array,
    required: true,
  },
});

function flattenSeats(seatsArray) {
  return seatsArray.flatMap((row) => row[1]);
}
</script>

<template>
  <div class="cinema">
    <span
      v-for="seatInfo in flattenSeats(allSeats)"
      :key="seatInfo.seat"
      class="chair"
      :class="{ free: seatInfo.is_free }"
    >
      {{ seatInfo.seat }}
    </span>
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
