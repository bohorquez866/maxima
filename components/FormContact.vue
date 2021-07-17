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
      <!-- END of FORM  TAG-->
      <!-- NAME -->
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

      <!-- EMAIL -->
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

      <!-- phone -->
      <div>
        <ValidationProvider name="phone" rules="required" v-slot="{ errors }">
          <input
            type="tel"
            id="phone"
            name="phone"
            v-model="phone"
            class="contact_input"
            placeholder="Your Phone"
          />
          <span style="color: red">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <!-- SERVICE SELECT -->
      <div>
        <ValidationProvider name="phone" rules="required" v-slot="{ errors }">
          <!-- <Field name="service" as="select">
            <option>Coffee</option>
            <option>Tea</option>
            <option>Coke</option>
          </Field>
          -->
          <select name="service" id="service" v-model="service">
            <option value="none" selected disabled>Select The Service</option>

            <option
              v-for="option in serviceData"
              :key="option.ID"
              :value="option.title.rendered"
              v-html="option.title.rendered"
            ></option>
            -->
          </select>
          <span style="color: red">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <!-- //* TEXTAREA -->
      <div class="input_item">
        <ValidationProvider name="text" v-slot="{ errors }">
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

      <button class="btn_general" type="submit" id="form-submit">Send</button>
      <span v-if="successMessage" class="success-message">
        <p>SENT SUCCESSFULLY</p>
      </span>
    </form>
  </ValidationObserver>
</template>

<script>
import axios from 'axios'
import { ValidationProvider, ValidationObserver, Field } from 'vee-validate'
import { extend } from 'vee-validate'
import { required, email, numeric } from 'vee-validate/dist/rules'

// No message specified.
extend('email', email)
// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required',
})

export default {
  components: {
    Field,
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      phone: null,
      service: 'Select your Service',
      successMessage: false,
      reset: 0,
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    serviceData() {
      return this.$store.getters.service
    },
  },

  methods: {
    sendEmail() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('message', this.message)
      formData.append('phone', this.phone)
      formData.append('service', this.service)

      axios
        .post(`http://localhost/maxima/backend/mail2.php`, formData)
        .then((res) => {})
        .catch((error) => {
          console.log(error)
        })

      this.name = null
      this.email = null
      this.message = null
      this.phone = null
      this.service = null
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
