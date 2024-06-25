import TheHeader from '../components/TheHeader.vue';
<template>
  <div>
    <TheHeader />

    <div>
      <slot />
    </div>

    <TheFooter />
  </div>
</template>
