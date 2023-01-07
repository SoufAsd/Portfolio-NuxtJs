<template lang="">
  <div v-for="education in Educations.result" class="resume-item">
    <h4>{{education.title}}</h4>
    <h5>{{education.period}}</h5>
    <p><em>{{education.location}}</em></p>
  </div>
</template>
<script lang="ts" setup>
const Educations = ref();
const {
  data: education,
  pending,
  error,
  refresh,
} = await useFetch("/api/query?col=Education");
Educations.value = education.value;
</script>
<style lang=""></style>
