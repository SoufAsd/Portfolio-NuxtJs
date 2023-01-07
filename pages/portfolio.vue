<template lang="">
  <Warpper>
    <header class="header header-buttom">
      <div class="container">
        <NuxtLayout name="navbar" />
      </div>
    </header>
    <section id="portfolio" class="portfolio section-show">
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>
        <PortfolioNavigator :isotope="isotope"></PortfolioNavigator>
        <div class="row portfolio-container">
            <PortfolioProject v-for="project in projects.result" :filter="project.field" :project="project"></PortfolioProject>
        </div>
      </div>
    </section>
  </Warpper>
</template>
<script lang="js">

export default {
  async setup(){
    const works = ref();
    const { data : projects, pending, error, refresh } = await useFetch('/api/query?col=Projects');

    return {projects};
  },
  data() {
    return {
      isotope: {},
    }
  },
  async mounted() {
    let list = this.$el.querySelector(".portfolio-container"),
      mixitup = await import("mixitup").then((m) => m.default || m),
      mixer = mixitup(list, {
        selectors: {
          target: '.portfolio-item'
        },
        animation: {
          duration: 300
        }
      });
    this.isotope = mixer;
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/portfolio.sass";
</style>
