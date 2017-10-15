<template lang="pug">
  b-card(:title="name" :sub-title="time")
    p.card-text
      slot
    div(slot="footer" v-if="link != null")
      a.text-muted(:href="link") {{ linkDisplay }}
</template>

<script>
export default {
  props: ['name', 'time', 'link', 'internal', 'github', 'client', 'linkText'],
  data () {
    return {
      linkDisplay: ''
    }
  },
  mounted () {
    if (this.internal != null) {
      this.linkDisplay = 'Internal Application Development'
    } else if (this.github != null) {
      this.linkDisplay = 'View the Repository on Github'
    } else if (this.client != null) {
      this.linkDisplay = `Client: ${this.client}`
    } else {
      this.linkDisplay = this.linkText
    }
  }
}
</script>

<style lang="less" scoped>
  a {
    text-decoration: none;
  }
</style>
