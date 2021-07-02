/* eslint-disable vue/no-v-html */
<template>
  <section class="about_info">
    <template v-if="about[2]">
      <figure>
        <img :src="about[2].acf.about_info_img" alt="" />
      </figure>
      <article class="home-about-info">
        <h4>About Us</h4>
        <h2>{{ about[2].acf.about_info_title }}</h2>
        <div v-html="about[2].acf.about_info_text"></div>
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
