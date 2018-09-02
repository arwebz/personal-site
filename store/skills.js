import { sortBy } from 'lodash'

export const state = () => ({
  all: []
})

export const mutations = {
  set (state, skills) {
    state.all = skills
  }
}

export const getters = {
  all (state) {
    return state.all
  }
}

export const actions = {
  async fetchAll ({ commit }, content) {
    const skills =
      sortBy(await content('skills').getAll(), 'order')
    commit('set', skills)
  }
}
