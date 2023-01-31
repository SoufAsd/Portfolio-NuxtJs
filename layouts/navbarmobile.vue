<template>
  <div class="top-menu-mobile">
    <PieShape v-for="(navlink,index) in navlinks" :navlink="navlink" :key="index"></PieShape>
    <div class="menu" @click="toggle">
      <svg
        class="hamburger"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <g
          fill="none"
          stroke="#000"
          stroke-width="10.999"
          stroke-linecap="round"
        >
          <path d="M 55,26.000284 L 24.056276,25.999716" />
          <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
          <path d="M 45,73.999716 L 75.943724,74.000284" />
          <path d="M 75.943724,26.000284 L 45,25.999716" />
          <path d="M 24.056276,73.999716 L 55,74.000284" />
        </g>
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,reactive} from 'vue'

interface pie {
  pieclass: string
  position: string
  icon: string
  route: string
}

let navlinks = ref<pie[]>([]);

let portfolio = reactive<pie>({pieclass:'pie-shape-buttom',position:'portfolio-mobile',icon:"fa-id-card-clip",route:'portfolio'})
let resume = reactive<pie>({pieclass:'pie-shape-middle-top',position:'resume-mobile',icon:"fa-file",route:'resume'})
let about = reactive<pie>({pieclass:'pie-shape-middle-buttom',position:'about-mobile',icon:"fa-address-card",route:'about'})
let contact = reactive<pie>({pieclass:'pie-shape-top',position:'contact-mobile',icon:"fa-phone",route:'contact'})
navlinks.value.push(portfolio,resume,about,contact)

function toggle() {
  document.body.classList.toggle("active");
}
</script>
<style lang="scss">
@import "@/assets/sass/navbarmobile.sass";
</style>
