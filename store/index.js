import * as Type from '../type/index'

//
// eslint-disable-next-line import/namespace
export const state = () => ({ social: null, ourTherapists: null })
// 1) - mutations
export const mutations = {
  // 1) - Change from state => ourTherapists
  changeOurTherapists(state, payload) {
    state.ourTherapists = payload
  },

  // 2) - Change from state => social
  changeAllSocial(state, payload) {
    state.social = payload
  },
}

// 2) - Getters
export const getters = {
  //
  getLang(state) {
    return {
      headers: {
        'Accept-Language': state.i18n.locale,
      },
    }
  },
}

// 3) - Actions
export const actions = {
  //
  async nuxtServerInit({ dispatch }) {
    // 1) - Our Therapists
    await dispatch(Type.OUR_THERAPISTS)
    // 2) - Socia Media
    await dispatch(Type.SOCIAL_MEDIA)
  },

  // 1) - Get Our therapists
  async [Type.OUR_THERAPISTS]({ commit, getters }) {
    // 1)
    const { Data } = await this.$axios.$get('/doctors', getters.getLang)
    // 2)
    commit('changeOurTherapists', Data)
  },

  // 2) - Get social media footer
  async [Type.SOCIAL_MEDIA]({ commit, getters }) {
    // 1)
    const { Data } = await this.$axios.$get('/social', getters.getLang)
    // 2)
    commit('changeAllSocial', Data)
  },
}
