<template>
  <section class="our-therapists position-relative mt-4 mt-lg-10">
    <!-- Start Container -->
    <b-container fluid="lg" class="px-2 px-lg-0">
      <!-- 1) - Therapists Info -->
      <div class="our__therapists__info text-capitalize text-center mb-5">
        <h2 class="text-40 weight-bolder text-fifth">Our Therapists</h2>
        <p class="text-18 text-sixth weight-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>

      <!-- 2) - Therapists Box -->
      <b-row no-gutters class="justify-content-between align-items-center">
        <TherapistsCard
          v-for="therapists in dataOurTherapists"
          :key="therapists.id"
          :title="therapists['doctor_name']"
          :job="therapists['job_title']"
          :img="therapists.image"
          :total="0"
          :rating="therapists.rating"
          :price="therapists.price"
          class="mb-3"
        />
      </b-row>

      <!-- 3) - Therapists get started -->
      <b-col class="our-therapists__getStarted mt-5 mx-auto text-center">
        <p class="text-ninth weight-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <!--  -->
        <ButtonPrimary
          :title="$t('button.getStarted')"
          class="mx-auto"
          path="therapists"
        />
      </b-col>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'OurTherapists',
  inject: ['dataOurTherapists'],
}
</script>

<style lang="scss">
//
.our-therapists {
  //
  @media (min-width: 992px) {
    //
    &::after,
    &::before {
      content: '';
      position: absolute;
      display: block;
    }
    //
    &::after {
      width: 426px;
      height: 262px;
      bottom: -170px;
      left: 0;
      height: 200px;
      background-color: var(--tenth);
      z-index: -2;
    }
    //
    &::before {
      width: 480px;
      height: 173px;
      bottom: -222px;
      left: 251px;
      border: 1px dashed var(--fortenth);
      z-index: -1;
    }
  }
  //
  &__getStarted {
    width: 80%;
    //
    @media (max-width: 600px) {
      width: 100%;
    }
  }
}
</style>
