<template>
  <div
    class="alert bg-youtube text-primary px-5 direction-ltr rounded position-fixed d-flex align-items-center justify-content-center"
  >
    <!--  -->
    <p class="mb-0 py-2">
      {{ $t('alert.register') }}
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
}
</script>

<style lang="scss">
//
.alert {
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  box-shadow: 0px 10px 10px rgba(#d42528, 0.5);
  will-change: animation;
  width: 40%;

  //
  @media (max-width: 768px) {
    width: 90%;
  }

  //
  span {
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
}

/////////////////////////////
// Animation
.alert-enter-active {
  animation: alertVisible 0.5s ease forwards;
}
//
.alert-leave-to {
  animation: alertHidden 0.5s ease forwards;
}
//
@keyframes alertVisible {
  from {
    top: -100px;
    opacity: 0;
  }
  to {
    top: 40px;
    opacity: 1;
  }
}
//
@keyframes alertHidden {
  from {
    top: 40px;
    opacity: 0;
  }
  to {
    top: -100px;
    opacity: 1;
  }
}
</style>
