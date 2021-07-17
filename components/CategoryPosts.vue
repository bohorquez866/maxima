<template>
  <div>
    <!-- Banner -->
    <transition name="fade">
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
            <span>House Cleaning</span>
            <strong class="icon-arrow2"></strong>
          </p>

          <p
            class="toggle-service"
            @click="showResidential"
            v-if="visibleResidential2"
          >
            <strong class="icon-arrow2"></strong>
            <span>Commercial Cleaning</span>
          </p>
          <img :src="banner.acf.service_banner_img" alt="" />
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
        <div class="posts_item" v-for="post in array" :key="post.ID">
          <img
            :src="post.acf.image_mobile_service"
            class="post_img--mobile"
            alt="picture"
          />

          <img class="desktop-img" :src="post.acf.img_post" alt="" />
          <article>
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
          <div v-if="selectedItem">
            <span class="close-modal icon-cross" @click="closeModal"></span>
            <img class="desktop-img" :src="selectedItem.acf.img_post" alt="" />
            <article>
              <h3>{{ selectedItem.title.rendered }}</h3>
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
      visibleCommercial2: true,
      visibleResidential2: null,
      modalShown: false,
      selectedItem: {},
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

    showModal(postObject) {
      this.selectedItem = postObject
      this.modalShown = true
      console.log(this.selectedItem)
    },
    closeModal() {
      this.modalShown = false
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
