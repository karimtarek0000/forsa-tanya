<template>
  <img
    v-if="typeImg === 'file'"
    class="img-fluid obj-img"
    :src="require(`@/assets/images/${srcImage}`)"
    :alt="alt"
  />
  <img v-else class="img-fluid obj-img" :src="srcImage" :alt="alt" />
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
    typeImg: {
      type: String,
      default: 'file',
    },
  },
}
</script>

<style></style>
