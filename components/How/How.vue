<template>
  <section class="how mt-5 mt-lg-10 position-relative">
    <!-- Sudo element -->
    <span class="how__sudo-element position-absolute"></span>
    <!-- Start Container -->
    <b-container fluid="lg" class="px-2 px-lg-0">
      <!-- 1) - How Info -->
      <div class="how__info text-capitalize text-center mb-5">
        <h2 class="text-40 weight-bolder text-fifth">how forsa tanya works</h2>
        <p class="text-18 text-sixth">3 simple steps to get your therapy</p>
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
  @media (min-width: 992px) {
    // Sudo element
    &__sudo-element {
      display: block;
      width: 156px;
      bottom: -170px;
      right: -5px;
      height: 254px;
      background-color: var(--tenth);
      z-index: -2;

      //
      &::after,
      &::before {
        content: '';
        position: absolute;
        display: block;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px dashed var(--fortenth);
        z-index: -1;
      }

      //
      &::after {
        width: 440px;
        height: 173px;
      }

      //
      &::before {
        width: 300px;
        height: 120px;
      }
    }
    // After
    &::after {
      content: '';
      position: absolute;
      display: block;
      top: -90%;
      right: 0;
      width: 683px;
      height: 644px;
      background-color: var(--tenth);
      z-index: -1;
    }
  }
}
</style>
