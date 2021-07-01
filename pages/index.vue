<template>
  <div>
    <Navbar :nav="menuDos" :social="optionsData.social_media_icons" />
    <Perks />
    <Comments />
    <Contact-component />
    <HomeAbout />

    {{ urlPath + url }}
    <br />
    {{ urlPath + urlPerks }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: 'wp-json/menus/v1/menus/Navbar',
      urlPerks: 'wp-json/acf/v3/options/options',
      urlHome: 'wp-json/acf/v3/pages',
      menu: null,
    }
  },
  computed: {
    menuDos() {
      return this.$store.getters.menu
    },
    optionsData() {
      return this.$store.getters.perks
    },
    homePageData() {
      return this.$store.getters.home
    },
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
          console.log(response.data)
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
          this.$store.commit('SET_HOME_ITEMS', finalData[3])
        })
        .catch((error) => error)
    },
  },
}
</script>
