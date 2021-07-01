<!-- Please remove this file from your project -->
<template>
  <nav class="navbar">
    <ul class="navbar__List">
      <li v-for="item in nav" :key="item.ID">
        <NuxtLink :to="item.title">{{ item.title }}</NuxtLink>
      </li>
    </ul>

    <ul class="fixed-social">
      <li v-for="icon in social.social_media_icons" :key="icon.ID">
        <a :href="icon.url">{{ icon.type }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    nav() {
      return this.$store.getters.menu
    },
    social() {
      return this.$store.getters.perks
    },
  },
}
</script>
