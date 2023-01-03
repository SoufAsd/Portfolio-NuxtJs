<template lang="">
  <div class="col-lg-4 col-md-6 portfolio-item" :class="filter">
    <div class="portfolio-wrap">
      <img
        src="@/assets/img/portfolio/genshin-helper.png"
        class="img-fluid"
        alt=""
      />
      <div class="portfolio-info">
        <h4>App 1</h4>
        <div class="display-block">
          <PortfolioProgrammingLang
            :program="`nuxtjs`"
          ></PortfolioProgrammingLang>
          <PortfolioProgrammingLang
            :program="`expressjs`"
          ></PortfolioProgrammingLang>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props:{
    filter : String
  }
};
</script>
<style lang=""></style>
