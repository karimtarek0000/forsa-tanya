<template>
  <header class="header">
    <!-- Start container -->
    <b-container fluid="lg" class="px-2 px-lg-0">
      <!-- Start row -->
      <b-row
        no-gutters
        class="header__inner justify-content-between align-items-center"
      >
        <!-- Col - 1 -->
        <b-col lg="4" class="order-1 order-lg-0">
          <!--  -->
          <h1 class="text-40 text-secondary weight-extraBold text-uppercase">
            title
          </h1>
          <!--  -->
          <p class="text-16 mb-lg-5 text-forth">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
            omnis excepturi voluptas facilis. Consequatur esse eius maxime totam
            voluptatum corrupti deleniti perferendis quisquam quasi sed deserunt
            magni velit error magnam odit natus earum explicabo vel, voluptates
            sunt, eum iste?
          </p>
          <!--  -->
          <b-link
            class="text-decoration-none border border-third rounded text-18 text-third py-2 px-4 w-172 h-50 overflow-hidden weight-extraBold text-capitalize"
            :to="localePath('sign-up')"
            >{{ $t('button.getStarted') }}</b-link
          >
        </b-col>
        <!-- Col - 2 -->
        <b-col lg="7" class="order-0 order-lg-1 mt-2 mt-lg-0">
          <img
            class="img-fluid obj-img"
            src="@/assets/images/header/1.png"
            alt=""
          />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
//
.header {
  //
  &__inner {
    @media only screen and (min-width: 992px) {
      height: calc(100vh - 110px);
    }
  }

  //
  a {
    position: relative;
    background-color: transparent;
    z-index: 2;
  }

  //
  a.text-third {
    transition: color 0.3s ease;
  }

  //
  a:hover::after,
  a.text-third:hover,
  a.text-third:active {
    @media (hover: hover) {
      color: var(--primary) !important;
      background-color: var(--third);
    }
  }

  //
  a.text-third:focus {
    color: var(--primary) !important;
  }
}
</style>
