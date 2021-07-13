<!-- Please remove this file from your project -->
<template>
  <nav class="navbar">
    <nuxt-link to="/" class="logo">
      <img :src="optionsData.logo" alt="Logo" />
    </nuxt-link>
    <div class="burger-menu" @click="toggleNavbar">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="navbar__list" :class="{ 'mobile-active': menuMobile }">
      <article>
        <div class="close" @click="toggleNavbar">X</div>
        <div class="">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li v-for="item in nav" :key="item.ID" ref="identifier">
            <NuxtLink :to="item.title">{{ item.title }}</NuxtLink>
          </li>
        </div>
        <!--//* NAVBAR MOBILE FOOTER -->

        <section class="footer-navbar" v-if="optionsData">
          <h2>
            GET IN TOUCH
            <ul class="fixed-social-responsive">
              <li
                v-for="icon in optionsData.social_media_icons"
                :key="icon.ID"
                :class="`icon-${icon.type}`"
              >
                <a :href="icon.url"></a>
              </li>
            </ul>
          </h2>

          <div v-for="icon in optionsData.social_media_icons" :key="icon.ID">
            <a :href="icon.url" :class="`icon-${icon.type}`"></a>
          </div>

          <p>
            <a :href="`mailto: ${optionsData.contact_email}`">
              Email: {{ optionsData.contact_email }}
            </a>
          </p>

          <p>
            <a :href="`mailto: ${optionsData}`">
              telephone: {{ optionsData.contact_phone }}</a
            >
          </p>
        </section>
      </article>
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
  data() {
    return {
      menuMobile: false,
    }
  },
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
  methods: {
    toggleNavbar() {
      this.menuMobile = !this.menuMobile
    },
  },
}
</script>
