<template>
  <img :class="classes" :src="source" :data-url="source" alt="random image" />
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: false,
      default: ' ',
    },
  },
}
</script>
