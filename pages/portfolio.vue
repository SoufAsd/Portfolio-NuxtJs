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
<script>
export default {
  data(){
    return {
      isotope : {}
    }
  },
  mounted(){
    let list = this.$el.querySelector(".portfolio-container"),
      portfolioIsotope = new Isotope(list, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });
      this.isotope = portfolioIsotope;
  }
};
</script>
<style lang="scss">
@import '@/assets/sass/portfolio.sass';
</style>
