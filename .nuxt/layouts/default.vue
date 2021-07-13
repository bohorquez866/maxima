<template>
  <div class="">
    <div class="preloader" v-once v-if="isLoading">
      <span>X</span>
    </div>
    <Nuxt keep-alive />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  beforeMount() {
    setTimeout(() => {
      this.handlePreloader()
    }, 2000)
  },
  methods: {
    handlePreloader() {
      this.isLoading = false
    },
  },
}
</script>
