<template>
  <section class="contact">
    <div class="contact_info">
      <h4>Contact Us</h4>
      <h2>{{ contact.contact_title }}</h2>
      <div>{{ contact.contact_text }}</div>
      <p>
        <a :href="`mailto: ${contact.contact_email}`">
          {{ contact.contact_email }}
        </a>
      </p>

      <p>
        <a :href="`mailto: ${contact.contact_phone}`">
          {{ contact.contact_phone }}</a
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['contact'],
}
</script>
