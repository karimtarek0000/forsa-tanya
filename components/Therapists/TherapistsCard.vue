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
      <h3
        class="our-therapists__card__info__title our-therapists__card__info--color weight-bolder text-mid"
      >
        dr. {{ title }}
      </h3>
      <!-- 2) - Job -->
      <p
        class="our-therapists__card__info__job text-xxsmall m-0"
        v-text="job"
      />
      <!-- 3) - Other Options -->
      <b-row
        no-gutters
        class="our-therapists__card__other justify-content-center"
      >
        <!-- 1) -  -->
        <b-col
          cols="7"
          md="8"
          lg="9"
          class="d-flex align-items-center direction-ltr"
        >
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
            class="our-therapists__card__other__total d-flex align-items-center mt-2 our-therapists__card__info--color"
            :style="{ direction: $i18n.locale === 'ar' ? 'ltr' : '' }"
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
      </b-row>
      <!-- 4) - Our Price and Sessions -->
      <b-row no-gutters class="justify-content-between mt-3">
        <!--  -->
        <b-col
          cols="5"
          class="d-flex align-items-center justify-content-center our-therapists__card__info--color"
        >
          <!--  -->
          <GSvg
            class="our-therapists__card--svg mx-2"
            name-icon="mony"
            title="mony"
          />
          <!--  -->
          <div class="weight-bolder">
            <p class="m-0 text-xxsmall our-therapists__card__info--color">
              250 EGP
            </p>
            <p
              class="m-0 text-xxxsmall our-therapists__card__info__sessions our-therapists__card__info--sessions text-capitalize"
            >
              {{ $t('pages.home.session') }}
            </p>
          </div>
        </b-col>
        <!--  -->
        <b-col
          cols="5"
          class="d-flex align-items-center justify-content-center"
        >
          <!--  -->
          <GSvg
            class="our-therapists__card--svg mx-2"
            name-icon="sessions"
            title="sessions"
          />
          <!--  -->
          <div class="weight-bolder">
            <p class="m-0 text-xxsmall our-therapists__card__info--color">
              200
            </p>
            <p
              class="m-0 text-xxxsmall text our-therapists__card__info__sessions our-therapists__card__info--sessions text-capitalize"
            >
              {{ $t('pages.home.sessions') }}
            </p>
          </div>
        </b-col>
      </b-row>
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
    &__job {
      min-height: 50px;
    }
    //
    &__job,
    &__sessions {
      color: var(--sixth);
    }

    //
    &--color {
      color: var(--secondary);
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
    width: 25px;
    height: 25px;
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
  &:hover &__info--color,
  &:hover &__info__job,
  &:hover &__info--sessions {
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
