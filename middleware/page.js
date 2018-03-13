export default function ({ store }) {
  store.commit('page/set', {
    title: '',
    subtitle: '',
    image: '',
    heroType: 'is-primary'
  })
}
