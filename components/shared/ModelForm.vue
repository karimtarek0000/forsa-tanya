<template>
  <div class="full-screen position-fixed">
    <div
      class="model px-3 py-5 px-lg-5 pt-lg-55 pb-lg-40 overflow-hidden bg-primary position-relative"
    >
      <span
        class="closeFullScreen text-seventh cursor position-absolute"
        @click="closeFullScreen"
        >&times;</span
      >
      <!-- Start slot-->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelForm',
  created() {
    //
    const closeView = (e) => {
      if (e.key === 'Escape') {
        this.closeFullScreen()
      }
    }
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.addEventListener('keydown', closeView)
    //
    this.$once('hook:destroyed', () =>
      // eslint-disable-next-line nuxt/no-globals-in-created
      document.removeEventListener('keydown', closeView)
    )
  },
  methods: {
    // 1) - Close full screen
    closeFullScreen() {
      return this.$emit('closeFullScreen', false)
    },
  },
}
</script>

<style lang="scss">
//
.full-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8000;
  background-color: rgba(0, 0, 0, 0.5);
}
//
.model {
  max-width: 673px;
  border-radius: 20px;

  //
  .form-group {
    @media (min-width: 992px) {
      width: 100%;
    }
  }

  //
  label {
    text-transform: capitalize;
    color: var(--seventh);
  }

  //
  input {
    //
    &::placeholder {
      text-transform: capitalize;
    }
  }

  //
  .closeFullScreen {
    top: 12px;
    right: 22px;
    font-size: 27px;
  }
}
</style>
