<template>
  <section
    v-swiper="swiperOption"
    class="home_banner swiper w-5/6 ml-auto relative"
    :key="reset"
  >
    <section class="swiper-wrapper">
      <!-- SLIDE -->

      <article
        v-for="(data, index) in category"
        :key="data.id"
        v-lazy-container="{ selector: 'img' }"
        :class="`swiper-slide slide-${index + 1}`"
      >
        <div class="content-wrapper">
          <span
            class="icon-arrow2 arrow arrow-next home-arrow-1"
            @click="resetBanner"
          >
          </span>
          <span
            class="icon-arrow2 arrow arrow-prev home-arrow-2"
            @click="resetBanner"
          >
          </span>
          <!-- inner content -->
          <div>
            <h4>SERVICES</h4>
            <h2 class="title">{{ data.home_title }}</h2>
            <p>{{ data.home_text }}</p>
            <nuxt-link to="/services" class="btn_general">Read More</nuxt-link>
          </div>
        </div>

        <figure>
          <img
            :data-src="data.acf.home_image"
            :src="data.acf.home_image"
            alt="banner image"
          />
          <img
            :data-src="data.acf.home_image_responsive"
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

// import AOS from 'aos'
// import 'aos/dist/aos.css'

export default {
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  data() {
    return {
      reset: 0,

      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        effect: 'fade',
        autoplay: {
          speed: 4500,
          delay: 7000,
        },
        fadeEffect: { crossFade: true },
        navigation: {
          nextEl: '.arrow.arrow-next.home-arrow-1',
          prevEl: '.arrow.arrow-prev.home-arrow-2',
        },
      },
    }
  },

  computed: {
    category() {
      return this.$store.getters.category
    },
  },
  mounted() {
    // AOS.init({ })

    setTimeout(() => {
      this.resetBanner()
    }, 1000)
  },
  methods: {
    resetBanner() {
      this.reset += 1
    },
  },
}
</script>
