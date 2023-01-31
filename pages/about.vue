<template>
  <Warpper>
    <NuxtLayout name="navbarmobile" />
    <header class="header header-buttom">
      <div class="container">
        <NuxtLayout name="navbar" />
      </div>
    </header>
    <section id="about" class="about section-show padding-mobile">
      <AboutMe :about="about"></AboutMe>
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
                  style="width:95%"
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
                  style="width:80%"
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
                  style="width:85%"
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
                  style="width:70%"
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
                  style="width:80%"
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
                  style="width:60%"
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
                  style="width:80%"
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
                  style="width:85%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </Warpper>
</template>
<style lang="scss">
@import "@/assets/sass/about.sass";
</style>
<script lang="ts">
export default {
  async setup() {
    const {
      data: about,
      pending,
      error,
      refresh,
    } = await useFetch("/api/query?col=About");

    return { about };
  },
  // updated() {
  //   this.animateSkills();
  // },
  // mounted() {
  //   this.animateSkills();
  // },
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
