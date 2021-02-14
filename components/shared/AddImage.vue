<template>
  <div v-if="type === 'icon'" class="add-image add-image-1 position-absolute">
    <!--  -->
    <label for="addImage-1">
      <GSvg name-icon="edit" title="edit image" />
    </label>
    <!--  -->
    <input id="addImage-1" type="file" accept="image/*" @change="addImage" />
  </div>
  <!--  -->
  <div v-else class="add-image add-image-2">
    <!--  -->
    <label
      for="addImage-2"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <GSvg name-icon="add-image" title="add image" />
      <p class="mb-0 text-primary text-14">add photo</p>
    </label>
    <!--  -->
    <input id="addImage-2" type="file" accept="image/*" @change="addImage" />
  </div>
</template>

<script>
export default {
  name: 'AddImage',
  props: {
    type: {
      type: String,
      default: 'icon',
    },
  },
  methods: {
    //
    addImage(e) {
      if (e.target.files.length !== 0) {
        this.$emit('addImage', e.target.files)
      }
    },
  },
}
</script>

<style lang="scss">
//
.add-image {
  input {
    display: none;
  }
}

//
.add-image-1 {
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
}

//
.add-image-2 {
  margin-right: 40px;
  //
  label {
    width: 167px;
    height: 126px;
    background-color: var(--sixth);
    margin-bottom: 0;
    border-radius: 8px;

    //
    svg {
      width: 40px;
      height: 40px;
      fill: white;
    }
  }
}
</style>
