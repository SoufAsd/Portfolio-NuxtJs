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
          <PortfolioProject :filter="`filter-backend`"></PortfolioProject>
          <PortfolioProject :filter="`filter-frontend`"></PortfolioProject>
        </div>
      </div>
    </section>
  </Warpper>
</template>
<script lang="js">

export default {
  data() {
    return {
      isotope: {}
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
