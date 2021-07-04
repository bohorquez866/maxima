/* eslint-disable vue/no-v-html */
<template>
  <section class="about_banner banner">
    <template v-if="about[2]"
      ><article class="banner_item">
        <div>
          <h4>About Us</h4>
          <h1 class="title">{{ about[2].acf.about_banner_title }}</h1>
          <div v-html="about[2].acf.about_banner_text"></div>
        </div>
      </article>
      <img :src="about[2].acf.about_banner_img" alt="VBanner img" />
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
