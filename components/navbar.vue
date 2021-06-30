<!-- Please remove this file from your project -->
<template>
  <nav class="navbar">
    <ul class="navbar__List">
      <li v-for="item in nav" :key="item.ID">
        <NuxtLink :to="item.title">{{ item.title }}</NuxtLink>
      </li>
    </ul>

    <ul class="fixed-social">
      <li v-for="icon in social" :key="icon.ID">
        <a :href="icon.url">{{ icon.type }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['nav', 'social'],
  data() {
    return {}
  },
}
</script>
