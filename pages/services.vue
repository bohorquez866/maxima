<template>
  <main id="2">
    <navbar />

    <h1>SERVICEEEE</h1>
    {{}}
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
