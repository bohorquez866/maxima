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

    <form class="wpcf7-form" novalidate="novalidate" @submit="formSubmit">
      <div class="form-full">
        <span class="wpcf7-class textarea-159">
          <textarea
            name="your-message"
            id="messenger"
            v-model="formMsg"
            placeholder="Your Message"
          ></textarea>
        </span>
      </div>
      <input type="submit" value="send" />
    </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formMsg: '',
    }
  },
  computed: {
    contact() {
      return this.$store.getters.perks
    },
    urlPath() {
      return this.$store.getters.urlPath
    },
  },
  methods: {
    formSubmit(e) {
      e.preventDefault()
      const formData = new FormData()
      const dat = {
        'your-message': this.formMsg,
      }
      for (const name in dat) {
        formData.append(name, dat[name])
      }
      //* Axios Post
      axios({
        method: 'post',
        url: `${this.urlPath}wp-json/contact-form-7/v1/contact-forms/5/feedback`,
        data: formData,
        headers: { 'Content-type': 'multipart/form-data' },
      })
        .then(console.log(Response.data))
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>
