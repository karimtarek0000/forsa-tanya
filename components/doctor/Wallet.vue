<template>
  <div>
    <!-- 1) If not data will be render empty -->
    <template v-if="s">
      <!--  -->
      <Empty img="other/4.jpg" alt="empty" />
      <!--  -->
      <b-col cols="12">
        <b-button
          class="mx-auto px-5 py-1 my-2 w-448 text-14 text-primary text-capitalize d-block"
          pill
          variant="third"
          >{{ $t('button.schedule') }}</b-button
        >
      </b-col>
    </template>
    <!-- 2) - If exsist data will be rendring -->
    <template v-else>
      <!-- 1) - Header -->
      <div class="text-center my-3 my-lg-29 user-select">
        <p class="text-18 mb-0 weight-extraBold text-secondary">
          {{ $t('labels.youHave') }}
        </p>
        <p class="text-35 mb-0 mt-n1 weight-extraBold text-eightenth">
          2000.00 <span class="mx-3">{{ $t('placeHolder.egp') }}</span>
        </p>
      </div>
      <!-- 2) - Render all wallet card -->
      <b-row no-gutters class="justify-content-between">
        <b-col class="basis-100 flex-grow-0">
          <WalletCard @sendRecived="ss" />
        </b-col>
        <b-col class="basis-100 flex-grow-0">
          <WalletCard @sendRecived="ss" />
        </b-col>
      </b-row>
    </template>
    <!-- 3) - Model preview image -->
    <ModelForm
      v-if="closeScreenChangePassword"
      slot="other"
      @closeFullScreen="closeScreenChangePassword = $event"
    >
      <!--  -->
      <GImage class="obj-image-height" src-image="other/5.jpg" alt="testing" />
    </ModelForm>
  </div>
</template>

<script>
export default {
  name: 'Wallet',
  data() {
    return {
      s: false,
      closeScreenChangePassword: false,
    }
  },
  methods: {
    ss() {
      this.closeScreenChangePassword = true
    },
  },
}
</script>
