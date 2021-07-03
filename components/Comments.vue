<template>
  <section class="comments">
    <h4>Comments</h4>
    <h2 class="title">{{ comments.comments_title }}</h2>

    <section
      v-swiper="swiperOption"
      ref="mySwiperRef"
      class="swiper-comment swiper w-5/6 ml-auto relative"
    >
      <ul class="swiper-wrapper">
        <li
          v-for="(comment, index) in comments.comment_content"
          class="swiper-slide"
          :key="index"
        >
          <img :src="comment.client_img" alt="Witness" />
          <p>{{ comment.client_text }}</p>
          <strong>{{ comment.client_name }}</strong>
        </li>
      </ul>

      <div class="arrow-container">
        <span
          class="comment-arrow-prev comment-arrow icon-arrow2"
          slot="button-prev"
        >
        </span>

        <span
          class="comment-arrow-next comment-arrow icon-arrow2"
          slot="button-next"
        ></span>
      </div>
    </section>
  </section>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 50,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        effect: 'fade',
        fadeEffect: { crossFade: true },
        navigation: {
          nextEl: '.comment-arrow-prev',
          prevEl: '.comment-arrow-next',
        },
      },
    }
  },
  computed: {
    comments() {
      return this.$store.getters.perks
    },
  },
  methods: {},
}
</script>
