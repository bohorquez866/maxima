<template>
  <section v-if="category" class="home_banner">
    <article v-for="data in category" :key="data.id">
      <span class="arrow">-></span>
      <div>
        <div>
          <h4>SERVICES</h4>
          <h2 class="title">{{ data.home_title }}</h2>
          <p>{{ data.home_text }}</p>
          <nuxt-link :to="data.slug">Read More</nuxt-link>
        </div>
      </div>
      <figure>
        <img :src="data.acf.home_image" alt="" />
      </figure>
    </article>
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
