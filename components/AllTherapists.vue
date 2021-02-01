<template>
  <b-row
    no-gutters
    class="all-therapists justify-content-between align-items-center mb-123 mt-55"
  >
    <!-- 1) - Therapists Card -->
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
            @click="checkAndOpenBook(therapists.id)"
            >{{ $t('button.book') }}</b-button
          >
        </b-col>
      </b-row>
    </TherapistsCard>
    <!-- 2) - Book Now -->
    <LazyBookNow
      v-if="show"
      :id="idDoctor"
      :show="show"
      @closeViewBook="show = $event"
    />
  </b-row>
</template>

<script>
//
//
export default {
  name: 'AllTherapists',
  inject: ['allTherapists'],
  data() {
    return {
      show: false,
      idDoctor: null,
    }
  },
  methods: {
    //
    checkAndOpenBook(id) {
      this.show = true
      this.idDoctor = id
    },
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

  /////////////////////////
  // SVG
  .svg-play {
    fill: var(--third);
  }

  //
  .svg-view,
  .svg-video {
    fill: var(--third);
  }

  /////////////////////////
  // HOVER
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
</style>
