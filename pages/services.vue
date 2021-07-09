<template>
  <main id="2">
    <navbar />
    <CategoryPosts
      :posts="commercialInfo"
      :banner="category[0]"
      v-if="visibleCommercial"
    />

    <CategoryPosts
      :posts="residentialInfo"
      :banner="category[1]"
      v-if="visibleResidential"
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
    showResidential() {
      this.visibleResidential = true
      this.visibleCommercial = false
    },
  },
}
</script>
