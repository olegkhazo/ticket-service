<script setup>
import { useSearchDataStore } from "@/stores/searchStore";

const { searchData } = storeToRefs(useSearchDataStore());
</script>

<template>
  <input type="search" placeholder="Searching by name" v-model="searchData" />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

input {
  width: 260px;
  border-radius: 5px;
  padding: 5px 5px 5px 5px;
  border: 1px solid $gray-800;

  @media (max-width: 1080px) {
    width: 90%;
  }
}
</style>
