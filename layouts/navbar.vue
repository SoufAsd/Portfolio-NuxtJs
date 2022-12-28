<template>
  <nav class="navbar">
    <ul>
      <li>
        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink class="nav-link" to="/about"
          >About</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="nav-link" to="/resume"
          >Resume</NuxtLink
        >
      </li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/navbar.sass";

</style>
<script lang="ts">
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("e")
    // this.checkRoute();
  },
  methods: {
    checkRoute() {
      let header = document.querySelector("header"),
        section = document.querySelector("section");
      if (this.$route.name == `index`) {
        header!.classList.remove("header-buttom");
      } else {
        header!.classList.add("header-buttom");
        section?.classList.add("section-show");
      }
    },
  },
};
</script>
