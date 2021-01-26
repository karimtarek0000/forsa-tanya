<template>
  <b-col
    class="our-therapists__card shadow-card text-center position-relative flex-grow-0 overflow-hidden bg-primary rounded basis-30"
  >
    <!-- 1) - Image -->
    <div class="our-therapists__card__image text-center h-269">
      <img
        class="img-fluid obj-img"
        :src="require(`@/assets/images/therapists/${img}`)"
        alt=""
      />
    </div>

    <!-- 2) - Info -->
    <div
      class="our-therapists__card__info text-capitalize bg-primary h-188 py-2 px-2"
    >
      <!-- 1) - Title -->
      <h3
        class="our-therapists__card__info__title m-0 our-therapists__card__info--color weight-extraBold text-22"
      >
        dr. {{ title }}
      </h3>
      <!-- 2) - Job -->
      <p
        class="our-therapists__card__info__job weight-light text-14 m-0"
        v-text="job"
      />
      <!-- 3) - Other Options -->
      <b-row
        no-gutters
        class="our-therapists__card__other justify-content-center"
      >
        <!-- 1) -  -->
        <b-col cols="7" md="8" lg="9" class="d-flex h-33 align-items-center">
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
              class="svg-size svg-people our-therapists__card--svg"
              name-icon="people"
              title="people"
            />
            <p class="mb-0 mx-1 text-12">
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
            class="svg-other mx-2 our-therapists__card--svg"
            name-icon="mony"
            title="mony"
          />
          <!--  -->
          <div class="weight-bolder">
            <p class="m-0 text-14 our-therapists__card__info--color">250 EGP</p>
            <p
              class="m-0 text-12 our-therapists__card__info__sessions our-therapists__card__info--sessions text-capitalize"
            >
              /{{ $t('pages.home.session') }}
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
            class="mx-2 svg-other svg-session our-therapists__card--svg"
            name-icon="sessions"
            title="sessions"
          />
          <!--  -->
          <div class="weight-bolder">
            <p class="m-0 text-14 our-therapists__card__info--color">200</p>
            <p
              class="m-0 text-12 text our-therapists__card__info__sessions our-therapists__card__info--sessions text-capitalize"
            >
              {{ $t('pages.home.sessions') }}
            </p>
          </div>
        </b-col>
      </b-row>
    </div>

    <!-- 3) - Slot will be render actions card -->
    <slot name="actions" />
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
  transition: all 0.2s ease-in;
  height: auto;

  //
  @media (hover: hover) {
    height: 457px;
  }

  // Info
  &__info {
    position: relative;
    z-index: 1;
    transition: all 0.5s ease;
    will-change: transform;

    //
    @media (hover: hover) {
      //
      &::after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-image: linear-gradient(
          to top,
          #046c54 57%,
          #045744,
          #033f31
        );
        opacity: 0;
        will-change: transform;
        transition: all 0.5s ease;
      }
    }

    //
    &__job {
      min-height: 44px;
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

  //
  &__action {
    //
    @media (hover: hover) {
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
  }

  //
  .svg-people {
    width: 31px;
    height: 32px;
    fill: #317668;
  }

  .svg {
    //
    &-other {
      width: 40px;
      height: 30px;
    }

    //
    &-session {
      fill: #317666;
    }
  }

  //
  .form-control {
    background-color: transparent;
  }

  //////////////////////////
  //// Hover
  &:hover &__info::after {
    @media (hover: hover) {
      height: 100%;
      opacity: 1;
      z-index: -1;
    }
  }

  //
  &:hover {
    @media (hover: hover) {
      box-shadow: none;
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
  &:hover .svg-session,
  &:hover .svg-people {
    //
    @media (hover: hover) {
      fill: var(--primary);
    }
  }
}
</style>
