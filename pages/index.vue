<template>
  <div>
    <Navbar :nav="menuDos" :social="optionsData.social_media_icons" />
    <Perks :perks="optionsData.perk_item" />
    <Comments :comments="optionsData.comment_content" />
    <Contact-component :contact="optionsData" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: 'wp-json/menus/v1/menus/Navbar',
      urlPerks: 'wp-json/acf/v3/options/options',
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
  },
  mounted() {
    this.getMenu()
    this.getPerks()
  },

  methods: {
    getMenu() {
      axios
        .get(`${this.$store.state.urlPath}maxima-limpieza/${this.url}`)
        .then((response) => {
          const slicedResponse = response.data.slice(12)
          const finalData = JSON.parse(slicedResponse)
          this.$store.commit('SET_MENU_ITEMS', finalData.items)
        })
        .catch((error) => error)
    },
    getPerks() {
      axios
        .get(`${this.$store.state.urlPath}maxima-limpieza/${this.urlPerks}`)
        .then((response) => {
          const slicedResponse = response.data.slice(12)
          const finalData = JSON.parse(slicedResponse)
          this.$store.commit('SET_PERKS_ITEMS', finalData.acf)
        })
        .catch((error) => error)
    },
  },
}
</script>
