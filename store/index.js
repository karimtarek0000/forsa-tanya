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
  userInfo: {
    status: null,
    name: null,
  },
})

// 1) - mutations
export const mutations = {
  // 1) - Change from state => social
  [Type.CHANGE_ALL_SOCIAL](state, payload) {
    state.social = payload
  },
  // 2) - Change status alert
  [Type.CHANGE_STATEUS_ALERT](state, payload) {
    state.alert = payload
  },
  // 3) - Change title page
  [Type.CHANGE_TITLE_PAGE](state, payload) {
    state.titlePage = payload
  },
  // 4) Change status confirm
  [Type.CHANGE_STATUS_CONFIRM](state, payload) {
    state.statusConfirm = payload
  },
  // 5) - Change confirm
  [Type.CHANGE_CONFIRM](state, payload) {
    state.confirm = payload
  },
  // 6) - Change user info
  [Type.CHANGE_USER_INFO](state, payload) {
    state.userInfo = payload
  },
}

// 2) - Getters
export const getters = {
  // 1) Get Language
  getLang(state) {
    return state.i18n.locale
  },
  //
  statusUserInfo(state) {
    return state.userInfo.status
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
    const data = await this.$axios.$get('/social')
    // 2)
    commit(Type.CHANGE_ALL_SOCIAL, data)
  },
}
