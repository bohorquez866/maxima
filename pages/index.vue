<template>
  <navbar :nav="$store.state.menu" />
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

  mounted() {
    this.getMenu()
  },
  methods: {
    getMenu() {
      axios
        .get(`http://localhost/maxima-limpieza/${this.url}`)
        .then((response) => {
          const slicedResponse = response.data.slice(12)
          const finalData = JSON.parse(slicedResponse)
          this.$store.state.menu = finalData.items
        })
        .catch((error) => error)
    },
  },
}
</script>
