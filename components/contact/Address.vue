<template lang="">
    <div class="col-lg-6 d-flex align-items-stretch">
    <div class="info-box">
      <i class='bx bxs-map'></i>
      <h3>My Address</h3>
      <p>{{props.address}}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(['address'])
</script>
<style lang="">
    
</style>