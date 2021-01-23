<template>
  <img
    class="img-fluid"
    :src="require(`@/assets/images/${srcImage}`)"
    :alt="alt"
  />
</template>

<script>
export default {
  name: 'GImage',
  props: {
    srcImage: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
