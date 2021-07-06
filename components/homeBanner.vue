<template>
  <section v-if="category" class="home_banner">
    <article v-for="data in category" :key="data.id">
      <div>
        <h4>SERVICES</h4>
        <h1>{{ data.home_title }}</h1>
        <p>{{ data.home_text }}</p>
        <nuxt-link :to="data.slug">Read More</nuxt-link>
      </div>

      <img :src="data.acf.home_image" alt="" />
    </article>
    <figure>
      <img src="" alt="" />
    </figure>
  </section>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.category
    },
  },
}
</script>
