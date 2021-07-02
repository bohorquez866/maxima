/* eslint-disable vue/no-v-html */
<template>
  <section>
    <template v-if="about[2]"
      ><article class="about_banner">
        <h1>{{ about[2].acf.about_banner_title }}</h1>
        <div v-html="about[2].acf.about_banner_text"></div>
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
