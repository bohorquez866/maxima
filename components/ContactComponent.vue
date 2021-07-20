<template>
  <section class="contact">
    <div  class="contact_info"> 
      <div data-aos="fade-right">
        <div  >
          <h4>Contact Us</h4>
          <h2 class="title">{{ contact.contact_title }}</h2>
          <p>{{ contact.contact_text }}</p>
        </div>

        <div class="social-contact">
          <p>
            <i class="icon-mail"></i>

            <a :href="`mailto: ${contact.contact_email}`">
              {{ contact.contact_email }}
            </a>
          </p>

          <p>
            <i class="icon-phone"></i>
            <a :href="`mailto: ${contact.contact_phone}`">
              {{ contact.contact_phone }}</a
            >
          </p>
        </div>
      </div>
    </div>
    <slot name="form"></slot>
  </section>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.getters.perks
    },
    url() {
      return this.$store.getters.urlPath
    },
  },

  methods: {},
}
</script>
