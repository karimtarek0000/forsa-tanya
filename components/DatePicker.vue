<template>
  <div>
    <div class="datepicker-trigger">
      <input
        id="datepicker-trigger"
        type="text"
        placeholder="Select dates"
        :value="formatDates(dateOne)"
      />

      <AirbnbStyleDatepicker
        :trigger-element-id="'datepicker-trigger'"
        :mode="'single'"
        :fullscreen-mobile="false"
        :date-one="dateOne"
        :months-to-show="1"
        :enabled-dates="ard"
        @date-one-selected="
          (val) => {
            dateOne = val
          }
        "
      />
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  data() {
    return {
      dateFormat: 'D MMM',
      dateOne: '',
      ard: ['2021-02-19', '2021-02-20'],
    }
  },
  methods: {
    formatDates(dateOne) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      return formattedDates
    },
  },
}
</script>
