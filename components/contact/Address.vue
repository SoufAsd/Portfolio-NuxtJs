<template lang="">
    <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
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