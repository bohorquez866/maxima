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
import axios from 'axios'
import AboutBanner from '~/components/AboutBanner.vue'
export default {
  components: { AboutBanner },
  data() {
    return {
      url: 'wp-json/menus/v1/menus/Navbar',
      urlPerks: 'wp-json/acf/v3/options/options',
      urlHome: 'wp-json/acf/v3/pages',
      menu: null,
    }
  },
  computed: {
    urlPath() {
      return this.$store.getters.urlPath
    },
  },

  mounted() {
    this.getMenu()
    this.getPerks()
    this.getHomePage()
  },

  methods: {
    getMenu() {
      axios
        .get(`${this.urlPath}${this.url}`)
        .then((response) => {
          const finalData = response.data
          this.$store.commit('SET_MENU_ITEMS', finalData.items)
        })
        .catch((error) => error)
    },
    getPerks() {
      axios
        .get(`${this.urlPath}${this.urlPerks}`)
        .then((response) => {
          const finalData = response.data
          this.$store.commit('SET_PERKS_ITEMS', finalData.acf)
        })
        .catch((error) => error)
    },
    getHomePage() {
      axios
        .get(`${this.urlPath}${this.urlHome}`)
        .then((response) => {
          const finalData = response.data
          this.$store.commit('SET_HOME_ITEMS', finalData)
        })
        .catch((error) => error)
    },
  },
}
</script>
