<template>
  <div class="">
    <figure class="preloader" v-once v-if="isLoading">
      <div>
        <span class="blob-1"></span>
        <span class="blob-2"></span>
      </div>
    </figure>
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
  mounted() {
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
