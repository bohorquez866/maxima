<template>
  <main id="4" class="contact-page">
    <navbar />

    <ContactComponent>
      <template v-slot:form>
        <FormContact />
      </template>
    </ContactComponent>
    <Footer />
  </main>
</template>



<script>
export default {

head(){
  return {
     title:  `${this.contact ? this.contact.yoast_head_json.og_title : 'Maxima Limpieza'} | ${this.contact ? this.contact.yoast_head_json.description : 'contact'}`
  }
}
,

  computed: {
    contact() {
      return this.$store.getters.yoastPages[1]
    },
  },
}
</script>