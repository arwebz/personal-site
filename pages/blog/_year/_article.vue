<template lang="pug">
  page-section
    nuxtent-body(:body="article.body")
    tags(:tags="article.tags")
</template>

<script>
import PageSection from '~/components/PageSection'
import Tags from '~/components/Tags'
import { formatArticleDate } from '~/helpers/formatArticleDate'
export default {
  components: {
    PageSection,
    Tags
  },
  async asyncData ({ app, params }) {
    return {
      article: await app.$content('/blog').get(`${params.year}/${params.article}`)
    }
  },
  computed: {
    articleDate () {
      return formatArticleDate(this.article)
    }
  },
  mounted () {
    this.setPageInfo({
      title: this.article.title,
      subtitle: this.articleDate,
      heroType: 'is-info'
    })
  }
}
</script>

<style lang="less" scoped>
#title {
  margin-top: 0;
}

.tags {
  margin-top: 2rem;
}
</style>
