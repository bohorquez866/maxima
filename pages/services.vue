<template>
  <main id="2">
    <navbar />
    <transition name="fade">
      <CategoryPosts
        :posts="commercialInfo"
        :banner="category[0]"
        v-if="visibleCommercial"
        class="commercial_services"
      />
    </transition>

    <transition name="fade">
      <CategoryPosts
        :posts="residentialInfo"
        :banner="category[1]"
        v-if="visibleResidential"
        class="residential_services"
      />
    </transition>
    <Footer />
  </main>
</template>

<script>
export default {
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
    seoTitle() {
      this.category[0].yoast_json.description

      this.$route.params.commercial == 'residential'
        ? this.category[0].yoast_json.description
        : this.category[1].yoast_json.description
    },
  },

  head() {
    return {
      title: this.checkSeoInfo,
    }
  },

  mounted() {
    console.log(this.category)
  },
  methods: {
    showResidential() {
      if (this.$route.params.commercial == 'residential') {
        this.$store.dispatch('toggleResidential', true)
        this.$store.dispatch('toggleCommercial', false)
      } else if (this.$route.params.commercial == 'commercial') {
        this.$store.dispatch('toggleCommercial', true)
        this.$store.dispatch('toggleResidential', false)
      }
    },
  },
  watch: {
    '$route.params.commercial'() {
      this.showResidential()
    },
    checkSeoInfo() {
      if (this.$route.params.commercial == 'residential') {
        this.category[0].yoast_json.description
      } else if (this.$route.params.commercial == 'residential') {
        this.category[1].yoast_json.description
      }
    },
  },
}
</script>
