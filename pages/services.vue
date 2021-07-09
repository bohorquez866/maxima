<template>
  <main id="2">
    <navbar />

    <h1>SERVICEEEE</h1>
    <div v-html="servicesInfo"></div>

    <Footer />
  </main>
</template>

<script>
export default {
  computed: {
    servicesInfo() {
      return this.$store.getters.services
    },
  },
}
</script>
