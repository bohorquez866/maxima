<template>
  <section class="comments">
    <article v-for="(comment, index) in comments" :key="index">
      <img :src="comment.client_img" alt="" />
      <div>{{ comment.client_text }}</div>
      <strong>{{ comment.client_name }}</strong>
    </article>
  </section>
</template>

<script>
export default {
  props: ['comments'],
  data() {
    return {}
  },
  methods: {},
}
</script>
