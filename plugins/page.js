import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'

Vue.mixin({
  computed: mapState({
    pageTitle: state => state.page.title,
    pageSubtitle: state => state.page.subtitle,
    pageImage: state => state.page.image,
    pageHeroType: state => state.page.heroType
  }),
  methods: mapMutations({
    setPageInfo: 'page/set'
  })
})
