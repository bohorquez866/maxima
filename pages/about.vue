<template>
  <main id="3">
    <navbar />
    <about-banner />
    <Perks />
    <AboutAbout />
    <Comments />
    <Footer />

  </main>
</template>




<script>
export default {

head(){
  return {
     title:  `${this.about ? this.about.yoast_head_json.og_title : 'Maxima Limpieza'} | ${this.about ? this.about.yoast_head_json.description : 'About'}`
  }
}
,

  computed: {
    about() {
      return this.$store.getters.yoastPages[3]
    },
  },
}
</script>
