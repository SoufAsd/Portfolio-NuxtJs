<template>
  <Warpper>
    <header class="header header-buttom">
      <div class="container">
        <NuxtLayout name="navbar" />
      </div>
    </header>
    <section id="about" class="about section-show">
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
              Hello! My name is Soufiane and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2015 when I decided to try editing transaction animations taught
              me a lot about HTML & CSS and learning data structure gets me into
              web developement
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong>
                    <span id="birthday">5 - January - 1997</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Website:</strong>
                    <span> - </span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>
                    <span>(+212) 6 31 57 76 38</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>
                    <span>Agadir, MOROCCO</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                    <span id="age"> - </span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>
                    <span> Master </span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <span> soufiane.assaadi@gmail.com </span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ======= Skills  ======= -->
      <div class="skills container">
        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content">
          <div class="col-lg-6">
            <div class="progress">
              <span class="skill">HTML <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">SASS <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">VueJs <i class="val">70%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="progress">
              <span class="skill">PHP <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">TypeScript <i class="val">60%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Laravel <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Nuxtjs <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Warpper>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/about.sass";
</style>
<script lang="ts">
export default {
  mounted() {
    this.animateSkills();
  },
  methods: {
    animateSkills() {
      let skilsContent = document.getElementsByClassName("skills-content");
      if (skilsContent) {
        let progresses = [
          ...document.querySelectorAll<HTMLElement>(".progress-bar"),
        ];
        progresses.forEach((progress, item) => {
          progress.style.width = progress.getAttribute("aria-valuenow") + "%";
        });
      }
    },
  },
};
</script>
