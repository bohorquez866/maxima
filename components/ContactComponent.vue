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

    <form
      class="wpcf7-form"
      novalidate="novalidate"
      @submit.prevent="sendEmail"
      method="POST"
    >
      <div>
        <textarea name="message" id="message" placeholder="message"></textarea>
      </div>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value="sasasas"
          placeholder="Your Name"
        />
      </div>

      <div>
        <input
          type="mail"
          id="email"
          name="email"
          value="asasas"
          placeholder="Your Mail"
        />
      </div>

      <button type="submit" id="form-submit">sasasas</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

// No message specified.
extend('email', email)

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required',
})
export default {
  data() {
    return {
      name: 'namedsfs',
      email: 'bohorquez866@gmail.com',
      message: 'dfdsfsdsfsdfsdfsdfsdfsd',
    }
  },
  computed: {
    contact() {
      return this.$store.getters.perks
    },
    url() {
      return this.$store.getters.urlPath
    },
  },

  methods: {
    sendEmail: function () {
      const formData = new FormData()
      formData.append('name', 'asdasdasdasd')
      formData.append('email', 'prueba@gmail.com')
      formData.append('message', 'sassas')
      axios
        .post(`http://localhost/maxima/backend/mail.php`, formData)
        .then((res) => {
          a
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
