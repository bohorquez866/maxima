<template>
  <main>
    <Navbar />
    <HomeBanner keep-alive />
    <Perks />
    <HomeAbout />
    <homeService />
    <Comments />
    <Contact-component class="contact-index">
      <template v-slot:form>
        <FormHome />
      </template>
    </Contact-component>
    <Footer />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Maxima Limpieza | Home',
      meta: [
        { name: 'Title', content: 'Home' },
        { name: '', content: 'Home' },
      ],
    }
  },
  mounted() {
    console.log(this.category)
  },
  computed: {
    category() {
      return this.$store.getters.category
    },
  },
}
</script>
