<template>
  <section
    v-if="category"
    v-swiper="swiperOption"
    class="home_banner swiper w-5/6 ml-auto relative"
  >
    <section class="swiper-wrapper">
      <article v-for="data in category" :key="data.id" class="swiper-slide">
        <span class="arrow">-></span>
        <div>
          <div>
            <h4>SERVICES</h4>
            <h2 class="title">{{ data.home_title }}</h2>
            <p>{{ data.home_text }}</p>
            <nuxt-link :to="data.slug">Read More</nuxt-link>
          </div>
        </div>
        <figure>
          <img :src="data.acf.home_image" alt="" />
        </figure>
      </article>
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
        slidesPerView: 1,
        spaceBetween: 50,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        navigation: {
          nextEl: '.comment-arrow-next',
          prevEl: '.comment-arrow-prev',
        },
      },
    }
  },
  computed: {
    category() {
      return this.$store.getters.category
    },
  },
}
</script>
