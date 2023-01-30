<template lang="">
  <div class="col-lg-6 mt-4 d-flex align-items-stretch">
    <div class="info-box">
      <i class='bx bxs-phone'></i>
      <h3>Call Me</h3>
      <p>{{props.phone}}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(['phone'])
</script>
<style lang=""></style>
