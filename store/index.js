import * as Type from '../type/index'

//
// eslint-disable-next-line import/namespace
export const state = () => ({
  social: null,
  alert: {
    status: false,
    typeMessage: null,
    message: null,
  },
  confirm: {
    status: null,
    message: null,
    element: null,
  },
  statusConfirm: null,
  titlePage: null,
  userLogIn: null,
})

// 1) - mutations
export const mutations = {
  // 1) - Change from state => social
  changeAllSocial(state, payload) {
    state.social = payload
  },
  // 2) - Change status alert
  changeStatusAlert(state, payload) {
    state.alert = payload
  },
  // 3) - Change title page
  changeTitlePage(state, payload) {
    state.titlePage = payload
  },
  // 4) Change status confirm
  changeStatusConfirm(state, payload) {
    state.statusConfirm = payload
  },
  // 5) - Change confirm
  changeConfirm(state, payload) {
    state.confirm = payload
  },
}

// 2) - Getters
export const getters = {
  // 1) Get Language
  getLang(state) {
    return state.i18n.locale
  },
}

// 3) - Actions
export const actions = {
  //
  async nuxtServerInit({ dispatch }) {
    // 1) - Socia Media
    await dispatch(Type.SOCIAL_MEDIA)
  },

  // 1) - Get social media footer
  async [Type.SOCIAL_MEDIA]({ commit }) {
    // 1)
    const { Data } = await this.$axios.$get('/social')
    // 2)
    commit('changeAllSocial', Data)
  },
}
