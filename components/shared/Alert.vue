<template>
  <div
    :class="[
      'alert text-primary px-5 text-capitalize direction-ltr rounded position-fixed d-flex align-items-center justify-content-center',
      {
        'bg-youtube': typeMessage === 'error',
        'bg-thirdenth': typeMessage === 'success',
      },
    ]"
  >
    <!--  -->
    <p class="mb-0 py-2">
      {{ $t(`alert.${message}`) }}
    </p>
    <!--  -->
    <span
      class="text-30 mx-2 cursor position-absolute"
      @click="$emit('closeAlert', false)"
      >&times;</span
    >
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    typeMessage: {
      type: String,
      default: 'error',
    },
    message: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
