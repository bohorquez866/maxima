<template>
  <div>
    <!-- Banner -->
    <transition name="fade">
      <section class="service_banner" v-if="banner">
        <article>
          <div data-aos="fade-right">
            <h4>Services</h4>
            <h1 class="title">{{ banner.service_list_title }}</h1>
            <p>{{ banner.service_banner_text }}</p>
          </div>
        </article>
        <figure v-lazy-container="{ selector: 'img' }">
          <p
            class="toggle-service"
            @click="showResidential"
            v-if="visibleCommercial"
          >
            <span class="text-house">House Cleaning</span>
            <strong class="icon-arrow2"></strong>
          </p>

          <p
            class="toggle-service"
            @click="showResidential"
            v-if="visibleResidential"
          >
            <strong class="icon-arrow2"></strong>
            <span>Commercial Cleaning</span>
          </p>

          <img :data-src="banner.acf.service_banner_img" alt="random image" />
        </figure>
      </section>
    </transition>

    <!-- Posts -->
    <section v-if="posts">
      <article
        class="posts"
        :class="`posts-${index + 1}`"
        v-for="(array, index) in posts"
        :key="index"
      >
        <div class="posts_item" v-for="post in array" :key="post.ID" v-lazy-container="{ selector: 'img' }">
          <img
            class="post_img--mobile"
            :data-src="post.acf.image_mobile_service"
            alt="picture"
          />

          <img
            class="desktop-img"
            :data-src="post.acf.img_post"
            alt="picture"
          />

          <article data-aos="fade-up">
            <h2 v-html="post.title.rendered"></h2>
            <div v-html="post.content.rendered"></div>

            <nuxtLink to="/contact" class="btn_general">
              Acquire Service
            </nuxtLink>

            <button @click="showModal(post)" class="read-more">
              Read More
            </button>
          </article>
        </div>
      </article>

      <!-- //* MODAL -->
      <transition name="fade">
        <section
          class="service_modal"
          :class="{ active: modalShown }"
          v-if="modalShown"
        >
          <div v-if="selectedItem" v-lazy-container="{ selector: 'img' }">
            <span class="close-modal icon-cross" @click="closeModal"></span>

            <img
              class="desktop-img"
              :data-src="selectedItem.acf.img_post"
              alt=""
            />
            <img
              :data-src="selectedItem.acf.img_post_mobile_service"
              class="post_img--mobile"
              alt="picture"
            />
            <article>
              <h3 v-html="selectedItem.title.rendered"></h3>
              <div v-html="selectedItem.content.rendered"></div>
              <nuxt-link to="contact" class="btn_general">
                Get In Touch
              </nuxt-link>
            </article>
          </div>
        </section>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalShown: false,
      selectedItem: {},
    }
  },
  props: {
    posts: Array,
    banner: Object,
  },
  computed: {
    visibleCommercial() {
      return this.$store.getters.visibleCommercial
    },
    visibleResidential() {
      return this.$store.getters.visibleResidential
    },
  },
  methods: {
    showModal(postObject) {
      this.selectedItem = postObject
      this.modalShown = true
      console.log(this.selectedItem)
    },
    closeModal() {
      this.modalShown = false
    },
    showResidential() {
      if (this.visibleCommercial) {
        this.$router.push('/services/residential')
        // this.visibleResidential2 = true
        // this.visibleCommercial2 = false
      } else if (this.visibleResidential) {
        this.$router.push('/services/commercial')
        // this.visibleCommercial2 = true
        // this.visibleResidential2 = false
      }
    },
  },
}
</script>
