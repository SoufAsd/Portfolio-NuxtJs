<template lang="">
  <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
    <div class="info-box">
      <i class='bx bxs-envelope'></i>
      <h3>Email Me</h3>
      <p>{{props.email}}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(['email'])
</script>
<style lang=""></style>
