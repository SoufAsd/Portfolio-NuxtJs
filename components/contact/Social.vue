<template lang="">
  <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
    <div class="info-box">
      <i class='bx bxs-share-alt'></i>
      <h3>Social Profiles</h3>
      <div class="social-links">
        <a :href="props.twitter" class="twitter"><i class="fa-brands fa-twitter"></i></a>
        <a :href="props.facebook" class="facebook"><i class="fa-brands fa-facebook"></i></a>
        <a :href="props.instagram" class="instagram"><i class="fa-brands fa-instagram"></i></a>
        <a :href="props.linkedin" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(['socials'])
</script>
<style lang=""></style>
