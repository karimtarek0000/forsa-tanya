<template>
  <b-col lg="4" class="how__card text-center">
    <!-- 1) - Image -->
    <div class="how__card__image text-center mb-4">
      <img
        class="img-fluid"
        :src="require(`@/assets/images/how/${img}`)"
        alt=""
      />
    </div>
    <!-- 2) - Info -->
    <div class="how__card__info text-capitalize">
      <h3 class="text-seventh text-mid mb-2" v-text="title" />
      <p class="text-sixth m-0" v-text="description" />
      <ButtonPrimary
        :title="$t('button.getStarted')"
        path="about-us"
        class="button"
      />
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'HowBox',
  props: {
    img: {
      type: String,
      required: true,
    },
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

<style lang="scss" scapped>
// How Card
.how__card {
  //
  &__info {
    p,
    .button {
      transition: all 0.5s ease;
      //
      @media (hover: hover) {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  &:hover &__info {
    & p,
    .button {
      @media (hover: hover) {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
}
</style>
