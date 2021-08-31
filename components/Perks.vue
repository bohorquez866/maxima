<template>
  <section>
    <ul class="perks" v-lazy-container="{ selector: 'img' }">
      <li v-for="(perk, index) in perks.perk_item" :key="perk.id" class="perk">
        <figure :class="`perk-figure-${index + 1}`">
          <img :data-src="perk.perk_item_img" alt="" class="perk_brown" />
          <img :data-src="perk.perk_item_img_color" alt="" class="perk_color" />
        </figure>

        <div data-aos="fade-up" class="perk_info">
          <h3>{{ perk.perk_item_title }}</h3>
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
