<template>
  <footer class="footer">
    <figure class="footer_logo">
      <img :src="footer.footer_logo" alt="" />
    </figure>

    <p>{{ footer.footer_text }}</p>
    <ul class="footer-social">
      <li v-for="icon in footer.social_media_icons" :key="icon.ID">
        <a :href="icon.url" :class="`icon-${icon.type}`"></a>
      </li>
    </ul>

    <ul class="footer-menu">
      <li v-for="item in nav" :key="item.ID" ref="identifier">
        <NuxtLink :to="item.title">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  computed: {
    footer() {
      return this.$store.getters.perks
    },
    nav() {
      return this.$store.getters.menu
    },
  },
}
</script>
