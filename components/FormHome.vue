<template>
  <ValidationObserver
    class="home-form-wrapper"
    v-slot="{ handleSubmit }"
    ref="form"
  >
    <form
      :key="reset"
      class="form-home"
      novalidate="novalidate"
      @submit.prevent="handleSubmit(sendEmail)"
      method="POST"
    >
      <div class="input_item">
        <ValidationProvider name="text" rules="required" v-slot="{ errors }">
          <textarea
            ref="inputs"
            name="message"
            id="message"
            v-model="message"
            placeholder="Your Message"
            class="contact_input"
          ></textarea>
          <span style="color: red">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div>
        <ValidationProvider name="text" rules="required" v-slot="{ errors }">
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            class="contact_input"
            placeholder="Your Name"
          />
          <span style="color: red">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div>
        <ValidationProvider
          name="text"
          rules="required|email"
          v-slot="{ errors }"
        >
          <input
            type="mail"
            id="email"
            name="email"
            class="contact_input"
            v-model="email"
            placeholder="Your Mail"
          />
          <span style="color: red">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <button class="btn_general" type="submit" id="form-submit">Send</button>

      <span v-if="successMessage" class="success-message">
        <p>SENT SUCCESSFULLY</p>
      </span>
    </form>
  </ValidationObserver>
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
      name: null,
      email: null,
      message: null,
      successMessage: false,
      reset: 0,
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  methods: {
    sendEmail() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('message', this.message)

      axios
        .post(`http://localhost/maxima/backend/mail.php`, formData)
        .then((res) => {})
        .catch((error) => {
          console.log(error)
        })

      this.name = null
      this.email = null
      this.message = null
      this.reset++

      console.log(this.reset)
      this.successMessage = true
      setTimeout(() => {
        this.successMessage = false
      }, 3000)
      //*
    },
  },
}
</script>
