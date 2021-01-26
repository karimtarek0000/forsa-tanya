//
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
    await dispatch('OurTherapists')
    // 2) - Socia Media
    await dispatch('socialMedia')
  },

  // 1) - Get Our therapists
  async OurTherapists({ commit, getters }) {
    //
    const dataOurTherapists = await this.$axios.$get(
      '/doctors',
      getters.getLang
    )
    //
    commit('changeOurTherapists', dataOurTherapists.Data)
  },

  // 2) - Get social media footer
  async socialMedia({ commit, getters }) {
    //
    const dataSocial = await this.$axios.$get('/social', getters.getLang)
    //
    commit('changeAllSocial', dataSocial.Data)
  },
}
