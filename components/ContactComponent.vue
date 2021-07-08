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

    <ValidationObserver class="home-form-wrapper" v-slot="{ handleSubmit }">
      <form
        class="form-home"
        novalidate="novalidate"
        @submit.prevent="handleSubmit(sendEmail)"
        method="POST"
      >
        <div>
          <ValidationProvider name="text" rules="required" v-slot="{ errors }">
            <textarea
              name="message"
              id="message"
              v-model="message"
              placeholder="message"
              class="contact_input"
            ></textarea>
            <span style="color: red">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            class="contact_input"
            placeholder="Your Name"
          />
        </div>

        <div>
          <input
            type="mail"
            id="email"
            name="email"
            class="contact_input"
            v-model="email"
            placeholder="Your Mail"
          />
        </div>

        <button type="submit" id="form-submit">sasasas</button>
      </form>
    </ValidationObserver>
  </section>
</template>

<script>
import axios from 'axios'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
// No message specified.
extend('email', email)

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required',
})
// Override the default message.
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
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
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    sendEmail: function () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('message', this.message)
      axios
        .post(`http://localhost/maxima/backend/mail.php`, formData)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
