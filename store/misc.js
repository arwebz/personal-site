import { keyBy } from 'lodash'

export const state = () => ({
  misc: {}
})

export const mutations = {
  set (state, misc) {
    state.misc = keyBy(misc, item => item.permalink.slice(1))
  }
}

export const getters = {
  get: (state) => (slug) => {
    return state.misc[slug]
  }
}

export const actions = {
  async fetchAll ({ commit }, content) {
    const misc = await content('/misc').getAll()
    commit('set', misc)
  }
}
