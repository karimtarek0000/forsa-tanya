<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="thirdenth"
    class="px-0 py-0 justify-content-lg-around"
  >
    <b-container fluid="lg" class="px-2 px-lg-0 bg-thirdenth">
      <!-- 1) - Logo -->
      <b-navbar-brand :to="localePath('/')" class="p-0 col col-lg-2">
        <Logo src-image="logo1.jpg" />
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
            class="text-capitalize text-xsmall weight-bolder"
            :to="localePath(item == 'home' ? '/' : item)"
            :exact="true"
            >{{ $t(`navbar.${item.replace('-', ' ')}`) }}</b-nav-item
          >
        </b-navbar-nav>
        <!-- 2) - Navbar options -->
        <OptionsUser class="col-lg-4 mb-2 mb-lg-0" />
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
.navbar {
  height: 100px;

  //
  img {
    //
    @media (min-width: 992px) {
      transform: scale(1.8);
    }
  }
}
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
    max-height: 100px;
    height: 50px;
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

  //
  .navbar-toggler {
    border-color: rgb(49, 160, 139);
  }

  //
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(49, 160, 139)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
}
</style>
