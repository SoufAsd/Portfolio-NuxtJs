<template lang="">
  <Warpper>
    <NuxtLayout name="navbarmobile" />
    <header class="header header-buttom">
      <div class="container">
        <NuxtLayout name="navbar" />
      </div>
    </header>
    <section id="contact" class="contact section-show padding-mobile">
      <div class="container">
        <SectionTitle :pageTitle="`Contact`" :Subtittle="`Contact Me`"></SectionTitle>
        <div class="row mt-2">
            <ContactAddress :address="Contact.result[0].address"></ContactAddress>
            <ContactSocial :social="Contact.result[0]"></ContactSocial>
            <ContactEmail :email="Contact.result[0].email"></ContactEmail>
            <ContactPhone :phone="Contact.result[0].phone"></ContactPhone>
        </div>
        <ContactForm></ContactForm>
      </div>
    </section>
  </Warpper>
</template>
<script lang="ts">
export default {
  async setup() {
    const {
      data: Contact,
      pending,
      error,
      refresh,
    } = await useFetch("/api/query?col=Contact");

    return { Contact };
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/contact.sass"
</style>
