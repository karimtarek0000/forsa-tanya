<template>
  <b-row
    no-gutters
    class="all-therapists justify-content-between align-items-center mb-123 mt-55"
  >
    <TherapistsCard
      v-for="(card, index) in therapists"
      :key="index"
      :img="card.img"
      :title="card.title"
      :job="card.job"
      :total="card.total"
      :rating="card.rating"
      :price="card.price"
      class="mb-3 mb-lg-64"
    >
      <b-row
        slot="actions"
        no-gutters
        class="our-therapists__card__action d-flex align-items-center justify-content-center flex-column h-110 bg-primary px-1"
      >
        <b-col class="d-flex align-items-center">
          <b-row no-gutters class="justify-content-between w-100">
            <!--  -->
            <b-col class="basis-47 flex-grow-0">
              <b-button
                pill
                variant="facebook"
                class="w-100 bg-primary border-sevententh text-sevententh text-14 weight-bolder text-capitalize"
                >video</b-button
              >
            </b-col>
            <!--  -->
            <b-col class="basis-47 flex-grow-0">
              <b-button
                pill
                variant="facebook"
                class="w-100 bg-primary border-sevententh text-sevententh text-14 weight-bolder text-capitalize"
                >view</b-button
              >
            </b-col>
          </b-row>
        </b-col>
        <!--  -->
        <b-col class="d-flex align-items-center">
          <b-button
            pill
            variant="primary"
            class="w-100 weight-extraBold text-capitalize text-sevententh text-18 shadow-btn btn-primary"
            >book</b-button
          >
        </b-col>
      </b-row>
    </TherapistsCard>
  </b-row>
</template>

<script>
export default {
  name: 'AllTherapists',
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
}
</style>
