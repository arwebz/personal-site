<template lang="pug">
  #project
    hero-section(:title="name" :subtitle="time" type="is-default")
      slot
      p.link
        a(v-if="link != null" :href="link") {{ linkDisplay }}
</template>

<script>
import HeroSection from '~/components/HeroSection'

export default {
  components: {
    HeroSection
  },
  props: ['name', 'time', 'link', 'internal', 'github', 'client', 'linkText'],
  computed: {
    linkDisplay () {
      if (this.internal != null) {
        return 'Internal Application Development'
      } else if (this.github != null) {
        return 'View the Repository on Github'
      } else if (this.client != null) {
        return `Client: ${this.client}`
      } else {
        return this.linkText
      }
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  padding-top: 10px;
}
</style>
