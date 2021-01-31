<template>
  <b-container fluid="lg" class="px-2 px-lg-0">
    <div class="loader d-flex align-items-center justify-content-center">
      <div class="loader__wrapper"></div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style lang="scss">
//
.loader {
  //
  &__wrapper {
    width: 50px;
    height: 50px;
    border: 4px solid;
    border-radius: 50%;
    border-color: transparent var(--thirdenth) var(--thirdenth) var(--thirdenth);
    animation: loader 0.5s infinite linear;
  }

  //
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
