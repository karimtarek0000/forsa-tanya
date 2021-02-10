<template>
  <b-col sm="6" class="text-center mx-auto py-3 overflow-hidden">
    <p class="text-18 weight-extraBold text-secondary">
      {{ $t(`placeHolder.${title}`) }}
    </p>
    <GImage class="obj-image-height" :src-image="img" :alt="alt" />
  </b-col>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    title: {
      type: String,
      default: 'empty',
    },
    img: {
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
