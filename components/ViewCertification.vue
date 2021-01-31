<template>
  <div class="view position-fixed" @click="$emit('close', false)">
    <div class="view-certifications position-absolute">
      <img class="img-fluid obj-img" src="@/assets/images/s.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCertification',
}
</script>

<style></style>
