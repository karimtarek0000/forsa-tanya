<template>
  <section class="pt-4 pt-lg-20 pb-4 pb-lg-80">
    <!--  -->
    <b-row no-gutters class="align-items-center">
      <!--  -->
      <b-col lg="5">
        <h1
          class="position-relative text-40 text-sevententh text-capitalize weight-extraBold"
        >
          {{ title }}
        </h1>
      </b-col>
      <!--  -->
      <b-col lg="7" class="mt-4 mt-lg-0">
        <GImage src-image="other/1.jpg" :alt="title" />
      </b-col>
    </b-row>
    <!--  -->
    <b-row no-gutters class="mt-4 mt-lg-80">
      <p
        class="mb-0 text-16 weight-light line-2 px-0 px-lg-3"
        v-text="description"
      />
    </b-row>
    <!--  -->
    <b-row no-gutters>
      <slot />
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'OtherPages',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  //
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 29px;
    height: 3px;
    background-color: var(--sevententh);
  }
}
</style>
