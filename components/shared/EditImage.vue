<template>
  <div class="edit-image position-absolute">
    <!--  -->
    <label for="addImage">
      <GSvg name-icon="edit" title="edit image" />
    </label>
    <!--  -->
    <input id="addImage" type="file" accept="image/*" @change="getImage" />
  </div>
</template>

<script>
export default {
  name: 'EditImage',
  methods: {
    getImage(e) {
      if (e.target.files.length !== 0) {
        this.$emit('getNewImage', e.target.files)
      }
    },
  },
}
</script>

<style lang="scss">
//
.edit-image {
  top: 28px;
  right: 34px;
  overflow: hidden;

  //
  svg {
    width: 30px;
    height: 30px;
  }

  label {
    cursor: pointer;
  }

  input {
    display: none;
  }
}
</style>
