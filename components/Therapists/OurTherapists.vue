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
          v-for="(card, index) in therapists"
          :key="index"
          :img="card.img"
          :title="card.title"
          :job="card.job"
          :total="card.total"
          :rating="card.rating"
          :price="card.price"
          class="mb-3 mb-lg-0"
        />
      </b-row>

      <!-- 3) - Therapists get started -->
      <b-col
        class="our-therapists__getStarted width-80 mt-5 mx-auto text-center"
      >
        <p class="text-ninth weight-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <!--  -->
        <ButtonPrimary
          :title="$t('button.getStarted')"
          class="mx-auto"
          path="about-us"
        />
      </b-col>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'OurTherapists',
  data() {
    return {
      therapists: [
        {
          img: '1.png',
          title: 'sara ahmed',
          job: 'psychotherapist',
          rating: 3,
          total: 300,
          price: 250,
        },
        {
          img: '2.png',
          title: 'ahmed ali',
          job: 'doctorate mental health and psychological therapy',
          rating: 3,
          total: 300,
          price: 266,
        },
        {
          img: '3.png',
          title: 'alaa amr',
          job: 'mental health consultant',
          rating: 4,
          total: 3.245,
          price: 240,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
//
.our-therapists {
  //
  @media (min-width: 600px) {
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
}
</style>
