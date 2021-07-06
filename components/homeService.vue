<template>
  <section>
    <article v-for="data in category" :key="data.ID">
      <h4>SERVICES</h4>
      <h2 class="title">{{ data.service_banner_title }}</h2>

      <ul>
        <li v-for="data in category" :key="data.ID">
          {{ data.service_list_item }}
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.getters.category
    },
  },
}
</script>
