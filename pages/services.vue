<template>
  <main id="2">
    <navbar />
    <transition name="fade">
      <CategoryPosts
        :posts="commercialInfo"
        :banner="category[0]"
        v-if="visibleCommercial"
        class="commercial_services"
      />
    </transition>

    <transition name="fade">
      <CategoryPosts
        :posts="residentialInfo"
        :banner="category[1]"
        v-if="visibleResidential"
        class="residential_services"
      />
    </transition>
    <Footer />

  <pre>{{seoInfo}}</pre>
  </main>
</template>

<script>
export default {

  head() {
    return {
    title:  `${this.seoInfo ? this.seoInfo.yoast_head_json.og_site_name : 'Maxima Limpieza'} | ${this.seoInfo ? this.seoInfo.yoast_head_json.description : 'Service'}`
  }
    },
  


  computed: {
    commercialInfo() {
      return this.$store.getters.commercial
    },
    residentialInfo() {
      return this.$store.getters.residential
    },
    category() {
      return this.$store.getters.category
    },
    seoInfo(){
      let info;
      if(this.$route.params.commercial == 'residential'){
        if(this.$store.getters.category[1]) {
           info =  this.$store.getters.category[1];
          
        }
        }else if(this.$route.params.commercial == 'commercial'){
 if(this.$store.getters.category[0]) {
        info =  this.$store.getters.category[0] 
 }


      }

    if(info != null){
      return info
    }
    },


    visibleCommercial() {
      return this.$store.getters.visibleCommercial
    },
    visibleResidential() {
      return this.$store.getters.visibleResidential
    },
  
  },

  mounted() {
    console.log(this.category)
  },


  methods: {
    showResidential() {
      if (this.$route.params.commercial == 'residential') {
        this.$store.dispatch('toggleResidential', true)
        this.$store.dispatch('toggleCommercial', false)
      } else if (this.$route.params.commercial == 'commercial') {
        this.$store.dispatch('toggleCommercial', true)
        this.$store.dispatch('toggleResidential', false)
      }
    },
  },
  watch: {
    '$route.params.commercial'() {
      this.showResidential()
    },

  },
}
</script>
