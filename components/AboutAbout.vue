/* eslint-disable vue/no-v-html */
<template>
  <section class="home-about page-info about_info">
    <template v-if="about[3]">
      <figure>
        <img :src="about[3].acf.about_info_img" alt="about picture" />
        <img
          class="responsive-service-img"
          :src="about[3].acf.about_info_img_responsive"
          alt="about picture"
        />
      </figure>
      <article data-aos="fade-right" class="home-about-info">
        <h4>About Us</h4>
        <h2 class="title">{{ about[3].acf.about_info_title }}</h2>
        <div v-html="about[3].acf.about_info_text" class=""></div>
        <nuxt-link to="contact" class="btn_general">Contact Us</nuxt-link>
      </article>
    </template>
  </section>
</template>

<script>
export default {
  computed: {
    about() {
      return this.$store.getters.home
    },
  },
}
</script>
