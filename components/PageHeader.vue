<template lang="pug">
  div
    .hero(ref="banner" :class="heroClass" :style="heroStyle")
      slot.hero-head(name="header")
      .hero-body(name="body")
        .container
          h1.title {{pageTitle}}
          h2.subtitle(v-if="pageSubtitle != null") {{pageSubtitle}}
          slot
      slot.hero-foot(name="footer")
</template>

<script>
export default {
  computed: {
    heroClass () {
      var classes = []
      if (this.pageImage !== '') {
        classes.push('is-large', 'shade')
      }
      if (this.pageHeroType !== '') {
        classes.push(this.pageHeroType)
      }
      return classes
    },
    heroStyle () {
      if (this.pageImage == null) {
        return {}
      }
      return {
        'background-image': `url("${this.pageImage}")`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.shade {
  background-color: rgba(0, 0, 0, .5);
  background-blend-mode: multiply
}
</style>
