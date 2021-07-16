<template>
  <main id="2">
    <navbar />

    <CategoryPosts
      :posts="commercialInfo"
      :banner="category[0]"
      v-if="visibleCommercial"
      class="commercial_services"
      @toggle-banner="showCommercial"
    />

    <CategoryPosts
      :posts="residentialInfo"
      :banner="category[1]"
      v-if="visibleResidential"
      class="residential_services"
      @toggle-banner="showResidential"
    />
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      visibleCommercial: true,
      visibleResidential: false,
    }
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
  },
  methods: {
    showResidential(commercialChild, ResidentialChild) {
      this.visibleResidential = ResidentialChild
      this.visibleCommercial = commercialChild
    },
    showCommercial(commercialChild, ResidentialChild) {
      this.visibleResidential = ResidentialChild
      this.visibleCommercial = commercialChild
    },
  },
}
</script>
