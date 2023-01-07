<template lang="">
  <div class="col-lg-4 col-md-6 portfolio-item" :class="filter">
    <div class="portfolio-wrap">
      <img
        :src="project.image"
        class="img-fluid"
        alt=""
      />
      <div class="portfolio-info">
        <h4>{{project.title}}</h4>
        <div class="display-block">
          <PortfolioProgrammingLang v-for="techno in project.technologies"
            :program="techno"
          ></PortfolioProgrammingLang>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props:{
    filter : String,
    project : Object,
  }
};
</script>
<style lang=""></style>
