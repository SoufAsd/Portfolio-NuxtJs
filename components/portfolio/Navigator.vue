<template lang="">
  <div class="row">
    <div class="col-lg-12 d-flex justify-content-center">
      <ul class="portfolio-flters">
        <li data-filter="*" class="filter-active" @click="clickFilter">All</li>
        <li data-filter=".filter-backend" @click="clickFilter">Backend</li>
        <li data-filter=".filter-frontend" @click="clickFilter">Frontend</li>
        <li data-filter=".filter-uiux" @click="clickFilter">Ui/Ux</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    isotope : Object
  },
  data() {
    return {};
  },
  updated(){
  },
  methods: {
    clickFilter(e) {
      this.$el.querySelector(".portfolio-flters>.filter-active").classList.remove("filter-active")
      e.target.classList.add("filter-active")
      this.isotope.arrange({
          filter: e.target.getAttribute('data-filter')
        });
    },
  },
};
</script>
<style lang=""></style>
