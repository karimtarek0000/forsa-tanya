<template>
  <b-form v-if="show" @submit="onSubmit" @reset="onReset">
    <!-- 1) - Label -->
    <label
      for="email"
      class="text-uppercase text-eleventh mb-3 weight-extraBold"
      >{{ $t('labels.updates') }}</label
    >
    <!-- 2) - Form row -->
    <b-form-row no-gutters class="align-items-end m-0 direction-ltr">
      <!-- 1) - Input Email -->
      <b-col cols="10" class="p-0">
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          :placeholder="$t('placeHolder.email')"
          class="border-0 rounded-left"
          autocomplete="off"
          dir="auto"
        >
        </b-form-input>
      </b-col>
      <!-- 2) - Button Submit -->
      <b-col cols="2" class="p-0">
        <b-button
          type="submit"
          class="w-100 rounded-right text-uppercase"
          variant="primary"
          >{{ $t('button.join') }}</b-button
        >
      </b-col>
    </b-form-row>
    <!-- 3) - Form Status, Like Error or Done -->
    <b-form-text class="mt-3">
      <p></p>
    </b-form-text>
  </b-form>
</template>

<script>
export default {
  name: 'FormFooter',
  data() {
    return {
      email: null,
      show: true,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style lang="scss"></style>
