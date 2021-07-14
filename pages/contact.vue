<template>
  <main id="4" class="contact-page">
    <navbar />

    <ContactComponent>
      <template v-slot:form>
        <FormContact />
      </template>
    </ContactComponent>
    <Footer />
  </main>
</template>
