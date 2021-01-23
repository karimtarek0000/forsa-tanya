<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="thirdenth"
    class="px-0 justify-content-lg-around"
  >
    <b-container class="px-2 px-md-0 bg-thirdenth">
      <!-- 1) - Logo -->
      <b-navbar-brand :to="localePath('/')" class="p-0 col col-lg-2">
        <Logo src-image="logo2.png" />
      </b-navbar-brand>

      <!-- 2) - Navbar toggler -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- 3) - Navbar items -->
      <b-collapse
        id="nav-collapse"
        is-nav
        class="col-lg-8 justify-content-between p-0"
      >
        <!-- 1) - Navbar nav -->
        <b-navbar-nav class="col-lg-6 justify-content-between">
          <b-nav-item
            v-for="item in navbar"
            :key="item"
            class="text-capitalize text-xsmall weight-extraBold"
            :to="localePath(item == 'home' ? '/' : item)"
            :exact="true"
            >{{ $t(`navbar.${item.replace('-', ' ')}`) }}</b-nav-item
          >
        </b-navbar-nav>
        <!-- 2) - Navbar options -->
        <OptionsUser class="col-lg-4" />
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      navbar: ['home', 'about-us', 'therapists'],
    }
  },
}
</script>

<style lang="scss">
//
nav.navbar {
  @media only screen and (max-width: 992px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    z-index: 10;
    height: 100px;
  }
}
//
.navbar-light {
  //
  .nav-link {
    position: relative;
    $color: var(--primary);
    color: $color;

    @media (hover: hover) {
      //
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 2px;
        transform: translateX(-50%);
        background-color: $color;
        transition: width 0.3s ease;
        will-change: width;

        //
        @media only screen and (max-width: 992px) {
          display: none;
        }
      }
    }

    // Nuxt link active
    &.nuxt-link-active {
      //
      &::after {
        width: 80%;
      }
    }

    // Nuxt link exact active
    &.nuxt-link-exact-active {
      color: $color;
    }
  }

  //
  .navbar-nav .nav-link {
    color: var(--primary);

    //
    &:hover,
    &:focus {
      color: var(--primary);
    }

    &:hover::after {
      width: 80%;
    }
  }
}
</style>
