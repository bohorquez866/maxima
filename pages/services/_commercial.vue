<template>
  <main id="2">
    <navbar />

    <CategoryPosts
      :posts="commercialInfo"
      :banner="category[0]"
      v-if="visibleCommercial"
      class="commercial_services"
    />

    <CategoryPosts
      :posts="residentialInfo"
      :banner="category[1]"
      v-if="visibleResidential"
      class="residential_services"
    />
    <Footer />
  </main>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route, 'gasdasd')
  },
  computed: {
    commercialInfo() {
      return this.$store.getters.commercial
    },
    residentialInfo() {
      return this.$store.getters.residential
    },
    category() {
      return this.$store.getters.category
    },
    visibleCommercial() {
      return this.$store.getters.visibleCommercial
    },
    visibleResidential() {
      return this.$store.getters.visibleResidential
    },
  },
}
</script>
