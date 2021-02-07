<template>
  <!--  -->
  <div class="auth">
    <!-- 1) - Alert -->
    <transition name="alert" mode="out-in">
      <Alert v-if="statusAlert" @closeAlert="changeStatusAlert" />
    </transition>
    <!-- 2) - Wrapper -->
    <b-row ref="wrapper" no-gutters class="auth__wrapper">
      <!-- 1) -->
      <b-col
        ref="wrapperRoute"
        lg="6"
        class="px-4 px-lg-84 position-relative form"
      >
        <!--  -->
        <div class="sticky">
          <!-- 1) - Back -->
          <b-row no-gutters class="justify-content-start py-4">
            <b-button
              variant="primary"
              class="d-flex justify-content-center align-items-center px-0 text-third text-capitalize text-14 weight-light direction-ltr"
              @click="back"
            >
              <GSvg class="svg" name-icon="angle-left" title="angle-left" />
              <span class="mt-1 mx-2">{{ $t('button.back') }}</span>
            </b-button>
          </b-row>
          <!-- 2) - Logo -->
          <b-row no-gutters class="mb-48">
            <b-col class="text-center">
              <!-- 1) - Logo -->
              <Logo class="logo" />
              <!-- 2) - Title -->
              <h1
                class="weight-extraBold auth__title position-relative mx-auto text-secondary text-17 text-capitalize my-2"
              >
                {{ titlePage }}
              </h1>
            </b-col>
          </b-row>
        </div>
        <!-- 2) - Routing -->
        <div class="mb-48">
          <Nuxt />
        </div>
      </b-col>
      <!-- 2) - Image -->
      <b-col lg="6" class="d-none d-md-block">
        <GImage src-image="auth/1.jpg" alt="auth" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    }
  },
  computed: {
    // 1) - status alert
    statusAlert() {
      return this.$store.state.statusAlert
    },
    // 2) - title page
    titlePage() {
      return this.$store.state.titlePage
    },
  },
  watch: {
    // 1) - Title page
    titlePage() {
      this.$refs.wrapperRoute.scrollTop = 0
    },
  },
  methods: {
    // 1) - Back
    back() {
      this.$router.go(-1)
    },
    // 2) - Change status alert
    changeStatusAlert(status) {
      this.$store.commit('changeStatusAlert', status)
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      titleTemplate: `${this.$t('meta.name')} - %s`,
      htmlAttrs: {
        dir: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description.register'),
        },
        ...i18nSeo.meta,
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
//
.auth {
  //
  .logo {
    width: 98px;
  }

  .svg {
    width: 10px;
    height: 20px;
    fill: var(--third);
  }

  &__title {
    width: fit-content;
    //
    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 11px;
      height: 2px;
      background-color: var(--third);
    }
  }

  &__wrapper {
    > div {
      max-height: 100vh;
      overflow-y: auto;
    }
  }

  label,
  legend {
    text-transform: capitalize;
  }

  input {
    // width: 271px;
    //
    &::placeholder {
      color: var(--twentyThree);
      text-transform: capitalize;
    }
  }

  .require > label::after {
    content: '*';
    color: var(--twentyThree);
  }

  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled).active,
  .show > .btn-primary.dropdown-toggle,
  .btn-primary:hover {
    background-color: transparent;
    border-color: transparent;
  }
}

//
.visible {
  top: 38px;
  right: 0px;

  svg {
    width: 20px;
    height: 20px;
  }
}

//
.svg-other-submit {
  width: 16px;
  height: 16px;
}

.svg-validate {
  width: 20px;
  height: 17px;
  fill: var(--youtube);
}

//
.form-group {
  @media (min-width: 992px) {
    width: 271px;
  }
}

//
.split {
  width: fit-content;

  //
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 197px;
    height: 0.5px;
    transform: translateY(-50%);
    background-color: rgba(#c2c2c2, 0.4);
  }
  //
  &::after {
    right: -250px;
  }
  &::before {
    left: -250px;
  }
}

//
.col-form-label {
  font-size: 18px;
}

//////////////////////////////
// Form Change Scrollbar
.form {
  scrollbar-color: var(--thirdenth) var(--primary);
}

.form::-webkit-scrollbar {
  width: 4px;
}

.form::-webkit-scrollbar-track {
  background-color: var(--primary);
}

.form::-webkit-scrollbar-thumb {
  background-color: var(--thirdenth);
  border-radius: 0;
}

.sticky {
  position: sticky;
  z-index: 5;
  background: var(--primary);
  overflow: hidden;
  top: 0;
}

.alert-enter-active {
  animation: alertVisible 0.5s ease forwards;
}

.alert-leave-to {
  animation: alertHidden 0.5s ease forwards;
}

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
