<template>
  <b-row
    no-gutters
    class="card__wrapper py-4 justify-content-between justify-content-lg-center"
  >
    <Card />
    <Card />
  </b-row>
</template>

<script>
export default {
  name: 'UpComing',
}
</script>

<style lang="scss">
//
.card__wrapper {
  padding: 0 10px;
  @media (min-width: 1199px) {
    padding: 0 70px;
  }
}
</style>
