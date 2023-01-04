<template lang="">
  <Warpper>
    <header class="header header-buttom">
      <div class="container">
        <NuxtLayout name="navbar" />
      </div>
    </header>
    <section id="contact" class="contact section-show">
      <div class="container">
        <SectionTitle :pageTitle="`Contact`" :Subtittle="`Contact Me`"></SectionTitle>
        <div class="row mt-2">
            <ContactAddress></ContactAddress>
            <ContactSocial></ContactSocial>
            <ContactEmail></ContactEmail>
            <ContactPhone></ContactPhone>
        </div>
        <ContactForm></ContactForm>
      </div>
    </section>
  </Warpper>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss">
@import "@/assets/sass/contact.sass"
</style>
