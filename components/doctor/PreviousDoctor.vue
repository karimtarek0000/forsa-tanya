<template>
  <DataLoader
    class="minHeight"
    :end-point="`/mySessionsDoctor/?_page=${page}&_limit=2`"
  >
    <!-- Loading -->
    <template #loading>
      <div class="lds-dual-ring"></div>
    </template>
    <!-- Data -->
    <template #data="{ data: allData }">
      <b-row
        no-gutters
        class="setScrollAuto my-2 mt-lg-5 mb-lg-2 justify-content-between"
      >
        <DoctorPreviousCard
          v-for="(data, i) in allData"
          :key="i"
          :data="data"
        />
      </b-row>
    </template>
  </DataLoader>
</template>

<script>
export default {
  name: 'PreviousDoctor',
  props: {
    page: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid transparent;
  border-color: #2fa18b transparent #2fa18b transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.minHeight {
  height: 500px;
}

.setScrollAuto {
  max-height: 500px;
  overflow-y: auto;
  @include changeScrollBar();
}
</style>
