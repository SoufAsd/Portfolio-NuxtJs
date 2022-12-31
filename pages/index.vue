<template>
  <Warpper>
    <BackGround />
    <header class="header overflow-y-hidden">
      <div class="container">
        <AnimatedShape />
        <div class="index relative">
          <h3>Hi, my name is</h3>
          <h1><a href="index.html">Soufiane Assaadi</a></h1>
          <h2>I build things for the <span>web.</span></h2>
          <NuxtLayout name="navbar" />
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
  data: () => ({}),
  mounted() {},
  beforeRouteEnter(to, from, next) {
    if (from.path != "/") {
      const laptopModal = useLaptop();

      laptopModal.zoomOut(next);
    }else{
      next();
    }

  },
  beforeRouteLeave(to, from, next) {
    this.laptopModal.zoomIn(next);
  },
};
</script>
