<template lang="">
  <div class="about-me container">
    <div class="section-title">
      <h2>About</h2>
      <p>Learn more about me</p>
    </div>
    <div class="row">
      <div class="col-lg-4" data-aos="fade-right">
        <img src="~/assets/img/avatar.png" class="img-fluid" alt="" />
      </div>
      <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>SOFTWARE ENGINEER</h3>
        <p class="fst-italic">
          Hello! My name is Soufiane and I enjoy creating things that live on
          the internet. My interest in web development started back in 2015 when
          I decided to try editing transaction animations taught me a lot about
          HTML & CSS and learning data structure gets me into web developement
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li>
                <i class="bi bi-chevron-right"></i>
                <strong>Birthday:</strong>
                <span id="birthday">{{aboutme.result[0].birthday}}</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i>
                <strong>Website:</strong>
                <span>{{aboutme.result[0].website}}</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>
                <span>{{aboutme.result[0].phone}}</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i> <strong>City:</strong>
                <span>{{aboutme.result[0].city}}</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li>
                <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                <span id="age">{{aboutme.result[0].age}}</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>
                <span>{{aboutme.result[0].degree}}</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i> <strong>Email:</strong>
                <span>{{aboutme.result[0].email}}</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i>
                <strong>Freelance:</strong>
                <span>{{aboutme.result[0].freelance}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
let aboutme = ref()
const props = defineProps({
  about : {} as any
})

aboutme.value = props.about
</script>
<style lang=""></style>
