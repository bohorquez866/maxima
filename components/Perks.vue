<template>
  <section>
    <ul class="perks">
      <li v-for="perk in perks.perk_item" :key="perk.id">
        <img :src="perk.perk_item_img" alt="" />
        <img :src="perk.perk_item_img_color" alt="" />

        <h2>{{ perk.perk_item_title }}</h2>
        <p>{{ perk.perk_item_text }}</p>
      </li>
    </ul>

    {{ perks }}
  </section>
</template>

<script>
export default {
  computed: {
    perks() {
      return this.$store.getters.perks
    },
  },
}
</script>
