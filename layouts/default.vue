<template>
  <div>
    <!-- 1) - Alert -->
    <transition name="alert" mode="out-in">
      <Alert v-if="statusAlert" @closeAlert="changeStatusAlert" />
    </transition>
    <!-- 2) - Navbar -->
    <NavbarVue1
      :options-navbar-vue1="options"
      :status-toggler="statusToggler"
      @toggler="statusToggler = $event"
    >
      <!-- 1) - Options User -->
      <OptionsUser
        :status-toggle="statusToggler"
        @togglerNotification="statusToggler = $event"
      />
      <!-- 2) - Change Language -->
      <Langauge />
    </NavbarVue1>
    <!-- 3) - Routing -->
    <div>
      <Nuxt />
    </div>
    <!-- 4) - Footer -->
    <Footer />
  </div>
</template>

<script>
//
import { statusAlert } from '@/mixins/other.js'

export default {
  mixins: [statusAlert],
  data() {
    return {
      options: {
        backgroundColor: '#4ccab2',
        colorBurger: '#556272',
        height: null,
        links: ['home', 'about-us', 'therapists'],
      },
      statusToggler: false,
    }
  },
  mounted() {
    // eslint-disable-next-line no-unused-expressions
    if (window.innerWidth <= 992) {
      this.options.height = '50px'
    } else {
      this.options.height = '100px'
    }
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
          content: 's',
        },
        ...i18nSeo.meta,
      ],
    }
  },
}
</script>
<style lang="scss">
//
.navbarVue1 {
  //
  &__items {
    //
    .nuxt-link {
      position: relative;
      padding: 10px 20px;
      font-weight: 500;
      font-size: 18px;
      margin: 0 20px;

      //
      @media (max-width: 992px) {
        margin: 0 0;
      }

      //
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -5px;
        width: 60%;
        transform: translateX(-50%) scaleX(0);
        transform-origin: center;
        height: 3px;
        border-radius: 100px;
        background-color: white;
        transition: transform 0.5s ease;
        will-change: transform;

        //
        @media (max-width: 992px) {
          width: 80%;
          bottom: 3px;
        }
      }
      //
      &:hover {
        text-decoration: none;
        color: currentColor;
      }
      //
      &:hover::after {
        //
        @media (hover: hover) {
          transform: translateX(-50%) scaleX(1);
        }
      }
    }
    //
    .nuxt-link-active {
      //
      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }
  }

  &__others {
    @media (max-width: 992px) {
      background-color: var(--thirdenth);
      box-shadow: 5px 0 10px rgba(#4ccab2, 0.6);
    }
  }
}

//
.options-users {
  //
  @media (max-width: 992px) {
    order: -1;
  }
}
</style>
