/* eslint-disable vue/no-v-html */
<template>
  <section class="home-about page-info about_info">
    <template v-if="about[2]">
      <figure>
        <img :src="about[2].acf.about_info_img" alt="" />
      </figure>
      <article class="home-about-info">
        <h4>About Us</h4>
        <h2 class="title">{{ about[2].acf.about_info_title }}</h2>
        <div v-html="about[2].acf.about_info_text" class=""></div>
        <nuxt-link to="contact" class="btn_general">Read More</nuxt-link>
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
