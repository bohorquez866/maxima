<template>
  <section class="comments">
    <article v-for="(comment, index) in comments.comment_content" :key="index">
      <img :src="comment.client_img" alt="" />
      <div>{{ comment.client_text }}</div>
      <strong>{{ comment.client_name }}</strong>
    </article>
  </section>
</template>

<script>
export default {
  computed: {
    comments() {
      return this.$store.getters.perks
    },
  },
}
</script>
