<template lang="pug">
  page-section
    .content
      div#date {{article.date}}
      h2#title {{article.title}} 
      nuxtent-body(:body="article.body")
</template>

<script>
import PageSection from '~/components/PageSection'
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
    articleDate() {

    }
  }
}
</script>

<style lang="less" scoped>
#date {
  color: #ccc;
  font-weight: 500;
}

#title {
  margin-top: 0;
}
</style>
