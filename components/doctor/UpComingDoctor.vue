<template>
  <b-row no-gutters class="mt-2 mt-lg-5 justify-content-between">
    <!--  -->
    <template v-if="status">
      <DoctorUpComing />
      <DoctorUpComing />
    </template>
    <!--  -->
    <template v-else>
      <!--  -->
      <Empty img="how/3.png" title="empty" />
      <!--  -->
      <b-col cols="12">
        <b-button
          class="mx-auto px-5 py-1 my-3 w-448 text-14 text-primary text-capitalize d-block"
          pill
          variant="third"
          >{{ $t('button.firstSession') }}</b-button
        >
      </b-col>
    </template>
  </b-row>
</template>

<script>
export default {
  name: 'UpComingDoctor',
  data() {
    return {
      status: true,
    }
  },
}
</script>

<style></style>
