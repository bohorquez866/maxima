<template>
  <section class="home-about page-info">
    <template v-if="home[4]">
      <figure v-lazy-container="{ selector: 'img' }">
        <img :data-src="home[4].acf.home_about_img" alt="" />
        <img
          :data-src="home[4].acf.home_about_img_responsive"
          class="responsive-service-img"
          alt=""
        />
      </figure>
      <article data-aos="fade-left" class="home-about-info">
        <h4>About Us</h4>
        <h2 class="title">{{ home[4].acf.home_about_title }}</h2>
        <div v-html="home[4].acf.home_about_text"></div>
        <nuxt-link to="about" class="btn_general">Read More</nuxt-link>
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
