<template>
  <section
    class="home_service swiper-home-service swiper w-5/6 ml-auto relative"
    v-swiper="swiperOption"
    ref="mySwiperRef"
  >
    <div class="swiper-pagination"></div>
    <div class="swiper-wrapper">
      <article
        v-for="data in category"
        :key="data.ID"
        class="home_service_item swiper-slide"
      >
        <div :style="`background: url(${data.acf.service_list_img_bg})`">
          <h4>SERVICES</h4>
          <h2 class="title">{{ data.service_banner_title }}</h2>
          <ul>
            <li v-for="data2 in data.acf.service_list_items" :key="data2.ID">
              {{ data2.service_list_item }}
            </li>
          </ul>
        </div>

        <figure>
          <img :src="data.acf.service_list_image" alt="" />
        </figure>
      </article>
    </div>
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
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
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
