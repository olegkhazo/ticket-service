import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
    }
  },
  css: [
    "@/assets/styles/main.scss",
  ],
  modules: [
    "@nuxtjs/style-resources", 
    "@nuxt/image"
  ],
})

