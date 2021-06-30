<template>
  <navbar :nav="menuDos" />
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: 'wp-json/menus/v1/menus/Navbar',
      menu: null,
    }
  },
  computed: {
    menuDos() {
      return this.$store.getters.menu
    },
  },
  mounted() {
    this.getMenu()
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
  },
}
</script>
