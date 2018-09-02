<template lang="pug">
  #project
    page-section(:title="project.title" :subtitle="subtitle" type="is-default")
      nuxtent-body(:body="project.body")
      p.link
        a(v-if="moreInfo != null" :href="moreInfo.link") {{ linkDisplay }}
</template>

<script>
import PageSection from '~/components/PageSection'
import { formatProjectDate } from '~/helpers/formatProjectDate'

export default {
  components: {
    PageSection
  },
  props: ['project'],
  methods: {
    attachLinkText (obj, linkText) {
      return {
        ...obj, linkText
      }
    }
  },
  computed: {
    moreInfo () {
      if (this.project.internal != null) {
        return this.attachLinkText(
          this.project.internal,
          'Internal Application Development')
      } else if (this.project.github != null) {
        return this.attachLinkText(
          this.project.github,
          'View the Repository on Github')
      } else if (this.project.client != null) {
        return this.attachLinkText(
          this.project.client,
          `Client: ${this.project.client.name}`)
      } else if (this.project.moreInfo != null) {
        return this.attachLinkText(
          this.project.moreInfo,
          this.project.moreInfo.linkText)
      } else {
        return null
      }
    },
    linkDisplay () {
      return this.moreInfo.linkText
    },
    subtitle () {
      return formatProjectDate(this.project)
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  padding-top: 10px;
}
</style>
