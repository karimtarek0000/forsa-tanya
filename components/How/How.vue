<template>
  <section class="how mt-5 position-relative">
    <!-- Start Container -->
    <b-container fluid="lg" class="px-2 px-lg-0">
      <!-- 1) - How Info -->
      <div class="how__info text-capitalize text-center mb-5">
        <h2 class="text-large weight-bolder text-fifth">
          how forsa tanya works
        </h2>
        <p class="text-small text-sixth">3 simple steps to get your therapy</p>
      </div>

      <!-- 2) - How Box -->
      <b-row no-gutters class="justify-content-between align-items-end">
        <!--  -->
        <HowBox
          v-for="(card, index) in how"
          :key="index"
          :img="card.img"
          :title="card.title"
          :description="card.description"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'How',
  data() {
    return {
      how: [
        {
          img: '1.png',
          title: 'choose your doctor',
          description: 'choose your therapist from therapist list',
        },
        {
          img: '2.png',
          title: 'Book Your Session',
          description: 'choose your therapist from therapist list',
        },
        {
          img: '3.png',
          title: 'Start Your Session',
          description: 'choose your therapist from therapist list',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
//
.how {
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
      width: 156px;
      bottom: -170px;
      right: 0;
      height: 254px;
      background-color: var(--tenth);
      z-index: -2;
    }
    //
    &::before {
      width: 440px;
      height: 173px;
      bottom: -134px;
      right: 70px;
      border: 1px dashed var(--fortenth);
      z-index: -1;
    }
  }
}
</style>
