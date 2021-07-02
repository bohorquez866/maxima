<template>
  <section>
    <ul class="perks">
      <li v-for="perk in perks.perk_item" :key="perk.id" class="perk">
        <figure>
          <img :src="perk.perk_item_img" alt="" />
        </figure>
        <!-- <img :src="perk.perk_item_img_color" alt="" /> -->
        <div class="perk_info">
          <h2>{{ perk.perk_item_title }}</h2>
          <p>{{ perk.perk_item_text }}</p>
        </div>
      </li>
    </ul>
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
