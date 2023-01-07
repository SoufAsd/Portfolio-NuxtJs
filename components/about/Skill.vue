<template lang="">
  <div class="progress">
    <span class="skill">HTML <i class="val">95%</i></span>
    <div class="progress-bar-wrap">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="95"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    progress : Object
});
</script>
<style lang=""></style>
