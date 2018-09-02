<template lang="pug">
  page-section
    .content
      div.has-text-grey-light {{articleDate}}
      h2#title {{article.title}} 
      nuxtent-body(:body="article.body")
</template>

<script>
import PageSection from '~/components/PageSection'
import moment from 'moment'
export default {
  components: {
    PageSection
  },
  async asyncData ({ app, params }) {
    return {
      article: await app.$content('/articles').get(`${params.year}/${params.article}`)
    }
  },
  computed: {
    articleDate () {
      return moment(this.article.date, 'YYYY-MM-DD').format('LL')
    }
  }
}
</script>

<style lang="less" scoped>

#title {
  margin-top: 0;
}
</style>
