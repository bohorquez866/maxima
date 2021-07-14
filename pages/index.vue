<template>
  <main>
    <Navbar />
    <HomeBanner />
    <Perks />
    <HomeAbout />
    <homeService />
    <Comments />
    <Contact-component class="contact-index">
      <template v-slot:form>
        <FormHome />
      </template>
    </Contact-component>
    <Footer />
  </main>
</template>
