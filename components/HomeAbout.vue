<template>
  <section class="home-about">
    <template v-if="home.acf">
      <figure>
        <img :src="home.acf.home_about_img" alt="" />
      </figure>
      <article class="home-about-info">
        <h4>About Us</h4>
        <h2>{{ home.acf.home_about_title }}</h2>
        <div v-html="home.acf.home_about_text"></div>
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
