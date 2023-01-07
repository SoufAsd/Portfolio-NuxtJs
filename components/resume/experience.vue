<template lang="">
  <div v-for="experience in Experiences.result" class="resume-item">
    <h4>{{experience.title}}</h4>
    <h5>{{experience.period}}</h5>
    <p><em>{{experience.location}}</em></p>
    <ul v-for="mission in experience.missions">
      <li>{{mission}}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const Experiences = ref();
const {
  data: experience,
  pending,
  error,
  refresh,
} = await useFetch("/api/query?col=Experience");
Experiences.value = experience.value;
</script>
<style lang="scss" scoped>
@import "@/assets/sass/resume.sass";
</style>
