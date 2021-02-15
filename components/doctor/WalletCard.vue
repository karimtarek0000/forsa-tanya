<template>
  <!--  -->
  <b-row
    no-gutters
    class="bg-thirtyFour px-2 mb-29 align-items-center justify-content-between raduis"
    @click="$emit('sendRecived')"
  >
    <!-- 1 -->
    <b-col lg="6" class="text-capitalize text-center">
      <!--  -->
      <div class="d-flex justify-content-center mb-3">
        <!--  -->
        <p class="text-17 mb-0 text-eightenth weight-bolder user-select">
          from
          <span class="text-18 text-secondary weight-bolder">21 Jun 2021</span>
        </p>
        <!--  -->
        <p class="text-17 mb-0 text-eightenth weight-bolder user-select mx-3">
          to
          <span class="text-18 text-secondary weight-bolder">21 Fab 2021</span>
        </p>
      </div>
      <!--  -->
      <p class="text-16 weight-bolder text-eightenth user-select mb-0">value</p>
      <p class="text-30 text-secondary mt-n2 user-select weight-extraBold mb-0">
        5000 <span class="weight-bolder">EGP</span>
      </p>
    </b-col>
    <!-- 2 -->
    <b-col lg="3">
      <GImage class="obj-image-height" src-image="other/5.jpg" alt="test" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'WalletCard',
}
</script>

<style>
/*  */
.raduis {
  border-radius: 20px;
}
</style>
