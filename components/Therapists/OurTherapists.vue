<template>
  <section class="our-therapists mt-lg-10">
    <!-- Start Container -->
    <b-container class="p-lg-0">
      <!-- 1) - Therapists Info -->
      <div class="our__therapists__info text-capitalize text-center mb-5">
        <h2 class="text-large weight-bolder text-fifth">Our Therapists</h2>
        <p class="text-small text-sixth">
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
        />
      </b-row>

      <!-- 3) -  -->
      <b-col class="width-80 mt-5 mx-auto text-center">
        <p class="text-ninth">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <!--  -->
        <ButtonPrimary class="mx-auto" path="about-us" />
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

<style></style>
