// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Souf's Portfolio",
      meta: [{ name: "description", content: "Soufiane assaadi." }],
    },
  },
  modules: ["@pinia/nuxt"],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
        includePaths: ['./assets/sass'], },
      },
    },
  },
  typescript: { strict: true },
  css: ['@/assets/sass/main.sass']
});
