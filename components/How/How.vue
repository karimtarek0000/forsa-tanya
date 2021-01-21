<template>
  <section class="how mt-5">
    <!-- Start Container -->
    <b-container class="p-lg-0">
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
  &__info {
  }
}
</style>
