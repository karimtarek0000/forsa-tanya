<template>
  <b-col
    class="our-therapists__card mb-3 mb-lg-0 text-center flex-grow-0 overflow-hidden rounded basis-large"
  >
    <!-- 1) - Image -->
    <div class="our-therapists__card__image text-center">
      <img
        class="img-fluid obj-img"
        :src="require(`@/assets/images/therapists/${img}`)"
        alt=""
      />
    </div>
    <!-- 2) - Info -->
    <div
      class="our-therapists__card__info text-capitalize py-3 px-2 bg-primary"
    >
      <!-- 1) - Title -->
      <h3 class="our-therapists__card__info__title weight-bolder text-mid">
        dr. {{ title }}
      </h3>
      <!-- 2) - Job -->
      <p
        class="our-therapists__card__info__job text-xxsmall m-0"
        v-text="job"
      />
      <!-- 3) - Other Options -->
      <div class="our-therapists__card__other">
        <!-- 1) -  -->
        <b-col class="d-flex align-items-center width-80 mx-auto">
          <!-- 1) - Rating -->
          <b-form-rating
            v-model="rating"
            class="p-0"
            readonly
            size="lg"
            variant="eighth"
            :no-border="true"
          ></b-form-rating>
          <!-- 2) - Total -->
          <div
            class="our-therapists__card__other__total d-flex align-items-center mt-2"
          >
            (
            <GSvg
              class="our-therapists__card--svg"
              name-icon="users"
              title="users"
            />
            <p class="mb-0 mx-1">
              {{ total }}
            </p>
            )
          </div>
        </b-col>
        <!-- 2) -  -->
        <b-col class="mt-2">
          <p class="our-therapists__card__other__price">
            {{ price }} EGP/Session
          </p>
        </b-col>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'TherapistsCard',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss">
//
.our-therapists__card {
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.07);

  // Info
  &__info {
    //
    &__title {
      color: var(--secondary);
    }

    //
    &__job {
      min-height: 50px;
      color: var(--sixth);
    }
  }

  // Other
  &__other {
    //
    &__price,
    &__total {
      color: var(--secondary);
    }
  }

  // svg
  &--svg {
    width: 20px;
    height: 20px;
    fill: var(--secondary);
  }

  //
  .form-control {
    background-color: transparent;
  }

  //////////////////////////
  //// Hover
  &:hover &__info {
    @media (hover: hover) {
      background-image: linear-gradient(to top, #046c54 57%, #045744, #033f31);
    }
  }

  //
  &:hover &__info__title,
  &:hover &__info__job,
  &:hover &__other__price,
  &:hover &__other__total {
    //
    @media (hover: hover) {
      color: var(--primary);
    }
  }

  //
  &:hover &--svg {
    //
    @media (hover: hover) {
      fill: var(--primary);
    }
  }
}
</style>
