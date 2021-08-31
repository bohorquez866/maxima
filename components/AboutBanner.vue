/* eslint-disable vue/no-v-html */
<template>
  <section class="about_banner banner" v-lazy-container="{ selector: 'img' }">
    <template v-if="about[3]"
      ><article class="banner_item">
        <div data-aos="fade-right">
          <h4>About Us</h4>
          <h1 class="title">{{ about[3].acf.about_banner_title }}</h1>
          <div v-html="about[3].acf.about_banner_text"></div>
        </div>
      </article>
      <img :data-src="about[3].acf.about_banner_img" alt="VBanner img" />
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
