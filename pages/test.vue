<template>
  <div class="my-5 px-5">
    <CutText :text="text" :target-position="70">
      <template #text="{ displayText }">
        <p>{{ displayText }}</p>
      </template>
    </CutText>
  </div>
</template>

<script>
export default {
  layout: 'd',
  data() {
    return {
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nemo
      quidem nam doloribus corrupti quo dolore molestias, itaque eum quisquam
      aliquam eligendi asperiores ex perferendis provident. Similique neque hic
      deserunt!`,
    }
  },
  head() {
    return {
      title: 'testing',
      // script: [
      //   {
      //     src:
      //       'https://maps.googleapis.com/maps/api/js?key=AIzaSyDKys5PAjLukCgYDFGqLBJgizPfsBfnABM&libraries=places',
      //     defer: true,
      //     hid: 'map',
      //   },
      // ],
    }
  },
}
</script>

<style></style>
