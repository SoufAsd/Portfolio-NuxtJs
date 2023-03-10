// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      title: "Souf's Portfolio",
      meta: [{ name: "description", content: "Soufiane assaadi." }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
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
