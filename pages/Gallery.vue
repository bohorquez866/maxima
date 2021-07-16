<template>
  <main>
    <Navbar />
    <section class="gallery">
      <h1 class="title">Gallery</h1>

      <silent-box :gallery="images"
        ><!-- your additional content --></silent-box
      >
    </section>
    <Footer />
  </main>
</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
import Footer from '~/components/Footer.vue'

Vue.use(VueSilentbox)
export default {
  components: { Footer },
  data() {
    return {
      images: [],
    }
  },
  computed: {
    // galleryData() {
    //   return (this.images = this.$store.getters.home)
    // },
    galleryImages() {
      return this.$store.getters.home[0]
    },
  },
  mounted() {
    this.getImages()
  },
  methods: {
    getImages() {
      //* creates new array of Objets
      if (this.galleryImages) {
        let emptyImgArray = this.galleryImages.acf.gallery_imgs
        let finalImgArray = []

        for (let i = 0; i < emptyImgArray.length; i++) {
          let pushImageObject = () => {
            finalImgArray.push({
              src: emptyImgArray[i].gallery_img,
            })
          }

          pushImageObject()
        }

        this.images = finalImgArray
      }
    },
  },
  watch: {
    galleryImages(newVal, oldVal) {
      if (!oldVal) {
        this.getImages()
      }
    },
  },
}
</script>
