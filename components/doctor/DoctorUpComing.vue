<template>
  <b-col
    class="card-sessions basis-100 flex-grow-0 mb-20 mb-lg-40 px-2 py-2 bg-thirtyOne"
  >
    <b-row no-gutters class="justify-content-between align-items-center h-100">
      <!-- 1 -->
      <b-col lg="6" class="d-flex align-items-center justify-content-center">
        <!--  -->
        <b-row
          no-gutters
          class="h-100 w-100 justify-content-center align-items-center"
        >
          <!-- 1) - Image -->
          <b-col
            cols="12"
            lg="6"
            class="d-flex align-items-center justify-content-center"
          >
            <div class="image mx-auto rounded-circle overflow-hidden">
              <GImage src-image="other/3.jpg" alt="test" />
            </div>
          </b-col>
          <!-- 2) - Other info -->
          <b-col cols="12" lg="6" class="text-center">
            <h3 class="text-22 weight-extraBold text-secondary">Hend Sayed</h3>
            <p class="text-eightenth mb-0 mt-n2 text-17 weight-bolder">
              25 years
            </p>
          </b-col>
        </b-row>
      </b-col>
      <!-- 2 -->
      <b-col lg="5" class="text-center align-self-stretch">
        <!--  -->
        <b-row
          no-gutters
          class="justify-content-center align-content-around h-100"
        >
          <!-- 1 -->
          <b-col
            cols="12"
            class="d-flex align-items-center justify-content-center justify-content-lg-end my-2 my-lg-0"
          >
            <p class="text-17 mb-0 weight-bolder text-secondary">21 Jun 2021</p>
            <p class="text-thirtyTwo mb-0 text-15 weight-light mx-1">
              (09:00 Am)
            </p>
          </b-col>
          <!-- 2 -->
          <b-col cols="11" lg="12">
            <!--  -->
            <b-row no-gutters class="h-100">
              <!-- Cancel -->
              <b-col class="mx-2">
                <b-button
                  pill
                  variant="third"
                  class="w-100 py-0 text-primary text-16 weight-bolder text-capitalize"
                >
                  cancel
                </b-button>
              </b-col>
              <!-- Start -->
              <b-col class="mx-2">
                <b-button
                  pill
                  variant="third"
                  class="w-100 py-0 text-primary text-16 weight-bolder text-capitalize"
                >
                  start
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
export default {
  name: 'DoctorUpComing',
}
</script>

<style>
/*  */
.image {
  width: 147px;
  height: 147px;
}
</style>
