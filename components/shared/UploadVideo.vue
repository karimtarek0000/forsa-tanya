<template>
  <!--  -->
  <div class="uploadVideo">
    <!--  -->
    <label for="uploadVideo">
      <GSvg name-icon="upload-video" title="upload video" />
      <p class="mb-0 text-13 weight-bolder text-primary">upload video</p>
      <p class="mb-0 text-12 text-thirtyThree">(maximum 2 mins)</p>
    </label>
    <!--  -->
    <input
      id="uploadVideo"
      class="d-none"
      type="file"
      accept="video/*"
      @change="getVideo"
    />
  </div>
</template>

<script>
export default {
  name: 'UploadVideo',
  methods: {
    // 1) - Get Video
    getVideo(e) {
      //
      if (e.target.files.length !== 0) {
        const files = e.target.files
        const video = document.createElement('video')
        video.preload = 'metadata'

        //
        video.onloadedmetadata = () => {
          window.URL.revokeObjectURL(video.src)
          const duration = video.duration

          // Run function Validate video
          this.validateVideo(duration, files)
        }

        //
        video.src = URL.createObjectURL(files[0])
      }
    },
    // 2) - Validate video
    validateVideo(duration, files) {
      //
      duration > 120
        ? this.$emit('uploadVideo', false)
        : this.$emit('uploadVideo', files)
    },
  },
}
</script>

<style lang="scss">
//
.uploadVideo {
  //
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 167px;
    height: 126px;
    border-radius: 8px;
    background-color: var(--sixth);

    //
    svg {
      width: 40px;
      height: 40px;
      fill: white;
    }
  }
}
</style>
