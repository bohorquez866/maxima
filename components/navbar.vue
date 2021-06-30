<!-- Please remove this file from your project -->
<template>
  <nav class="navbar">
    <ul class="navbar__List">
      <li v-for="item in nav" :key="item.ID">
        <NuxtLink :to="item.title">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['nav'],
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
