<template>
  <b-row no-gutters class="p-0 justify-content-between basis-130">
    <!-- 1) - Options User -->
    <b-col lg="5">
      <template v-if="userIn">
        <b-row
          no-gutters
          class="options-user justify-content-between align-items-center h-100"
        >
          <!-- 1) - Log out -->
          <b-link
            class="text-capitalize text-16 weight-bolder text-primary p-0 text-decoration-none"
            >log out</b-link
          >
          <!-- 2) - Profile -->
          <b-link
            class="text-capitalize text-16 p-0 weight-bolder text-primary text-decoration-none"
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
          class="text-capitalize text-16 weight-bolder text-primary text-decoration-none"
          :to="localePath('sign-in')"
          >{{ $t('navbar.signIn') }}</b-link
        >
      </div>
    </b-col>
    <!-- 2) - Change Lang -->
    <b-col lg="4" class="flex-shrink-0">
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
