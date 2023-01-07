<template lang="">
  <h3 class="resume-title">Sumary</h3>
  <div class="resume-item pb-0">
    <h4>{{Sumary.result[0].fullname}}</h4>
    <p>
      {{Sumary.result[0].summary}}
    </p>
  </div>
</template>
<script lang="ts">
export default {
  async setup(){
    const Sumary = ref();
    const { data : sumary, pending, error, refresh } = await useFetch('/api/query?col=Sumary');
    Sumary.value = sumary.value

    return {Sumary}
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/resume.sass";
</style>
