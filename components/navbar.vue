<!-- Please remove this file from your project -->
<template>
  <nav class="navbar">
    <nuxt-link to="/" class="logo"
      ><img :src="optionsData.logo" alt="Logo"
    /></nuxt-link>

    <ul class="navbar__list">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li v-for="item in nav" :key="item.ID" ref="identifier">
        <NuxtLink :to="item.title">{{ item.title }}</NuxtLink>
      </li>
    </ul>

    <ul class="fixed-social">
      <li>
        <a
          class="icon-phone"
          :href="`mailto: ${optionsData.contact_phone}`"
        ></a>
      </li>
      <li>
        <a class="icon-mail" :href="`mailto: ${optionsData.contact_email}`"></a>
      </li>
      <li v-for="icon in optionsData.social_media_icons" :key="icon.ID">
        <a :class="`icon-${icon.type}`" :href="icon.url"></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name
    },
    nav() {
      return this.$store.getters.menu
    },

    optionsData() {
      return this.$store.getters.perks
    },
  },
}
</script>
