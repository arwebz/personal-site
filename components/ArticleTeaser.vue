<template lang="pug">
  page-section#article-teaster(:title="article.title" :subtitle="articleDate")
    tags(:tags="article.tags")
    .exceprt {{article.excerpt}}
    .read-more
      nuxt-link(:to="article.path") Read more

</template>

<script>
import PageSection from './PageSection'
import Tags from './Tags'
import { formatArticleDate } from '~/helpers/formatArticleDate'

export default {
  components: {
    PageSection,
    Tags
  },
  props: ['article'],
  computed: {
    articleDate () {
      return formatArticleDate(this.article)
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
  margin-bottom: 0.25rem;
}

.read-more {
  margin-top: 0.5rem;
}
</style>

