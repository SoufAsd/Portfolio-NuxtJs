<template lang="">
  <div @click="CloseMenu" class="pie" :class="navlink.navlink.pieclass">
    <div class="pie-color">
      <NuxtLink class="nav-link" :to="navlink.navlink.route">
      <div :class="navlink.navlink.position">
        <i class="fa-solid" :class="navlink.navlink.icon"></i>
      </div>
    </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface pie {
  pieclass: string
  position: string
  icon: string
}

const navlink = defineProps(["navlink"])

const CloseMenu = () => {
  document.body.classList.remove("active");
}

</script>
<style lang=""></style>
