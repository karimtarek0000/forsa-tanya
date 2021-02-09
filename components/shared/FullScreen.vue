<template>
  <div class="full-screen position-fixed">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FullScreen',
}
</script>

<style lang="scss">
//
.full-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8000;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
