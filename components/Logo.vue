<template>
  <img class="logo" :src="require(`@/assets/images/logo/${srcImage}`)" alt="" />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    srcImage: {
      type: String,
      default: 'logo2.png',
    },
  },
}
</script>

<style lang="scss">
// Logo
.logo {
  width: 56px;
}
</style>
