<template>
  <section class="contact">
    <div class="contact_info">
      <div>
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

    <form>
      <input type="text" class="contact_input" />
      <input type="text" class="contact_input" />
      <textarea name="message" id="" placeholder="Your Message"></textarea>
      <input type="text" class="contact_input" />
    </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  computed: {
    contact() {
      return this.$store.getters.perks
    },
  },

  methods: {
    // submitData() {
    //   const emailBody = {
    //     'your-name': this.form.name,
    //     'your-email': this.form.email,
    //     'your-message': this.form.message,
    //   }
    //   const form = new FormData()
    //   for (const field in emailBody) {
    //     form.append(field, emailBody[field])
    //   }
    //   const responsee = this.axios.post(
    //     `http://localhost/maxima/backend/wp-json/contact-form-7/v1/contact-forms/5/feedback`,
    //     form
    //   )
    // },
  },
}
</script>
