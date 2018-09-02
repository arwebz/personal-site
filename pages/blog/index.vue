<template lang="pug">
  #blog
    #article(v-for="article in articles")
      article-teaser(:article="article")
</template>

<script>
import ArticleTeaser from '~/components/ArticleTeaser'
import Idea from '~/assets/img/bright-bulb-clear.jpg'
export default {
  components: {
    ArticleTeaser
  },
  async asyncData ({ app }) {
    return {
      articles: await app.$content('/blog').getAll()
    }
  },
  data () {
    return {
      heroBackgroundImage: Idea
    }
  },
  mounted () {
    this.setPageInfo({
      title: 'The Evolving Programmer',
      subtitle: 'Live to learn.',
      image: this.heroBackgroundImage,
      heroType: 'is-info'
    })
  }
}
</script>

