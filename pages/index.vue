<template>
  <Warpper>
    <BackGround />
    <header class="header overflow-y-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="index relative" :class="{ none: isZoomed }">
              <h3>Hi, my name is</h3>
              <h1><a href="index.html">Soufiane Assaadi</a></h1>
              <h2>I build things for the <span>web.</span></h2>
              <NuxtLayout name="navbar" />
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch">
            <AnimatedShape />
          </div>
        </div>
      </div>
    </header>
    <NuxtLayout name="socials" />
  </Warpper>
</template>
<script lang="ts">
import { useLaptop } from "~/stores/laptop";

export default {
  setup() {
    const laptopModal = useLaptop();

    return { laptopModal };
  },
  data: () => ({
    isZoomed: false,
  }),
  mounted() {},
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.laptopModal.zoomIn(next);
    this.$el.querySelector(".laptop").classList.add("marginauto");
    this.isZoomed = !this.isZoomed;
  },
};
</script>
