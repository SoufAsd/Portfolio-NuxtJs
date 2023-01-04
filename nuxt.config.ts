// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Souf's Portfolio",
      meta: [{ name: "description", content: "Soufiane assaadi." }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i",
        },
      ],
      script:[
        {src: "https://kit.fontawesome.com/a29c6a605e.js", crossorigin: "anonymous"},
        {src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js", crossorigin: "anonymous"},
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  modules: ["@pinia/nuxt"],
  // alias: {
  //   pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  // },
  // plugins: [
  //   { src: '~/plugins/mixitup.js', mode: 'client' }
  // ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ["./assets/sass"],
        },
      },
    },
  },
  typescript: { strict: true},
  css: [
    "@/assets/sass/main.sass",
  ],
});
