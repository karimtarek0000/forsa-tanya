<template>
  <b-row
    no-gutters
    class="all-therapists justify-content-between align-items-center mb-123 mt-55"
  >
    <TherapistsCard
      v-for="therapists in allTherapists"
      :key="therapists.id"
      :title="therapists['doctor_name']"
      :job="therapists['job_title']"
      :img="therapists.image"
      :total="0"
      :rating="therapists.rating"
      :price="therapists.price"
      class="mb-3 mb-lg-64"
    >
      <b-row
        slot="actions"
        no-gutters
        class="our-therapists__card__action d-flex align-items-center justify-content-center h-110 bg-primary mt-2 mb-5 mt-md-0 mb-md-0 px-1"
      >
        <!-- 1) - Video, View -->
        <b-col cols="12" class="d-flex px-1 align-items-center">
          <b-row no-gutters class="justify-content-between w-100">
            <!-- 1) - Video -->
            <b-col class="basis-47 flex-grow-0">
              <b-button
                pill
                variant="primary"
                class="w-100 hover-btn d-flex align-items-center justify-content-center border-sevententh mb-2 mb-md-0 text-sevententh text-14 weight-bolder text-capitalize"
              >
                <GSvg
                  name-icon="play"
                  title="play"
                  class="svg-13 svg-play mx-1 svg-video"
                />
                {{ $t('button.video') }}
              </b-button>
            </b-col>
            <!-- 2) - View -->
            <b-col class="basis-47 flex-grow-0">
              <b-button
                pill
                variant="primary"
                class="w-100 border-sevententh hover-btn d-flex align-items-center justify-content-center mb-2 mb-md-0 text-sevententh text-14 weight-bolder text-capitalize"
                :to="
                  localeRoute({
                    name: 'therapists-doctor',
                    params: {
                      doctor: therapists.id,
                    },
                  })
                "
              >
                <GSvg
                  name-icon="view"
                  title="view"
                  class="svg-13 mx-1 svg-view"
                />
                {{ $t('button.view') }}
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <!-- 2) - Book -->
        <b-col cols="12" class="d-flex align-items-center">
          <b-button
            pill
            variant="primary"
            class="w-100 weight-extraBold hover-btn-book text-capitalize text-sevententh text-18 shadow-btn btn-primary"
            >{{ $t('button.book') }}</b-button
          >
        </b-col>
      </b-row>
    </TherapistsCard>
    <!--  -->
    <div class="view-book position-fixed">
      <!--  -->
      <div class="view-book__wrapper position-absolute py-4 px-4">
        <!-- 1) All Informations -->
        <b-row no-gutters class="justify-content-center align-items-center">
          <!-- 1) - Image -->
          <b-col
            lg="4"
            class="basis-167 h-167 flex-grow-0 shadow-image rounded-circle overflow-hidden"
          >
            <img
              class="img-fluid obj-img"
              src="https://source.unsplash.com/user/erondu/1600x900"
              alt=""
            />
          </b-col>
          <!-- Info -->
          <b-col lg="5" class="text-center">
            <!-- 1) - Name -->
            <h3 class="m-0 text-secondary weight-extraBold text-20">
              {{ $t('placeHolder.dr') }}. sara ahmed
            </h3>
            <!-- 2) - Job -->
            <p class="text-eightenth mb-1 weight-bolder text-14">
              Psychotherapist
            </p>
            <!--  -->
            <b-col sm="5" lg="12" class="d-flex h-33 align-items-center mb-2">
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
                class="d-flex align-items-center mt-2"
                :style="{ direction: $i18n.locale === 'ar' ? 'ltr' : '' }"
              >
                (
                <GSvg class="svg-people" name-icon="people" title="people" />
                <p class="mb-0 mx-1 text-12">344</p>
                )
              </div>
            </b-col>
            <!--  -->
            <p class="text-15 weight-extraBold mb-1 text-secondary">
              250 EGP/Session
            </p>
            <!--  -->
            <b-col
              class="d-flex align-items-center justify-content-center px-0"
            >
              <!--  -->
              <GSvg
                class="mx-1 svg-39 svg-session flex-shrink-0"
                name-icon="sessions"
                title="sessions"
              />
              <!--  -->
              <p class="m-0 text-12 weight-bolder">
                200 {{ $t('pages.home.sessions') }}
              </p>
            </b-col>
          </b-col>
        </b-row>
        <!-- 2) Actions -->
        <b-row
          no-gutters
          class="mt-4 align-items-center justify-content-between"
        >
          <!-- 1) - Today -->
          <b-col lg="4" class="d-flex justify-content-center">
            <b-button
              pill
              variant="primary"
              class="w-90 border-third mb-2 mb-md-0 text-third text-14 weight-bolder text-capitalize"
            >
              today
            </b-button>
          </b-col>
          <!-- 2) - Tomorrow -->
          <b-col lg="4" class="d-flex justify-content-center">
            <b-button
              pill
              variant="primary"
              class="w-90 border-third mb-2 mb-md-0 text-third text-14 weight-bolder text-capitalize"
            >
              tomorrow
            </b-button>
          </b-col>
          <!-- 3) - Calendar -->
          <b-col class="d-flex justify-content-center align-items-center">
            <!-- 1) - Show Calendar -->
            <span
              v-if="true"
              class="shadow-calendar text-twentyTwo weight-bolder px-4 py-1"
              >21 Jun 2021</span
            >
            <!-- 2) -->
            <GSvg
              class="svg-calendar mx-2"
              name-icon="calendar"
              title="calendar"
            />
          </b-col>
        </b-row>
        <!--  -->
        <b-row></b-row>
      </div>
    </div>
  </b-row>
</template>

<script>
export default {
  name: 'AllTherapists',
  inject: ['allTherapists'],
  data() {
    return {
      rating: 3,
    }
  },
}
</script>

<style lang="scss">
//
.all-therapists {
  //
  .our-therapists__card {
    //
    &:hover .our-therapists__card__info {
      @media (hover: hover) {
        transform: translateY(-115px);
        box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.07);
      }
    }
  }

  //
  .svg-play {
    fill: var(--third);
  }

  //
  .svg-view,
  .svg-video {
    fill: var(--third);
  }

  //
  .hover-btn:hover {
    //
    @media (hover: hover) {
      background-color: var(--seventh);
      color: var(--primary) !important;
    }
  }

  //
  .hover-btn-book:hover {
    //
    @media (hover: hover) {
      background-color: var(--sevententh);
      color: var(--primary) !important;
    }
  }

  //
  .hover-btn:hover .svg-view,
  .hover-btn:hover .svg-video {
    //
    @media (hover: hover) {
      fill: var(--ninetenth);
    }
  }
}

.svg-people {
  width: 31px;
  height: 32px;
  fill: var(--twentyOne);
}

.svg-session {
  width: 25px;
  height: 25px;
  fill: var(--eightenth);
}

.svg-calendar {
  width: 39px;
  height: 41px;
}

//
.view-book {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.5);
  z-index: 9999;

  //
  &__wrapper {
    width: 673px;
    height: 516px;
    background-color: white;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
  }
}
</style>
