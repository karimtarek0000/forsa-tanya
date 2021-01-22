<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="primary"
    class="px-0 justify-content-lg-around"
  >
    <b-container class="px-2 px-md-0 bg-primary">
      <!-- 1) - Logo -->
      <b-navbar-brand :to="localePath('/')" class="p-0 col col-lg-2">
        <Logo />
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
            class="text-capitalize"
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
  .navbar-nav .nav-link {
    color: black;
    font-size: 18px;
    font-weight: 500;

    //
    &:hover {
      color: currentColor;
    }
  }

  //
  .nav-link.nuxt-link-active {
    $color: var(--third);
    color: $color;
    //
    &.nuxt-link-exact-active {
      color: $color;
    }
  }
}
</style>
