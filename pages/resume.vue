<template lang="">
  <Warpper>
    <header class="header header-buttom">
      <div class="container">
        <NuxtLayout name="navbar" />
      </div>
    </header>
    <section id="resume" class="resume section-show">
      <div class="container">
        <div class="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <ResumeSummary></ResumeSummary>
            <h3 class="resume-title">Education</h3>
            <ResumeEducation></ResumeEducation>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Experience</h3>
            <ResumeExperience></ResumeExperience>
          </div>
        </div>
      </div>
    </section>
  </Warpper>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/resume.sass";
</style>
