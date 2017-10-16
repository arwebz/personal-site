<template lang="pug">
  b-card(:title="name" :sub-title="time" bg-variant="light")
    p.card-text
      slot
    div(slot="footer" v-if="link != null")
      a.text-muted(:href="link") {{ linkDisplay }}
</template>

<script>
export default {
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
  a {
    text-decoration: none;
  }
</style>
