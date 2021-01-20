<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="primary"
    class="py-2 justify-content-lg-around"
  >
    <!-- 1) - Logo -->
    <b-navbar-brand :to="localePath('/')" class="col col-lg-2">
      <Logo />
    </b-navbar-brand>

    <!-- 2) - Navbar toggler -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <!-- 3) - Navbar items -->
    <b-collapse
      id="nav-collapse"
      is-nav
      class="col-lg-8 justify-content-between"
    >
      <!-- 1) - Navbar nav -->
      <b-navbar-nav class="col-lg-6 justify-content-between">
        <b-nav-item
          v-for="item in navbar"
          :key="item"
          class="text-capitalize"
          :to="localePath(item == 'home' ? '/' : item)"
          :exact="true"
          >{{ item.replace('-', ' ') }}</b-nav-item
        >
      </b-navbar-nav>
      <!-- 2) - Navbar options -->
      <OptionsUser class="col-lg-4" />
    </b-collapse>
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
