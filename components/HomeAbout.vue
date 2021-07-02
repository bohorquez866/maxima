<template>
  <section class="home-about">
    <template v-if="home[3]">
      <figure>
        <img :src="home[3].acf.home_about_img" alt="" />
      </figure>
      <article class="home-about-info">
        <h4>About Us</h4>
        <h2>{{ home[3].acf.home_about_title }}</h2>
        <div v-html="home[3].acf.home_about_text"></div>
      </article>
    </template>
  </section>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.getters.home
    },
  },
}
</script>
