import * as Type from '@/type/index'
import Cookie from 'js-cookie'

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
  // 2) Init auth
  [Type.INIT_AUTH]({ commit }, req) {
    if (req) {
      // 1) -
      const getHeader = req.headers.cookie

      // 2) - Get token from cookie
      const getToken = getHeader
        .split(';')
        .find((cookie) => cookie.trim().startsWith('token='))

      // 3) - Get name from cookie
      const getName = getHeader
        .split(';')
        .find((cookie) => cookie.trim().startsWith('name='))

      if (!getToken || !getName) return

      // 4) - Finaly set all data token and name in state
      commit(Type.CHANGE_USER_INFO, {
        status: getToken.split('=')[1],
        name: getName.split('=')[1],
      })
    } else {
      const getName = localStorage.getItem('name')
      const getToken = localStorage.getItem('token')

      //
      if (getName && getToken) {
        commit(Type.CHANGE_USER_INFO, {
          status: getToken,
          name: getName,
        })
      }
    }
  },
  // 3) - Log out
  [Type.LOG_OUT]({ commit }) {
    Cookie.remove('name')
    Cookie.remove('token')
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    commit(Type.CHANGE_USER_INFO, { status: null, name: null })
  },
}
