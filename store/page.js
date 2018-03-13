export const state = () => ({
  title: '',
  subtitle: '',
  image: '',
  heroType: 'is-primary'
})

export const mutations = {
  set (state, values) {
    Object.assign(state, values)
  }
}
