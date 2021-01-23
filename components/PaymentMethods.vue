<template>
  <section class="payment my-5 my-lg-10">
    <!-- Start Container -->
    <b-container>
      <!-- Payment Info -->
      <b-col class="text-center">
        <!--  -->
        <h3 class="text-fifth text-large weight-bolder text-capitalize">
          payment method
        </h3>
        <!--  -->
        <p class="text-sixth">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </b-col>
      <!-- Start Row -->
      <b-row
        no-gutters
        class="align-items-center justify-content-center mt-3 mt-lg-5"
      >
        <b-col md="4" lg="3" class="text-center mb-2 mb-md-0">
          <GImage src-image="payment/visa.png" alt="visa" />
        </b-col>
        <b-col md="4" lg="3" class="text-center mb-4 mb-md-0">
          <GImage src-image="payment/master-card.png" alt="master-card" />
        </b-col>
        <b-col md="4" lg="3" class="text-center mb-4 mb-md-0">
          <GImage src-image="payment/fawry.png" alt="fawry" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'PaymentMethods',
}
</script>

<style></style>
