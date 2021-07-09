<template>
  <div>
    <section class="service_banner" v-if="banner">
      <h1 class="title">{{ banner.service_list_title }}</h1>
      <p>{{ banner.service_banner_text }}</p>
      <nuxt-link to="about" class="btn_general">Read More </nuxt-link>
    </section>
    <section v-if="posts">
      <article class="posts" v-for="(array, index) in posts" :key="index">
        <div class="posts_item" v-for="post in array" :key="post.ID">
          <img
            :src="post.acf.image_mobile_service"
            class="post_img--mobile"
            alt=""
          />
          <img :src="post.acf.img_post" alt="" />

          <h2>{{ post.title.rendered }}</h2>
          <div v-html="post.content.rendered"></div>
          <nuxt-link to="contact" class="btn_general">
            Adquire Service
          </nuxt-link>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    posts: Array,
    banner: Array,
  },
  watch: {
    posts() {
      console.log(this.posts, 'post')
    },
  },
}
</script>
