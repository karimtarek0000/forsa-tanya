<template>
  <header class="header bg-primary">
    <!-- Start container -->
    <b-container class="px-2 px-md-0">
      <!-- Start row -->
      <b-row
        no-gutters
        class="header__inner justify-content-between align-items-center"
      >
        <!-- Col - 1 -->
        <b-col lg="4">
          <!--  -->
          <h1 class="text-large text-secondary weight-bolder text-uppercase">
            test
          </h1>
          <!--  -->
          <p class="text-xsmall mb-lg-5 text-forth">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
            omnis excepturi voluptas facilis. Consequatur esse eius maxime totam
            voluptatum corrupti deleniti perferendis quisquam quasi sed deserunt
            magni velit error magnam odit natus earum explicabo vel, voluptates
            sunt, eum iste?
          </p>
          <!--  -->
          <b-link
            class="text-decoration-none weight-bolder border border-third rounded text-small text-third py-2 px-4 text-capitalize"
            :to="localePath('therapists')"
            >{{ $t('button.getStarted') }}</b-link
          >
        </b-col>
        <!-- Col - 2 -->
        <b-col lg="7" class="mt-2 mt-lg-0">
          <img class="img-fluid" src="@/assets/images/header/1.png" alt="" />
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
}
</style>
