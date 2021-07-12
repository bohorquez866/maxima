<template>
  <div>
    <!-- Banner -->
    <section class="service_banner" v-if="banner">
      <article>
        <div>
          <h4>Services</h4>
          <h1 class="title">{{ banner.service_list_title }}</h1>
          <p>{{ banner.service_banner_text }}</p>
        </div>
      </article>
      <figure>
        <p
          class="toggle-service"
          @click="showResidential"
          v-if="visibleCommercial2"
        >
          <span>Commercial Cleaning</span>
        </p>

        <p
          class="toggle-service"
          @click="showResidential"
          v-if="visibleResidential2"
        >
          <span>House Cleaning</span>
        </p>
        <img :src="banner.acf.service_banner_img" alt="" />
      </figure>
    </section>

    <!-- Posts -->
    <section v-if="posts">
      <article
        class="posts"
        :class="`posts-${index + 1}`"
        v-for="(array, index) in posts"
        :key="index"
      >
        <div class="posts_item" v-for="post in array" :key="post.ID">
          <img
            :src="post.acf.image_mobile_service"
            class="post_img--mobile"
            alt=""
          />
          <img class="desktop-img" :src="post.acf.img_post" alt="" />
          <article>
            <h2>{{ post.title.rendered }}</h2>
            <div v-html="post.content.rendered"></div>
            <nuxt-link to="contact" class="btn_general">
              Adquire Service
            </nuxt-link>

            <nuxt-link class="read-more" to="/about">Read More</nuxt-link>
          </article>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibleCommercial2: true,
      visibleResidential2: null,
    }
  },
  props: {
    posts: Array,
    banner: Object,
  },

  methods: {
    toggleServBanner() {
      this.$emit(
        'toggle-banner',
        this.visibleResidential2,
        this.visibleCommercial2
      )
    },
    showResidential() {
      this.toggleServBanner()
      if (this.visibleCommercial2) {
        this.visibleResidential2 = true
        this.visibleCommercial2 = false
      } else if (this.visibleResidential2) {
        this.visibleCommercial2 = true
        this.visibleResidential2 = false
      }
    },
  },
}
</script>
