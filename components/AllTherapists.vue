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
                class="w-100 d-flex align-items-center justify-content-center border-sevententh mb-2 mb-md-0 text-sevententh text-14 weight-bolder text-capitalize"
              >
                <GSvg
                  name-icon="play"
                  title="play"
                  class="svg-13 svg-play mx-1"
                />
                {{ $t('button.video') }}
              </b-button>
            </b-col>
            <!-- 2) - View -->
            <b-col class="basis-47 flex-grow-0">
              <b-button
                pill
                variant="primary"
                class="w-100 border-sevententh d-flex align-items-center justify-content-center mb-2 mb-md-0 text-sevententh text-14 weight-bolder text-capitalize"
                :to="
                  localeRoute({
                    name: 'therapists-doctor',
                    params: {
                      doctor: therapists.id,
                    },
                  })
                "
              >
                <GSvg name-icon="view" title="view" class="svg-13 mx-1" />
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
            class="w-100 weight-extraBold text-capitalize text-sevententh text-18 shadow-btn btn-primary"
            >{{ $t('button.book') }}</b-button
          >
        </b-col>
      </b-row>
    </TherapistsCard>
  </b-row>
</template>

<script>
export default {
  name: 'AllTherapists',
  inject: ['allTherapists'],
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
}
</style>
