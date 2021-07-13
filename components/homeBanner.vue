<template>
  <section
    v-if="category"
    v-swiper="swiperOption"
    class="home_banner swiper w-5/6 ml-auto relative"
  >
    <section class="swiper-wrapper">
      <!-- SLIDE -->
      <article
        v-for="(data, index) in category"
        :key="data.id"
        :class="`swiper-slide slide-${index + 1}`"
      >
        <div class="content-wrapper">
          <span
            :class="{
              'icon-arrow2': true,
              arrow: true,
              'arrow-next': index + 1 == 1,
              'arrow-prev': index + 1 == 2,
            }"
          >
          </span>

          <!-- inner content -->
          <div>
            <h4>SERVICES</h4>
            <h2 class="title">{{ data.home_title }}</h2>
            <p>{{ data.home_text }}</p>
            <nuxt-link :to="data.slug" class="btn_general">Read More</nuxt-link>
          </div>
        </div>

        <figure>
          <img :src="data.acf.home_image" alt="banner image" />
          <img
            :src="data.acf.home_image_responsive"
            class="banner-responsive-image"
            alt="banner image"
          />
        </figure>
        <!--  -->
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
          nextEl: '.arrow.arrow-next',
          prevEl: '.arrow.arrow-prev',
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
