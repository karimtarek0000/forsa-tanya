<template>
  <b-row no-gutters class="p-0 justify-content-between">
    <!-- 1) - Options User -->
    <b-col>
      <template v-if="userIn">
        <b-row
          no-gutters
          class="options-user justify-content-between align-items-center h-100"
        >
          <!-- 1) - Log out -->
          <b-link
            class="text-capitalize text-small weight-bolder text-secondary p-0 text-decoration-none"
            >log out</b-link
          >
          <!-- 2) - Profile -->
          <b-link
            class="text-capitalize text-small p-0 weight-bolder text-secondary text-decoration-none"
            :to="localePath('sign-in')"
            >profile</b-link
          >
        </b-row>
      </template>
      <div
        v-else
        class="d-flex justify-content-center align-items-center h-100"
      >
        <b-link
          class="text-capitalize text-small weight-bolder text-secondary text-decoration-none"
          :to="localePath('sign-in')"
          >sign in</b-link
        >
      </div>
    </b-col>
    <!-- 2) - Change Lang -->
    <b-col col lg="3" class="ml-2 flex-shrink-0">
      <ChangeLang />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'OptionsUser',
  data() {
    return {
      userIn: false,
    }
  },
}
</script>

<style>
.options-user {
  width: 130px;
}
</style>
